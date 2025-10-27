import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email.'],
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email.',
        ],
    },
    number: {
        type: String, // Store phone numbers as a String
        required: [true, 'Please provide a number.'],
        // You can optionally add a regex 'match' to validate the format
        // For example, this allows 10-13 digits, optionally starting with a '+'
        match: [/^[+]?[0-9]{10,13}$/, 'Please provide a valid phone number.']
    },
    message: {
        type: String,
        required: [true, 'Please provide a message.'],
    },
}, { timestamps: true }); // `timestamps: true` adds `createdAt` and `updatedAt` fields automatically

// This line prevents a Mongoose error in Next.js development mode where the model is re-compiled on every hot reload.
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);