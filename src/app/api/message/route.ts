import { sendMail } from "@/lib/email/sendMail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Get the visitor's name, email and message from the request body
    const { name, email, message } = await req.json();

    // Send the message
    await sendMail({
      to: process.env.EMAIL || "",
      subject: `New Message received from ${name}`,
      message: `A new message was sent by ${name} via the form on our website. The message says: "${name}"`,
    });

    // Send message to the visitor's email address
    await sendMail({
      to: email,
      subject: `Hello ${name}, from Smart Switch Mobile`,
      message:
        "Hey there " +
        name +
        " , thanks for reaching out. Our team will get back to you in up to 12 hours. Thanks for making the Smart Switch",
    });

    return NextResponse.json({
      message: "Message sent successfully",
    });
  } catch (e) {
    console.log("An error occured while sending message [SERVER SIDE]: ", e);

    return NextResponse.json(
      {
        message: "An error occured while sending message ",
      },
      { status: 500 },
    );
  }
}
