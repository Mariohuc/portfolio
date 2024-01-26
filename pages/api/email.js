const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.MY_EMAIL, // sender address
        to: process.env.MY_EMAIL, // list of receivers
        subject: `Message from ${req.body.senderName} (${req.body.senderEmail})`,
        text: req.body.message, // plain text body
        html: `<em>${req.body.message}</em>`, // html body
      });

      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      res.status(500).json({ message: "Email was not sent, try later please" });
      console.error(error);
    }
  } else {
    res.status(404).json({ message: "Route not found" });
  }
}
