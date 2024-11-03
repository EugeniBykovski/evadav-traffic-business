import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true, // Включаем режим отладки
  logger: true, // Логируем процесс отправки
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Received request:", req.method, req.body);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled" });
  }

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: subject,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }\n\nMessage:\n${message}`,
    });

    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error); // Логируем полную ошибку
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
}
