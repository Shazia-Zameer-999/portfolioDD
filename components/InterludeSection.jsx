"use client";

import React, { useRef, useEffect,useState } from 'react';
import './InterludeSection.css'; // We will create this CSS file next
import { ArrowDown } from 'lucide-react'; // 'lucide-react' is great for icons
import { useTranslation } from 'react-i18next';


const InterludeSection = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const sectionRef = useRef(null);

    // This effect tracks the mouse to move the spotlight
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                // We use CSS custom properties to pass mouse coordinates to the CSS
                sectionRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                sectionRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup: remove the event listener when the component unmounts
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