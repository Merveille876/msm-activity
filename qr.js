const QRCode = require("qrcode");

const url = "http://192.168.1.132:3000";

QRCode.toString(url, { type: "terminal" }, (err, qr) => {
  if (err) console.error(err);
  console.log(qr);
});
