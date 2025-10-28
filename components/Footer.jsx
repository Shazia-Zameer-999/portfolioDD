"use client";
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import TransitionLink from './TransitionLink';
import { useTranslation } from 'react-i18next';



const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <footer className="bg-slate-900 text-gray-400 py-16 px-6 pt-4">
            <div className="max-w-7xl mx-auto">
                {/* Column 4: Back to Top */}
                <div className="flex justify-center md:justify-end items-start">
                    <button onClick={handleScrollToTop} className="group flex flex-col items-center text-gray-400 hover:text-white transition-colors mx-auto mb-15">
                        <div className="md:w-22 md:h-13 w-16 h-12 border-2 border-gray-600 group-hover:border-green-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                            <svg className="w-8 h-8 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                        </div>
                        <span className="mt-2 font-semibold"></span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Column 1: Brand & Logo */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-sm">{isMounted ? t('footer_description') : 'A full-stack developer crafting modern web experiences.'}</p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">{isMounted ? t('footer_menu_title') : 'Menu'}
                        </h3>
                        <ul className="space-y-2">
                            <li><TransitionLink href="/about" className="hover:text-green-400 transition-colors">{isMounted ? t('nav_about') : 'About'}</TransitionLink></li>
                            <li><TransitionLink href="/projects" className="hover:text-green-400 transition-colors">{isMounted ? t('nav_projects') : 'Projects'}</TransitionLink></li>
                            <li><TransitionLink href="/contact" className="hover:text-green-400 transition-colors">{isMounted ? t('nav_contact') : 'Contact'}</TransitionLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Socials */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">{isMounted ? t('footer_contact_title') : 'Get in Touch'}
                        </h3>
                        <a href="mailto:shaziazameer7867@gmail.com" className="block hover:text-green-400 transition-colors">datendiva.mailer@gmail.com
                        </a>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://github.com/Shazia-Zameer-999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                            </a>
                            {/* Add your LinkedIn icon/link here */}
                            <a href="https://www.linkedin.com/in/daten-diva-903014332/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>


                </div>

                <div className="text-center mt-16 border-t border-slate-800 pt-8">
                    <p>© {new Date().getFullYear()} {isMounted ? t('footer_copyright') : 'Shazia Zameer. All Rights Reserved.'}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

