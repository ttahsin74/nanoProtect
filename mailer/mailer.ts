import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_ENCRYPTION === "ssl", // true for SSL/TLS
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
} as nodemailer.TransportOptions & { host: string });

export const sendMail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM_ADDRESS,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.log("Error sending email: ", error);

    return NextResponse.json(error, {
      status: 500,
    });
  }
};
