import { NextRequest, NextResponse } from "next/server";
import sql from "mssql";
import nodemailer from "nodemailer";
import twilio from "twilio";

// --- Config SQL Server ---
const config = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  server: process.env.DB_HOST!,
  database: process.env.DB_NAME!,
  port: Number(process.env.DB_PORT!) || 1433,
  options: { encrypt: false, trustServerCertificate: true },
};

// --- Nodemailer (Email) ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT!) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
});

// --- Twilio (WhatsApp) ---
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

// GET: récupérer tous les messages
export async function GET() {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM Users ORDER BY CreatedAt DESC");
    await pool.close();
    return NextResponse.json(result.recordset);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}

// POST: ajouter un message
export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Nom, email et message sont requis." },
        { status: 400 }
      );
    }

    const pool = await sql.connect(config);
    await pool
      .request()
      .input("name", sql.NVarChar(150), name)
      .input("email", sql.NVarChar(150), email)
      .input("phone", sql.NVarChar(20), phone || null)
      .input("message", sql.NVarChar(sql.MAX), message)
      .query(
        "INSERT INTO Users (FullName, Email, Phone, Message) VALUES (@name, @email, @phone, @message)"
      );
    await pool.close();

    return NextResponse.json({ message: "Message ajouté !" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// PUT: envoyer une réponse
export async function PUT(req: NextRequest) {
  try {
    const { userId, email, phone, message } = await req.json();
    if (!message) {
      return NextResponse.json(
        { message: "Message de réponse requis." },
        { status: 400 }
      );
    }

    // Envoi Email par défaut
    if (email) {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Réponse à votre message",
        text: message,
        html: `<p>${message}</p>`,
      });
    }

    // Envoi WhatsApp si phone fourni
    if (phone) {
      await twilioClient.messages.create({
        from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
        to: `whatsapp:${phone}`,
        body: message,
      });
    }

    // Marquer comme répondu
    if (userId) {
      const pool = await sql.connect(config);
      await pool
        .request()
        .input("userId", sql.Int, userId)
        .query("UPDATE Users SET IsReplied = 1 WHERE UserId = @userId");
      await pool.close();
    }

    return NextResponse.json({
      message: "Réponse envoyée et message marqué comme répondu !",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de la réponse." },
      { status: 500 }
    );
  }
}
