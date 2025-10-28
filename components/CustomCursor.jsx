"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; 
const CustomCursor = () => {
    
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
      
        const onMouseMove = (event) => {
            const { clientX, clientY } = event;

          
            gsap.to(cursorDotRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.2,
            });

           
            gsap.to(cursorOutlineRef.current, {
                x: clientX,
                y: clientY,
                
                duration: 0.1,
                ease: "power2.out",
            });
        };

        
        const onMouseHover = () => {
            
            gsap.to(cursorOutlineRef.current, {
                
                scale: 0.5,
                
            });
            gsap.to(cursorDotRef.current, {
                scale: 0,
            });
        };

        const onMouseUnhover = () => {
            
            gsap.to(cursorOutlineRef.current, {
                scale: 1,
                
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

