"use client"
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import '../i18n';


const ContactForm = ({ onClose }) => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setResponseMessage(null);
        setErrors({});

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setResponseMessage({ type: 'success', text: result.message });
                // Reset form after successful submission
                setFormData({ name: '', email: '', number: '', message: '' });
                setErrors({});

                setTimeout(() => onClose(), 2000); // Close form after 2 seconds
            } else {
                setResponseMessage({ type: 'error', text: result.message || 'Something went wrong.' });
                if (result.errors) {
                    setErrors(result.errors);
                }
            }
        } catch (error) {
            setResponseMessage({ type: 'error', text: 'An error occurred while sending your message.' });
        } finally {
            setIsLoading(false);
        }
    };

    // If there's a success message, we can show a confirmation screen
    if (responseMessage && responseMessage.type === 'success') {
        return (
            <section className="bg-white dark:bg-gray-900 absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{isMounted ? t('contact_thankmsg') : 'Thank You!'}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">{responseMessage.text}</p>
                </div>
            </section>
        );
    }


    return (
        <section className="bg-white dark:bg-[#0e172b] absolute inset-0 z-20 flex items-center justify-center">
            <button onClick={onClose}>
                <svg className='absolute md:w-10 text-white  md:top-10 md:right-15 top-4 right-4 w-8'
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white animated-underline mx-auto w-70">{isMounted ? t('contact_head1') : 'Contact Me'}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{isMounted ? t('contact_head2') : "Ready to turn your vision into a seamless, user-centric digital experience? I'm currently available for freelance opportunities."}</p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{isMounted ? t('contact_entry1') : 'Your name'}
                        </label>
                        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${errors.name ? 'border-red-500 focus:border-red-500 dark:border-red-500' : 'border-gray-300 focus:border-primary-500'}`} placeholder="Name" required />
                        {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{isMounted ? t('contact_entry2') : 'Your email'}</label>
                        <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${errors.email ? 'border-red-500 focus:border-red-500 dark:border-red-500' : 'border-gray-300 focus:border-primary-500'}`} placeholder="name@example.com" required />
                        {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{isMounted ? t('contact_entry3') : 'Your number'}</label>
                        <input type="tel" id="number" name="number" onChange={handleChange} value={formData.number} className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${errors.number ? 'border-red-500 focus:border-red-500 dark:border-red-500' : 'border-gray-300 focus:border-primary-500'}`} placeholder="your number" required />
                        {errors.number && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.number}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{isMounted ? t('contact_entry3') : 'Your message'}</label>
                        <textarea id="message" rows="6" name="message" onChange={handleChange} value={formData.message} className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${errors.message ? 'border-red-500 focus:border-red-500 dark:border-red-500' : 'border-gray-300 focus:border-primary-500'}`} placeholder="Leave a comment..."></textarea>
                        {errors.message && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.message}</p>}
                    </div>
                    <button disabled={isLoading} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-600 sm:w-fit hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">{isLoading
                        ? (isMounted ? t('contact_btn2') : 'Sending...')
                        : (isMounted ? t('contact_btn1') : 'Send Message')
                    }</button>

                </form>
            </div>
        </section>
    )
}

export default ContactForm
