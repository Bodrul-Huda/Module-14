import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export async function POST(req) {
  const { subject, message } = await req.json();

  const { searchParams } = new URL(req.url);

  let email = searchParams.get("email");
  try {
    let transporter = nodemailer.createTransport(
      smtpTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {
          user: "info@teamrabbil.com",
          pass: "~sR4[bhaC[Qs",
        },
        tls: { rejectUnauthorized: false },
      })
    );

    const mailOption = {
      from: "info@teamrabbil.com",
      to: email,
      subject: "Send Email Tutorial",
      text: "Send Email Tutorial",
      html: `
        <h3>Hello There</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li>
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
