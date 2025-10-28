"use client"
import React, { useRef, useEffect, useState } from 'react'
import Card from '@/components/Card'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';




const Cards = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const heading = "My Tech Arsenal ⚡";

    const gridRef = useRef(null);
    useEffect(() => {
        if (!isMounted) return;
        let ctx = gsap.context(() => {
            gsap.fromTo(".feature-card",
                {
                    opacity: 0,
                    y: 300
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reset',
                        markers: false,
                    },
                    stagger: 0.2
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, [isMounted]);
    const skillItems = t('skills.items', { returnObjects: true });

    return (
        <section className="relative py-16 px-6 bg-gray-900 overflow-hidden">

            <div className="flex flex-col items-center my-16">
                {/* Main Heading */}
                <motion.h2
                    className="text-4xl md:text-6xl font-extrabold text-center 
                   bg-gradient-to-r from-green-300 via-white to-green-500 
                   bg-clip-text text-transparent tracking-wider drop-shadow-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {isMounted && t('skills.heading').split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h2>

                {/* Glowing Animated Underline */}
                <motion.div
                    className="h-1 w-24 md:w-40 bg-gradient-to-r from-green-300 via-white to-green-500 rounded-full mt-4 shadow-[0_0_12px_rgba(34,197,94,0.8)]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    style={{ originX: 0.5 }}
                />

                {/* Subtitle / Tagline */}
                <motion.p
                    className="mt-6 text-gray-200 text-center text-lg md:text-xl max-w-2xl italic"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                    {isMounted && t('skills.subheading')}
                </motion.p>
            </div>

            {/* Background animated circles */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full opacity-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 animate-pulse-slow"></div>

            <div ref={gridRef} className="skill_cards flex flex-wrap justify-center items-center gap-14 mt-8 mb-8 relative z-10">
                {isMounted && Array.isArray(skillItems) && skillItems.map((card, index) => (
                    <Card
                        key={index}
                        className="feature-card"
                        src={card.src}
                        skill={card.skill}
                        info={card.info}
                    />
                ))}
                
            </div>
        </section>
    )
}

export default Cards