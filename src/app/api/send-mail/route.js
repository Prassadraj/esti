import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body from the request
    const { name, phone, message, email } = body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "prassadpr111@gmail.com", // Your Gmail address
        pass: "tfwmacefxxmsnswo", // Your generated app password
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: email, // Sender's email
      to: "prassadpr111@gmail.com", // Your email
      subject: "Message from website", // Subject line
      text: message, // Plain text message
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `, // HTML body
    });

    return NextResponse.json({
      message: "Email sent successfully!",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
