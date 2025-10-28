"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';




gsap.registerPlugin(ScrollTrigger);


const Showcase = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
   
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionRef = useRef(null);
    const stickyContainerRef = useRef(null);
    const bannerRef = useRef(null);
    const videoRef = useRef(null);

    
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            
            tl.to(bannerRef.current, { yPercent: -100 });
           
            tl.to(videoRef.current, { yPercent: -100 });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="relative h-[100vh] md:h-[160vh] bg-black">
                <div ref={stickyContainerRef} className="sticky top-0 md:h-screen h-[50vh] overflow-hidden">

                   
                    <div className="absolute inset-0 z-10  ">
                        
                        <img
                            src="/showcase-bg.jpg"
                            alt="Creative showcase background"
                            className="w-full md:h-full h-[50vh]  brightness-60 contrast-125  mix-blend-multiply"
                        />
                    </div>

                    
                    <div ref={videoRef} className="absolute inset-0 z-20">
                  
                    </div>

                    
                    <div ref={bannerRef} className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white 
                    bg-[#020617]/60 backdrop-blur-sm">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
                        >
                            <svg className="w-12 h-12 text-white transform transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3.33 1.67a1 1 0 011.34 0l4.66 3.33a1 1 0 010 1.66l-4.66 3.33a1 1 0 01-1.34 0V5.67z"></path></svg>
                        </button>
                        <h2 className="text-3xl font-bold mt-6">{isMounted ? t('showcase_msg') : 'Watch My Process'}</h2>
                    </div>
                </div>
            </section>

          
            {isModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md">
                    <div className="relative w-full max-w-4xl">
                        <button onClick={() => setIsModalOpen(false)} className="absolute -top-12 right-0 text-white p-2">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <video controls autoPlay className="w-full h-[60vh] rounded-lg">
                            <source src="/showcase-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </>
    );
};

export default Showcase;

