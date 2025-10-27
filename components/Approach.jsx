"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';



gsap.registerPlugin(ScrollTrigger);


const Approach = () => {
    const [contactMenu, setContactMenu] = useState(false)
    const contact_click = () => {
        setContactMenu(!contactMenu)
    }

    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textContentRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 40%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse'
                }
            });


            tl.fromTo(imageRef.current,
                {

                    clipPath: 'circle(0% at 50% 50%)'
                },
                {

                    clipPath: 'circle(75% at 50% 50%)',
                    duration: 2,
                    ease: 'power3.out'
                }
            );


            tl.fromTo(textContentRef.current,
                {
                    opacity: 0,
                    y: 150
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out'
                },
                "-=1.2"
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen bg-black flex items-center justify-center overflow-hidden">

            {/* The Image Layer (bottom) */}
            <div ref={imageRef} className="absolute inset-0">
                <img src="/approach-bg.jpg" alt="Problem solving approach" className="w-full h-full object-cover" />
            </div>

            {/* The Dark Overlay (middle) */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* The Text Content Layer (top) */}
            <div ref={textContentRef} className="relative z-10 text-center text-white p-6 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{isMounted ? t('approach_title') : 'My Approach'}</h2>
                <p className="text-lg md:text-xl text-gray-300">
                    {isMounted ? t('approach_desc') : 'I believe in a structured, user-centric process. It starts with a deep understanding of the problem, followed by meticulous planning, clean execution, and rigorous testing to deliver solutions that are not just functional, but exceptional.'}

                </p>
                <button onClick={contact_click}
                    className="relative inline-flex items-center justify-center p-4 px-20 py-6 overflow-hidden font-bold mt-5
                      text-green-400 transition duration-300 ease-out border-2 
                      border-green-500 rounded-full shadow-md group"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full 
                   text-black duration-300 -translate-x-full 
                   bg-green-500 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full 
                   text-green-400 transition-all duration-300 transform 
                     group-hover:translate-x-full ease">{isMounted ? t('approach_btn') : "Let's get started"}

                    </span>
                    <span className="relative invisible"></span>
                </button>
            </div>
            {contactMenu && (<ContactForm onClose={() => setContactMenu(false)} />

            )}
        </section>
    );
};

export default Approach;

