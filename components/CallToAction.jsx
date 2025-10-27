"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './CallToAction.css';
import { useTranslation } from 'react-i18next';


const CallToAction = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const sectionRef = useRef(null);
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    // GSAP animations will go here
    useEffect(() => {
        // We'll add the GSAP code in the next step
    }, []);
    // In CallToAction.jsx, inside the component

    useEffect(() => {
        const section = sectionRef.current;
        const button = buttonRef.current;
        const text = textRef.current;

        const ctx = gsap.context(() => {
            // --- Animate the headline text ---
            gsap.from(text, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                }
            });

            // --- Animate the background SVG lines ---
            gsap.to(".svg-line", {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            });

            // --- Magnetic Button Effect ---
            const moveButton = (e) => {
                const { offsetX: x, offsetY: y } = e;
                const { offsetWidth: width, offsetHeight: height } = button;
                const moveX = (x - width / 2) * 0.4;
                const moveY = (y - height / 2) * 0.4;
                gsap.to(button, { x: moveX, y: moveY, duration: 0.3 });
            };

            const leaveButton = () => {
                gsap.to(button, { x: 0, y: 0, duration: 0.3 });
            };

            button.addEventListener("mousemove", moveButton);
            button.addEventListener("mouseleave", leaveButton);

        }, sectionRef);

        // Cleanup
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="cta-section">
            <div className="cta-content">
                <h2 ref={textRef} className="cta-headline">
                    {isMounted ? t('projects.cta.headline') : "Let's build the future, together."}
                </h2>
                <a ref={buttonRef} href="/contact" className="cta-button">
                    {isMounted ? t('projects.cta.button') : "Get in Touch"}
                </a>
            </div>

            {/* Background SVG Graphics */}
            <svg className="cta-background-svg" width="100%" height="100%" viewBox="0 0 1440 500" preserveAspectRatio="none">
                <path d="M-200 100 L1640 400" className="svg-line" />
                <path d="M-100 400 L1540 100" className="svg-line" />
            </svg>
        </section>
    );
};

export default CallToAction;