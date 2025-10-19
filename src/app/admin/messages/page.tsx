"use client";

import { useEffect, useState } from "react";

interface Message {
  UserId: number;
  FullName: string;
  Email: string;
  Phone?: string | null;
  Message: string;
  CreatedAt: string;
  IsReplied?: number;
}

export default function MessagesDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [reply, setReply] = useState<{ [key: number]: string }>({});

  const fetchMessages = async () => {
    const res = await fetch("/api/messages");
    const data = await res.json();
    setMessages(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleReply = async (msg: Message, viaWhatsApp = false) => {
    if (!reply[msg.UserId]) return alert("Tapez un message avant d'envoyer");

    try {
      const res = await fetch("/api/messages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: msg.UserId,
          email: msg.Email,
          phone: viaWhatsApp ? msg.Phone : null,
          message: reply[msg.UserId],
        }),
      });
      const data = await res.json();
      alert(data.message);

      // Mise à jour locale
      setMessages((prev) =>
        prev.map((m) =>
          m.UserId === msg.UserId ? { ...m, IsReplied: 1 } : m
        )
      );
      setReply((prev) => ({ ...prev, [msg.UserId]: "" }));
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi de la réponse.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">💬 Dashboard des messages</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.UserId}
              className={`p-4 border rounded shadow space-y-2 ${
                msg.IsReplied ? "bg-green-50" : "bg-white"
              }`}
            >
              <p>
                <strong>Nom:</strong> {msg.FullName}
              </p>
              <p>
                <strong>Email:</strong> {msg.Email}
              </p>
              {msg.Phone && (
                <p>
                  <strong>Téléphone:</strong> {msg.Phone}
                </p>
              )}
              <p>
                <strong>Message:</strong> {msg.Message}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(msg.CreatedAt).toLocaleString()}
              </p>
              <p
                className={`text-sm font-semibold ${
                  msg.IsReplied ? "text-green-600" : "text-red-600"
                }`}
              >
                {msg.IsReplied ? "✅ Répondu" : "❌ Non répondu"}
              </p>

              {!msg.IsReplied && (
                <>
                  <textarea
                    placeholder="Répondre..."
                    className="w-full p-2 border rounded"
                    value={reply[msg.UserId] || ""}
                    onChange={(e) =>
                      setReply((prev) => ({
                        ...prev,
                        [msg.UserId]: e.target.value,
                      }))
                    }
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleReply(msg)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:scale-105 transition"
                    >
                      Envoyer Email
                    </button>
                    {msg.Phone && (
                      <button
                        onClick={() => handleReply(msg, true)}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:scale-105 transition"
                      >
                        Envoyer WhatsApp
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
