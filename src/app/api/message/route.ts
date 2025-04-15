import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    try {
        // Get the visitor's name, email and message from the request body
        const {name} = await req.json();
        const {email} = await req.json();
        const {message} = await req.json();

        // Send the message
        // TODO: Add message-sending logic

        // Send message to the visitor's email address
        // TODO: Add message-sending logic

        return NextResponse.json({
            message: "Message sent successfully"
        })
    } catch (e) {
        console.log("An error occured while sending message [SERVER SIDE]: ", e);

        return NextResponse.json({
            message: "An error occured while sending message "
        }, {status: 500})
    }
}