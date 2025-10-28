"use client"
import React, { useState, useEffect } from 'react'

import ImageSlider from '@/components/ImageSlider'
import Cards from '@/components/Cards'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useTranslation, Trans } from 'react-i18next';



const page = ({ }) => {

    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const funFacts = t('about.funFacts.items', { returnObjects: true });




    return (
        <>

            <ImageSlider src1="/about_img/image1.jpg" src2="/about_img/image2.jpg" src3="/about_img/image3.jpg" title1={isMounted ? t('about.hero.title1') : "Fuelled by Curiosity."} title2={isMounted ? t('about.hero.title2') : "Driven by Purpose."} title3={isMounted ? t('about.hero.title3') : "The Human Element."} page_name={isMounted ? t('about.hero.page_name') : "About"} />

            <section className="py-16 px-6 bg-gray-900 relative overflow-hidden">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left - Image with unique animation */}
                    <div className="flex justify-center relative group">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-green-400 to-blue-500 rounded-3xl blur opacity-50 group-hover:opacity-80 transition duration-700"></div>
                        <Image
                            src="/profile.svg"
                            alt="Profile Picture"
                            width={288} // 72 * 4 = 288px
                            height={288} // 72 * 4 = 288px
                            className="relative rounded-3xl shadow-2xl object-cover transform transition-transform duration-700 group-hover:rotate-3 group-hover:scale-105"
                        />
                    </div>

                    {/* Right - Content with animated entrance */}
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fadeInUp">
                            {isMounted ? t('about.intro.title') : "Who Am I?"}

                        </h2>

                        <p className="text-lg leading-relaxed mb-4 text-gray-300 animate-fadeInUp delay-100">
                            {isMounted && (
                                <Trans i18nKey="about.intro.p1">
                                    I’m <span className="text-green-400 font-semibold">Daten</span>,
                                    a curious developer who thrives on <span className="text-green-400">problem-solving</span> and crafting
                                    <span className="text-green-400 font-medium"> user-focused applications</span>.
                                    I bridge the gap between <span className="italic">beautiful interfaces</span> and powerful backends.
                                </Trans>
                            )}
                        </p>

                        <p className="text-lg leading-relaxed mb-6 text-gray-300 animate-fadeInUp delay-200">
                            {isMounted ? t('about.intro.p2') : "Outside of code, I love exploring new technologies, sharing knowledge,and contributing to projects that spark creativity and innovation. 🚀"}

                        </p>

                        {/* Call-to-Action with hover animations */}
                        <div className="flex gap-4 animate-fadeInUp delay-300">
                            <a
                                href="/projects"
                                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
                            >
                                {isMounted ? t('about.intro.cta_projects') : "View My Projects"}
                            </a>
                            <a
                                href="/contact"
                                className="px-6 py-3 border border-green-400 text-green-400 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:text-white"
                            >
                                {isMounted ? t('about.intro.cta_connect') : "Let’s Connect"}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Subtle background animations */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 animate-pulse-slow"></div>
            </section>
            <section className="py-16 px-6 bg-gray-900 relative overflow-hidden">

                <div className="flex flex-col items-center my-16">
                    {/* Main Heading */}
                    {isMounted && (
                        <>
                            <motion.h2
                                className="text-4xl md:text-6xl font-extrabold text-center 
                                   bg-gradient-to-r from-green-300 via-white to-green-500 
                                   bg-clip-text text-transparent tracking-wider drop-shadow-lg"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                {isMounted && t('about.funFacts.heading').split("").map((char, index) => (
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
                                {isMounted ? t('about.funFacts.subheading') : "Little sparks that define who I am ✨"}
                            </motion.p>
                        </>
                    )}
                </div>


                {/* Facts Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

                    {isMounted && Array.isArray(funFacts) && funFacts.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer`}
                        >
                            <div
                                className={`text-4xl mb-4 animate-bounce`}
                                // Note: The color part from your original code was missing, re-adding it
                                style={{ color: `var(--tw-${item.color})` }}
                            >
                                {item.icon}
                            </div>
                            <span className="text-white font-semibold text-center">{item.fact}</span>
                        </div>
                    ))}
                </div>

                {/* Background Animations */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 animate-pulse-slow"></div>
            </section >
            {/* <div className="head"></div> */}

            < Cards />
        </>
    )
}

export default page
