"use client";
import React, { useState, useEffect, useRef } from 'react';
import TransitionLink from './TransitionLink';
import { gsap } from 'gsap';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t, i18n } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isWelcomeCardVisible, setIsWelcomeCardVisible] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false);


    const welcomeCardRef = useRef(null);
    const langMenu = useRef(null)

    const handleLangMenuToggle = () => {
        setIsLangOpen(!isLangOpen);
    };
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isWelcomeCardVisible && welcomeCardRef.current && !welcomeCardRef.current.contains(event.target)) {
                setIsWelcomeCardVisible(false);
            }
            if (isLangOpen && langMenu.current && !langMenu.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isWelcomeCardVisible, isLangOpen]);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        gsap.fromTo(".nav-item",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
        );
    }, []);
    const showWelcomeCard = () => {

        setIsWelcomeCardVisible(true);

    };


    useEffect(() => {
        if (isMenuOpen) {
            gsap.fromTo(".mobile-nav-link",
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
            );
        }
    }, [isMenuOpen]);


    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 ">
                    <div className='flex justify-between items-center'>
                        <Logo onLogoClick={showWelcomeCard} />
                        <div className='flex gap-5 items-center'>
                            <nav className="hidden md:flex items-center space-x-8">
                                <TransitionLink href="/" className="nav-item animated-underline text-white hover:text-green-400 transition-colors duration-300">{isMounted ? t('nav_home') : 'Home'}</TransitionLink>
                                <TransitionLink href="/about" className="nav-item animated-underline text-white hover:text-green-400 transition-colors duration-300">{isMounted ? t('nav_about') : 'About'}</TransitionLink>
                                <TransitionLink href="/projects" className="nav-item animated-underline text-whitehover:text-green-400 transition-colors duration-300">{isMounted ? t('nav_projects') : 'Projects'}</TransitionLink>
                                <TransitionLink href="/contact" className="nav-item animated-underline text-white hover:text-green-400 transition-colors duration-300">{isMounted ? t('nav_contact') : 'Contact'}</TransitionLink>
                            </nav>


                            <div className="relative animated-underline" ref={langMenu}>
                                <button
                                    onClick={handleLangMenuToggle}
                                    className="nav-item text-white hover:text-green-400 transition-colors duration-300 flex items-center gap-1"
                                >
                                    <span className='sm:flex hidden'>{isMounted ? t('nav_languages') : 'Languages'}</span>
                                    <img className='w-10 fill-black' src="/lang_icon.png" alt="lang_icon" />

                                    {/* A little chevron icon that rotates when the menu is open */}
                                    <svg className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>


                                {isLangOpen && (
                                    <div className="absolute top-full sm:right-0 right-[-10px] mt-2 sm:w-40 bg-slate-900/50 backdrop-blur-lg rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                                        <button onClick={() => changeLanguage('en')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors border-b-slate-900 border-b-1">
                                            English
                                        </button>
                                        <button onClick={() => changeLanguage('hi')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors border-b-slate-900 border-b-1">
                                            Hindi
                                        </button>
                                        <button onClick={() => changeLanguage('sp')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors  border-b-slate-900 border-b-1">
                                            Spanish
                                        </button>
                                        <button onClick={() => changeLanguage('ar')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors  border-b-slate-900 border-b-1">
                                            Arabic
                                        </button>
                                        <button onClick={() => changeLanguage('fr')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors  border-b-slate-900 border-b-1">
                                            French
                                        </button>
                                        <button onClick={() => changeLanguage('ge')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors  border-b-slate-900 border-b-1">
                                            German
                                        </button>
                                        <button onClick={() => changeLanguage('ko')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors border-b-slate-900 border-b-1 ">
                                            Korean
                                        </button>
                                        <button onClick={() => changeLanguage('po')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors  border-b-slate-900 border-b-1">
                                            Portuguese
                                        </button>
                                        <button onClick={() => changeLanguage('ru')} className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-slate-600 transition-colors ">
                                            Russian
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* --- THE NEW, ANIMATED HAMBURGER BUTTON --- */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`md:hidden text-white z-[110] p-2 rounded-full transition-colors duration-300 hover:bg-white/10 ${isMenuOpen ? 'menu-open' : ''}`}
                                aria-label="Toggle menu"
                            >
                                <div className="w-6 h-5 flex flex-col justify-center items-center gap-[6px]">
                                    <div className="hamburger-line line-1 w-full h-[3px] bg-white rounded-full"></div>
                                    <div className="hamburger-line line-2 w-full h-[3px] bg-white rounded-full"></div>
                                    <div className="hamburger-line line-3 w-full h-[3px] bg-white rounded-full"></div>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </header>
            {isWelcomeCardVisible && (

                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 bg-opacity-70 backdrop-blur-md">

                    <div ref={welcomeCardRef} className="bg-slate-800 text-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-slate-700 text-center relative">

                        {/* Close Button */}

                        <button onClick={() => setIsWelcomeCardVisible(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">

                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                        </button>



                        <h2 className="text-3xl font-bold text-green-400 mb-4">{isMounted ? t('nav_msg1') : 'Hello There!'}</h2>

                        <p className="text-gray-300">

                            {isMounted ? t('nav_msg2') : 'Thanks for visiting...'}

                        </p>

                    </div>

                </div>

            )}

            {/* --- THE NEW, IMMERSIVE MOBILE MENU OVERLAY --- */}
            <div className={`
                fixed inset-0 bg-black/80 backdrop-blur-lg z-[100] 
                transform transition-all duration-500 ease-in-out 
                ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} 
                md:hidden
            `}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {/* We add the 'mobile-nav-link' class for our GSAP animation */}
                    <TransitionLink href="/" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link animated-underline text-3xl font-semibold text-gray-300 hover:text-green-400">{isMounted ? t('nav_home') : 'Home'}</TransitionLink>
                    <TransitionLink href="/about" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link text-3xl font-semibold animated-underline text-gray-300 hover:text-green-400">{isMounted ? t('nav_about') : 'About'}</TransitionLink>
                    <TransitionLink href="/projects" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link text-3xl animated-underline font-semibold text-gray-300 hover:text-green-400">{isMounted ? t('nav_projects') : 'Projects'}</TransitionLink>
                    <TransitionLink href="/contact" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link text-3xl font-semibold animated-underline text-gray-300 hover:text-green-400">{isMounted ? t('nav_contact') : 'Contact'}</TransitionLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;


