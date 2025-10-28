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


export async function POST(req) {
    try {
        await connectToDatabase();
        const data = await req.json();


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


            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }


            return NextResponse.json({
                success: false,
                message: "Validation failed. Please check your input.",
                errors: errors
            }, { status: 400 });
        }

        console.error(error);

        return NextResponse.json({ success: false, message: 'An error occurred.', error: error.message }, { status: 500 });
    }
}