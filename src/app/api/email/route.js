import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export async function POST(req, res) {
  const { searchParams } = new URL(req.url);

  let ToEmail = searchParams.get("email");

  // Set up Transporter

  try {
    let Transporter = nodemailer.createTransport(
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

    // Prepare Email

    let myEmail = {
      from: "Test email from Next js application <info@teamrabbil.com",
      to: ToEmail,
      subject: " Test Email",
      Text: "Test email from Next js application",
    };

    let result = await Transporter.sendMail(myEmail);
    return NextResponse.json({ msg: result });
  } catch (e) {
    return NextResponse.json({ msg: "Failed" });
  }
}
