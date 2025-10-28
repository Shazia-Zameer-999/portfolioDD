"use client"
import React, { useEffect, useRef, useState } from 'react';
import TransitionLink from './TransitionLink';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useTranslation } from 'react-i18next';
import '../i18n';



const Projects = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const gridRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".project-card",
                {
                    opacity: 0,
                    y: 300
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ".project-card",
                        start: "top 90%",
                        toggleActions: 'play none none reset'
                    },

                    stagger: 0.2
                }
            );
        }, gridRef)
        return () => ctx.revert();

    }, [])

    return (
        <section id="projects" className="bg-black py-24 px-6 overflow-hidden">
            <div ref={gridRef} className="max-w-7xl mx-auto">
                <h2 className="project-card text-4xl md:text-6xl font-bold text-center text-white mb-16 animated-underline md:w-100 mx-auto flex  justify-center w-50">
                    {isMounted ? t('projects_title') : 'My Work'}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="project-card lg:col-span-2 bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-white mb-4">{isMounted ? t('passop_title') : "PassOP - Password Manager"}</h3>
                        <p className="text-gray-400 mb-6">
                            {isMounted ? t('passop_desc') : "A complete, secure, full-stack password manager with a React frontend, Node.js/Express backend, and MongoDB database. Features full user authentication with JWTs."}
                        </p>
                        {/* You can add a screenshot here if you like */}
                        <TransitionLink href="https://github.com/Shazia-Zameer-999/PassOP-Password-Manager" className="text-green-400 font-semibold hover:underline ">
                            {isMounted ? t('passop_cta') : "View Case Study →"}
                        </TransitionLink>
                    </div>

                    {/* --- ABOUT ME CELL (Small Cell) --- */}
                    <div className="project-card bg-slate-900 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center  hover:shadow-green-500/20 transition-shadow">
                        <img
                            src="profile.svg"
                            alt="Shazia Zameer"
                            className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-green-500/50"
                        />
                        <h3 className="text-2xl font-bold text-white">{isMounted ? t('about_me_title') : "DatenDiva"}</h3>
                        <p className="text-gray-400">{isMounted ? t('about_me_desc') : "Full-Stack Developer"}</p>
                    </div>

                    {/* --- MORE PROJECTS (Small Cells) --- */}
                    <div className="project-card bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-shadow">
                        <h3 className="text-3xl font-bold text-white mb-4">{isMounted ? t('portfolio_title') : "Portfolio Website"}</h3>
                        <p className="text-gray-400 mb-6">
                            {isMounted ? t('portfolio_desc') : "The very site you're on! Built with Next.js, Tailwind CSS, and GSAP for a smooth, animated, and modern user experience."}
                        </p>
                        <a href="https://github.com/Shazia-Zameer-999/my-portfolio" target="_blank" rel="noopener noreferrer" className="text-green-400 font-semibold hover:underline">
                            {isMounted ? t('portfolio_cta') : "View Code →"}
                        </a>
                    </div>

                    <div className="project-card bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-shadow lg:col-span-2">
                        <h3 className="text-3xl font-bold text-white mb-4">{isMounted ? t('upcoming_title') : "Upcoming Project..."}</h3>
                        <p className="text-gray-400">
                            {isMounted ? t('upcoming_desc') : "Stay tuned for my next project, where I'll be exploring real-time chat applications with WebSockets and modern cloud deployment strategies."}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;