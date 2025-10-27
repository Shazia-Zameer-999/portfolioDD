"use client";
import { useTranslation } from 'react-i18next';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Typed from 'typed.js';
import TransitionLink from './TransitionLink';

const Hero = () => {
    const { t } = useTranslation();

    const heroRef = useRef(null);
    const typedTargetRef = useRef(null);
    const typedInstance = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    useEffect(() => {
        if (isMounted) {
            let ctx = gsap.context(() => {
                gsap.fromTo(".fade-in-text",
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.2,
                        ease: "power3.out",
                        onComplete: () => {
                            const typedOptions = {
                                strings: [
                                    t('hero_dynamic_1'),
                                    t('hero_dynamic_2'),
                                    t('hero_dynamic_3')
                                ],
                                typeSpeed: 50,
                                backSpeed: 30,
                                backDelay: 2000,
                                loop: true,
                                smartBackspace: true,
                            };
                            typedInstance.current = new Typed(typedTargetRef.current, typedOptions);
                        }
                    }
                );
                gsap.fromTo(".fade-in-item", {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                });
            }, heroRef);

            return () => {
                ctx.revert();
                if (typedInstance.current) {
                    typedInstance.current.destroy();
                }
            };
        }
    }, [t, isMounted]);
    return (
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center px-6">

            <div className="absolute top-0 left-0 w-full h-full z-10">

                <div className="absolute inset-0 z-20 bg-black/60"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-10 w-full h-full object-cover"
                >

                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="relative z-30 max-w-4xl">


                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    <span className="fade-in-text">{isMounted ? t('hero_greeting') : 'I Build'}</span>
                    <span className="text-green-400" ref={typedTargetRef}></span>
                </h1>

                <p className="fade-in-item max-w-2xl mx-auto mt-8 md:text-lg text-gray-400">
                    {isMounted ? t('hero_description') : "I'm Shazia, a full-stack developer passionate about crafting beautiful, functional, and user-centric digital solutions."}
                </p>

                <div className="fade-in-item mt-12 flex max-[500px]:flex-col gap-5 justify-center">

                    <TransitionLink
                        href="/projects"
                        className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-bold 
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
                        group-hover:translate-x-full ease">
                            {isMounted ? t('hero_button_work') : 'View my work'}
                        </span>
                        <span className="relative invisible">{isMounted ? t('hero_button_work') : 'View my work'}</span>
                    </TransitionLink>

                    <TransitionLink
                        href="/contact"
                        className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-bold 
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
    group-hover:translate-x-full ease">
                            {isMounted ? t('hero_button_contact') : 'Contact'}
                        </span>
                        <span className="relative invisible">{isMounted ? t('hero_button_contact') : 'Contact'}</span>
                    </TransitionLink>
                </div>

            </div>
        </section>
    );
};

export default Hero;

