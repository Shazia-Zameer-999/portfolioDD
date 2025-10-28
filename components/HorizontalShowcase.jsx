"use client";
import React, { useRef, useEffect, useState, createRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalShowcase.css'; 
import { ArrowRight, X, Github } from 'lucide-react';




gsap.registerPlugin(ScrollTrigger);

// Dummy data for your projects
const projects = [
    {
        title: "Project One",
        description: "A description of the project, highlighting the challenges and solutions.",
        image: "/image10.jpg",
        tech: ["Next.js", "GSAP", "MongoDB"],
        videoSrc: "/hero-video.mp4", // Add path to video
        screenshots: ["/image10.jpg", "/image10.jpg"], // Add paths to screenshots
        detailedInfo: "Here you can write a long, detailed paragraph about the project's goals, the problems you solved, your technical approach, and the final results. This demonstrates your thinking process.",
        repoLink: "https://github.com/your-username/project-one-repo"

    },
    {
        title: "Project Two",
        description: "This project focused on creating a seamless user experience with animations.",
        image: "/image20.jpg",
        tech: ["React", "Framer Motion", "TailwindCSS"],
        videoSrc: "/showcase-video2.mp4",
        screenshots: ["/image20.jpg", "/image20.jpg"],
        detailedInfo: "This project was a deep dive into performance optimization for complex animations. The main challenge was to ensure a smooth 60fps experience on all devices while handling a large amount of data.",
        repoLink: "https://github.com/your-username/project-two-repo" // ✅ Add this

    },
];

const HorizontalShowcase = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const showcaseRef = useRef(null);
    const horizontalWrapperRef = useRef(null);

    const panelRefs = useRef([]);
    panelRefs.current = projects.map(
        (project, index) => panelRefs.current[index] ?? createRef()
    );


    useEffect(() => {
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            let mm = ScrollTrigger.matchMedia();
            mm.add({
                isDesktop: "(min-width: 769px)",
                isMobile: "(max-width: 768px)"
            }, (context) => {
                let { isDesktop, isMobile } = context.conditions;

                if (isDesktop) {
                    const scrollWidth = horizontalWrapperRef.current.offsetWidth - window.innerWidth;
                    gsap.to(horizontalWrapperRef.current, {
                        x: -scrollWidth,
                        ease: "none",
                        scrollTrigger: {
                            trigger: showcaseRef.current,
                            pin: true,
                            scrub: 1,
                            end: () => "+=" + scrollWidth,
                        }
                    });
                }

                if (isMobile) {
                    panelRefs.current.forEach((panelRef) => {
                        gsap.from(panelRef.current, {
                            opacity: 0,
                            y: 50,
                            scrollTrigger: {
                                trigger: panelRef.current,
                                start: "top 80%",
                                end: "bottom 20%",
                                toggleActions: "play none none reverse",
                            }
                        });
                    });
                }
            });

        }, showcaseRef);
        return () => ctx.revert();
    }, []);



    return (
        <>
            <section ref={showcaseRef} className="showcase-section">
                <div ref={horizontalWrapperRef} className="horizontal-wrapper">
                    {projects.map((project, index) => (
                        // 4. Assign the ref from our array to each panel div
                        <div key={index} ref={panelRefs.current[index]} className="project-panel">
                            <div className="project-image">
                                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                            </div>
                            <div className="project-details">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                                <button onClick={() => setSelectedProject(project)} className="know-more-btn">
                                    <span>Know More</span>
                                    <ArrowRight className="know-more-icon" size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Conditionally render the overlay if a project is selected */}
            {selectedProject && (
                <div className="project-overlay">
                    <div className="overlay-content">
                        <button onClick={() => setSelectedProject(null)} className="close-btn">
                            <X size={24} />
                        </button>
                        <div className="overlay-header">
                            <h3>{selectedProject.title}</h3>
                            {/* 2. Add the new link button here */}
                            <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link-btn">
                                <Github size={20} />
                                <span>View Code</span>
                            </a>
                        </div>


                        <div className="media-gallery">
                            <video src={selectedProject.videoSrc} controls autoPlay muted loop></video>
                            {selectedProject.screenshots.map((ss, i) => (
                                <Image key={i} src={ss} alt={`Screenshot ${i + 1}`} width={800} height={450} />
                            ))}
                        </div>

                        <p className="detailed-info">
                            {selectedProject.detailedInfo}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default HorizontalShowcase;