import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const REQUIRED_ENV_VARS = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
];

const missingEnv = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (missingEnv.length > 0) {
      console.error(
        "Missing SMTP configuration keys:",
        missingEnv.join(", ")
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please try again later or reach out directly.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      replyTo: email,
      to: process.env.CONTACT_RECIPIENT || "vichucoding@gmail.com",
      subject: `New blog message from ${email}`,
      text: message,
      html: message
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join(""),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}

