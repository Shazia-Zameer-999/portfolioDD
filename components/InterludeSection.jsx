"use client";

import React, { useRef, useEffect,useState } from 'react';
import './InterludeSection.css'; 
import { ArrowDown } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';



const InterludeSection = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                
                sectionRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                sectionRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

     
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section ref={sectionRef} className="interlude-section">
            <div className="content-wrapper">
                <h2 className="interlude-heading">
                   {isMounted ? t('contact.interlude.heading') : " Great things are built together."}

                </h2>
                <p className="interlude-subheading">
                    {isMounted ? t('contact.interlude.subheading') : "Let's start a conversation."}
                </p>
            </div>
            <div className="scroll-indicator">
                <ArrowDown size={24} />
            </div>
        </section>
    );
};

export default InterludeSection;