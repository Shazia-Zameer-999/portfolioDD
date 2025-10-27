"use client"; 

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TransitionLink from './TransitionLink';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.fromTo(".reveal-text", 
                { 
                    y: "100%" 
                }, 
                {
                    y: "0%",    
                    duration: 1,
                    stagger: 0.2, 
                    ease: "power3.out",
                    delay: 0.5,  
                }
            );

          
            gsap.fromTo(".fade-in-item",
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 1.2, 
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );

        }, heroRef); 

        return () => ctx.revert(); 
    }, []); 

    return (
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <div className="max-w-4xl">
                
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                    <div className="overflow-hidden py-1">
                        <div className="reveal-text">Creative Developer</div>
                    </div>
                    <div className="overflow-hidden py-1">
                        <div className="reveal-text">Building Modern</div>
                    </div>
                    <div className="overflow-hidden py-1">
                        <div className="reveal-text text-green-400">Web Experiences.</div>
                    </div>
                </h1>
                
                <p className="fade-in-item max-w-2xl mx-auto mt-8 text-lg text-gray-400">
                    I'm Shazia, a full-stack developer passionate about crafting beautiful, functional, and user-centric digital solutions.
                </p>

                <div className="fade-in-item mt-12">
                    <TransitionLink 
                        href="/projects" 
                        className="bg-green-500 text-black font-semibold text-lg px-8 py-4 rounded-full hover:bg-green-400 transition-colors duration-300"
                    >
                        View My Work
                    </TransitionLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;

