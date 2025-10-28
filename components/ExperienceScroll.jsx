"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScroll.css';
import '../i18n';


gsap.registerPlugin(ScrollTrigger);

const ExperienceScroll_contact = () => {
  const pageRef = useRef(null)
  const headRef = useRef(null)
  useEffect(() => {
    if (!headRef.current || !pageRef.current) return;

    const animation = gsap.to(headRef.current, {
      xPercent: -68,
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        markers: false,
        start: "top top",
        end: "top -200%",
        scrub: 1,
        pin: true,
      },
    });

    return () => {
      // animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);


  return (

    <>
      <div ref={pageRef} className="page2">
        <h1 ref={headRef}>Let's Connect</h1>
      </div>
    </>
  )
}

export default ExperienceScroll_contact
