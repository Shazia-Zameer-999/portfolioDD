"use client";
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './ElasticString.css';
import { useTranslation } from 'react-i18next';


const ElasticString = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerRef = useRef(null);

  const pathRefs = useRef([]);

  pathRefs.current = Array(3).fill(0).map((_, i) => pathRefs.current[i] ?? React.createRef());


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;

      
      const initialPaths = [
        `M 10 90 Q 500 90 990 90`,
        `M 10 100 Q 500 100 990 100`,
        `M 10 110 Q 500 110 990 110`,
      ];

     
      const tweens = [];

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { top, left, width, height } = container.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top; 

        
        pathRefs.current.forEach((pathRef, index) => {
          const path = pathRef.current;
          if (!path) return;

          
          const yOffset = (index - 1) * 10; 
          const newControlY = y + yOffset;
          const newPath = `M 10 ${100 + yOffset} Q ${x} ${newControlY} 990 ${100 + yOffset}`;

          
          if (tweens[index]) tweens[index].kill();

          gsap.to(path, {
            attr: { d: newPath },
            duration: 0.1,
            ease: "power3.out",
          });
        });
      };

      const handleMouseLeave = () => {
        pathRefs.current.forEach((pathRef, index) => {
          const path = pathRef.current;
          if (!path) return;

          
          tweens[index] = gsap.to(path, {
            attr: { d: initialPaths[index] },
            duration: 2,
            ease: "elastic.out(1.5, 0.1)",
          });
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="elastic-string-section">
      <p className="string-intro-text">{isMounted ? t('projects.elasticString.intro') : "Where complex ideas manifest through elegant code."}</p>
      <div ref={containerRef} className="string-interactive-area">
        <svg width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet">
          
          {pathRefs.current.map((ref, index) => (
            <path
              key={index}
              ref={ref}
              
              d={
                index === 0 ? "M 10 90 Q 500 90 990 90" :
                  index === 1 ? "M 10 100 Q 500 100 990 100" :
                    "M 10 110 Q 500 110 990 110"
              }
            />
          ))}
        </svg>
      </div>
      <p className="string-outro-text">{isMounted ? t('projects.elasticString.outro') : "Crafting dynamic and responsive user experiences."}</p>
    </section>
  );
};

export default ElasticString;