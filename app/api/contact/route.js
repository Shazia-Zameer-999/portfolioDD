import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '@/models/Contact';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

async function connectToDatabase() {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    return mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

// This is the handler for POST requests.
export async function POST(req) {
    try {
        await connectToDatabase();
        const data = await req.json();

        // Use the Contact model to create a new document in the database
        const newContact = await Contact.create(data);
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'datendiva.mailer@gmail.com', 
            subject: `New Portfolio Contact from ${data.name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Number:</strong> ${data.number}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
            `,
        });

        return NextResponse.json({ success: true, message: 'Message sent successfully!', data: newContact }, { status: 201 });
    } catch (error) {
        if (error.name === 'ValidationError') {
            let errors = {};

            // Go through each validation error and create a map of field: message
            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }

            // Return a 400 status with a generic message and the detailed errors object
            return NextResponse.json({
                success: false,
                message: "Validation failed. Please check your input.",
                errors: errors
            }, { status: 400 });
        }

        console.error(error);
        // A more specific error message can be returned based on the error type
        return NextResponse.json({ success: false, message: 'An error occurred.', error: error.message }, { status: 500 });
    }
}