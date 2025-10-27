"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';


gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const gridRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".feature-card",
                {
                    opacity: 0,
                    y: 400
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ".feature-card",
                        start: 'top 80%',
                        toggleActions: 'play none none reset'
                    },
                    stagger: 0.2
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-slate-950 text-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="feature-card text-4xl md:text-6xl font-bold mb-4 animated-underline lg:w-[60%] md:mx-auto">{isMounted ? t('why_choose_title') : "Why Work With Me?"}</h2>
                    <p className="text-gray-400 feature-card text-lg max-w-3xl mx-auto">
                        {isMounted ? t('why_choose_subtitle') : 'I combine technical expertise with a passion for design to build products that are not only functional but also beautiful and intuitive.'}
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Feature Card 1: Pixel-Perfect Design */}
                    <div className="feature-card bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <div className="mb-4 text-green-400">
                            {/* SVG Icon for Design */}
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{isMounted ? t('why_choose_card1_title') : 'Pixel-Perfect Design'}</h3>
                        <p className="text-gray-400">
                            {isMounted ? t('why_choose_card1_desc') : 'I bring ideas to life with a keen eye for detail, ensuring every element is perfectly crafted and responsive on all devices.'}
                        </p>
                    </div>

                    {/* Feature Card 2: Robust Backend */}
                    <div className="feature-card bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <div className="mb-4 text-green-400">
                            {/* SVG Icon for Backend */}
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{isMounted ? t('why_choose_card2_title') : 'Robust Backend Logic'}</h3>
                        <p className="text-gray-400">
                            {isMounted ? t('why_choose_card2_desc') : 'I build secure, scalable, and efficient server-side applications with clean APIs and reliable database management.'}

                        </p>
                    </div>

                    {/* Feature Card 3: Modern Technologies */}
                    <div className="feature-card bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <div className="mb-4 text-green-400">
                            {/* SVG Icon for Technology */}
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{isMounted ? t('why_choose_card3_title') : 'Modern Technologies'}</h3>
                        <p className="text-gray-400">
                            {isMounted ? t('why_choose_card3_desc') : 'I stay up-to-date with the latest industry trends, using powerful tools like Next.js, GSAP, and Tailwind CSS to build cutting-edge solutions.'}

                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;