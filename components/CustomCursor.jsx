"use client"; // This component uses hooks, so it must be a client component.

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // We'll use GSAP for the smooth "follow" animation
import '../i18n';


const CustomCursor = () => {
    // Refs to our two cursor elements
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        // This function will run every time the mouse moves
        const onMouseMove = (event) => {
            const { clientX, clientY } = event;

            // Move the small dot instantly to the mouse position
            gsap.to(cursorDotRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.2,
            });

            // Animate the larger outline to follow the mouse with a slight delay
            gsap.to(cursorOutlineRef.current, {
                x: clientX,
                y: clientY,
                // THE CHANGE IS HERE: Increased duration for a slower, smoother effect
                duration: 0.1,
                ease: "power2.out",
            });
        };

        // This function handles the hover effect
        const onMouseHover = () => {
            // When hovering over a link or button, make the cursor shrink
            gsap.to(cursorOutlineRef.current, {
                // THE CHANGE IS HERE: Scale is now 0.5 to shrink the circle
                scale: 0.5,
                // borderColor: '#06df73',
            });
            gsap.to(cursorDotRef.current, {
                scale: 0,
            });
        };

        const onMouseUnhover = () => {
            // When leaving the link, return to the default state
            gsap.to(cursorOutlineRef.current, {
                scale: 1,
                // borderColor: '#06df73',
            });
            gsap.to(cursorDotRef.current, {
                scale: 1,
            });
        };

        window.addEventListener("mousemove", onMouseMove);

        document.querySelectorAll('a, button, [role="button"], input[type="submit"]').forEach((el) => {
            el.addEventListener("mouseenter", onMouseHover);
            el.addEventListener("mouseleave", onMouseUnhover);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.querySelectorAll('a, button, [role="button"], input[type="submit"]').forEach((el) => {
                el.removeEventListener("mouseenter", onMouseHover);
                el.removeEventListener("mouseleave", onMouseUnhover);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorOutlineRef} className="cursor-outline"></div>
            <div ref={cursorDotRef} className="cursor-dot"></div>
        </>
    );
};

export default CustomCursor;

