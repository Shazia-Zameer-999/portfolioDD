// "use client";
// import React, { useRef, useEffect, useState, createRef, useLayoutEffect } from 'react';
// import Image from 'next/image';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './HorizontalShowcase.css';
// import { ArrowRight, X, Github } from 'lucide-react';




// gsap.registerPlugin(ScrollTrigger);

// // Dummy data for your projects
// const projects = [
//     {
//         "title": "Full-Stack Linktree Clone",
//         "description": "A dynamic 'link in bio' application where users can claim a unique handle, add a profile picture, and manage a list of their personal links, all stored in a MongoDB database.",
//         "video": "/previeww3.mp4",
//         "tech": [
//             "Next.js (App Router)",
//             "React",
//             "MongoDB",
//             "Tailwind CSS",
//             "Vercel"
//         ],
//         "videoSrc": "/previeww2.mp4",
//         "screenshots": [
//             "/show1.png",
//             "/show2.png",
//             "/show3.png"
//         ],
//         "detailedInfo": "This project is a complete, full-stack application that demonstrates a deep understanding of modern web architecture. The primary goal was to build a multi-user 'link in bio' service from scratch. The technical approach involved using the Next.js App Router to create both a static frontend and a server-side backend. A form on the '/generate' page collects user data, which is then securely sent to a custom API endpoint at '/api/add'. This API route handles data validation and saves the user's new profile to a MongoDB Atlas database. The final, public-facing page uses a dynamic route, '/[handle]', which fetches the specific user's data from the database on the server and renders their links. A major technical challenge involved debugging a Vercel deployment error, which was solved by identifying a component using the 'useSearchParams' hook. I fixed the build failure by correctly wrapping this dynamic, client-side component in a React <Suspense> boundary, proving a strong understanding of Next.js static generation and client-side interactivity. Still working on it...",
//         "repoLink": "https://github.com/Shazia-Zameer-999/Linktree",
//         "liveDemo": "https://linktreeclone-eta.vercel.app/"
//     },
//     {
//         "title": "BitLinks - URL Shortener",
//         "description": "A fast, clean, and open-source URL shortener application. Allows users to shorten long URLs and optionally provide a custom alias, storing the mapping in MongoDB.",
//         "video": "/demo_1.mp4",
//         "tech": [
//             "Next.js (App Router)",
//             "React",
//             "MongoDB",
//             "Tailwind CSS",
//             "Vercel",
//             "React Hot Toast",
//             "Framer Motion"
//         ],
//         "videoSrc": "/demo_2.mp4",
//         "screenshots": [
//             "/demo1.png",
//             "/demo2.png",
//             "/demo3.png"
//         ],
//         "detailedInfo": "BitLinks is a full-stack URL shortening service built with a focus on simplicity and speed using the Next.js App Router. Users submit a long URL via the main page, optionally providing a custom short alias. This data is sent to a dedicated API endpoint (/api/generate) which validates the input, checks for alias uniqueness (or generates a random short ID if no alias is provided), and saves the URL mapping to a MongoDB Atlas database. The application leverages Next.js dynamic routes ('/[shorturl]') to handle redirection. When a user visits a shortened link, this server-side route fetches the corresponding long URL from the database and performs a server-side redirect. Key technical challenges included resolving deployment issues related to environment variables (correctly differentiating between server-side secrets like MONGODB_URI and client-side configuration, opting for relative paths over NEXT_PUBLIC_HOST), and fixing Next.js-specific ESLint errors (replacing `<a>` tags with `<Link>` for internal navigation). The project utilizes Tailwind CSS for styling, Framer Motion for subtle UI animations, and React Hot Toast for user feedback.",
//         "repoLink": "https://github.com/Shazia-Zameer-999/BitLinks",
//         "liveDemo": "https://bit-links-zeta.vercel.app/"
//     }
// ];

// const HorizontalShowcase = () => {
//     const [selectedProject, setSelectedProject] = useState(null);

//     const showcaseRef = useRef(null);
//     const horizontalWrapperRef = useRef(null);

//     const panelRefs = useRef([]);
//     panelRefs.current = projects.map(
//         (project, index) => panelRefs.current[index] ?? createRef()
//     );


//     useEffect(() => {
//     }, []);

//     useLayoutEffect(() => {
//         const ctx = gsap.context(() => {
//             let mm = ScrollTrigger.matchMedia();
//             mm.add({
//                 isDesktop: "(min-width: 769px)",
//                 isMobile: "(max-width: 768px)"
//             }, (context) => {
//                 let { isDesktop, isMobile } = context.conditions;

//                 if (isDesktop) {
//                     const scrollWidth = horizontalWrapperRef.current.offsetWidth - window.innerWidth;
//                     gsap.to(horizontalWrapperRef.current, {
//                         x: -scrollWidth,
//                         ease: "none",
//                         scrollTrigger: {
//                             trigger: showcaseRef.current,
//                             pin: true,
//                             scrub: 1,
//                             end: () => "+=" + scrollWidth,
//                         }
//                     });
//                 }

//                 if (isMobile) {
//                     panelRefs.current.forEach((panelRef) => {
//                         gsap.from(panelRef.current, {
//                             opacity: 0,
//                             y: 50,
//                             scrollTrigger: {
//                                 trigger: panelRef.current,
//                                 start: "top 80%",
//                                 end: "bottom 20%",
//                                 toggleActions: "play none none reverse",
//                             }
//                         });
//                     });
//                 }
//             });

//         }, showcaseRef);
//         return () => ctx.revert();
//     }, []);



//     return (
//         <>
//             <section ref={showcaseRef} className="showcase-section">
//                 <div ref={horizontalWrapperRef} className="horizontal-wrapper">
//                     {projects.map((project, index) => (
//                         // 4. Assign the ref from our array to each panel div
//                         <div key={index} ref={panelRefs.current[index]} className="project-panel">
//                             <div className="project-image">
//                                 {/* <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" /> */}
//                                 <video src={project.video} controls autoPlay muted loop></video>
//                             </div>
//                             <div className="project-details">
//                                 <h2>{project.title}</h2>
//                                 <p>{project.description}</p>
//                                 <div className="tech-stack">
//                                     {project.tech.map(t => <span key={t}>{t}</span>)}
//                                 </div>
//                                 <button onClick={() => setSelectedProject(project)} className="know-more-btn">
//                                     <span>Know More</span>
//                                     <ArrowRight className="know-more-icon" size={20} />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* 3. Conditionally render the overlay if a project is selected */}
//             {selectedProject && (
//                 <div className="project-overlay">
//                     <div className="overlay-content">
//                         <button onClick={() => setSelectedProject(null)} className="close-btn">
//                             <X size={24} />
//                         </button>
//                         <div className="overlay-header">
//                             <h3>{selectedProject.title}</h3>
//                             {/* 2. Add the new link button here */}
//                             <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link-btn">
//                                 <Github size={20} />
//                                 <span>View Code</span>
//                             </a>
//                         </div>


//                         <div className="media-gallery">
//                             <video src={selectedProject.videoSrc} controls autoPlay muted loop></video>
//                             {selectedProject.screenshots.map((ss, i) => (
//                                 <Image key={i} src={ss} alt={`Screenshot ${i + 1}`} width={800} height={450} />
//                             ))}
//                         </div>

//                         <p className="detailed-info">
//                             {selectedProject.detailedInfo}
//                         </p>
//                         <a
//                             href={selectedProject.liveDemo}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center text-green-400 font-medium hover:text-green-300 hover:underline transition-colors duration-300"
//                         >
//                             Link to the project
//                             <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300">
//                                 &rarr;
//                             </span>
//                         </a>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default HorizontalShowcase;
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
        "title": "Full-Stack Linktree Clone",
        "description": "A dynamic 'link in bio' application where users can claim a unique handle, add a profile picture, and manage a list of their personal links, all stored in a MongoDB database.",
        "video": "/previeww3.mp4",
        "tech": [
            "Next.js (App Router)",
            "React",
            "MongoDB",
            "Tailwind CSS",
            "Vercel"
        ],
        "videoSrc": "/previeww2.mp4",
        "screenshots": [
            "/show1.png",
            "/show2.png",
            "/show3.png"
        ],
        "detailedInfo": "This project is a complete, full-stack application that demonstrates a deep understanding of modern web architecture. The primary goal was to build a multi-user 'link in bio' service from scratch. The technical approach involved using the Next.js App Router to create both a static frontend and a server-side backend. A form on the '/generate' page collects user data, which is then securely sent to a custom API endpoint at '/api/add'. This API route handles data validation and saves the user's new profile to a MongoDB Atlas database. The final, public-facing page uses a dynamic route, '/[handle]', which fetches the specific user's data from the database on the server and renders their links. A major technical challenge involved debugging a Vercel deployment error, which was solved by identifying a component using the 'useSearchParams' hook. I fixed the build failure by correctly wrapping this dynamic, client-side component in a React <Suspense> boundary, proving a strong understanding of Next.js static generation and client-side interactivity. Still working on it...",
        "repoLink": "https://github.com/Shazia-Zameer-999/Linktree",
        "liveDemo": "https://linktreeclone-eta.vercel.app/"
    },
    {
        "title": "BitLinks - URL Shortener",
        "description": "A fast, clean, and open-source URL shortener application. Allows users to shorten long URLs and optionally provide a custom alias, storing the mapping in MongoDB.",
        "video": "/demo_1.mp4",
        "tech": [
            "Next.js (App Router)",
            "React",
            "MongoDB",
            "Tailwind CSS",
            "Vercel",
            "React Hot Toast",
            "Framer Motion"
        ],
        "videoSrc": "/demo_2.mp4",
        "screenshots": [
            "/demo1.png",
            "/demo2.png",
            "/demo3.png"
        ],
        "detailedInfo": "BitLinks is a full-stack URL shortening service built with a focus on simplicity and speed using the Next.js App Router. Users submit a long URL via the main page, optionally providing a custom short alias. This data is sent to a dedicated API endpoint (/api/generate) which validates the input, checks for alias uniqueness (or generates a random short ID if no alias is provided), and saves the URL mapping to a MongoDB Atlas database. The application leverages Next.js dynamic routes ('/[shorturl]') to handle redirection. When a user visits a shortened link, this server-side route fetches the corresponding long URL from the database and performs a server-side redirect. Key technical challenges included resolving deployment issues related to environment variables (correctly differentiating between server-side secrets like MONGODB_URI and client-side configuration, opting for relative paths over NEXT_PUBLIC_HOST), and fixing Next.js-specific ESLint errors (replacing `<a>` tags with `<Link>` for internal navigation). The project utilizes Tailwind CSS for styling, Framer Motion for subtle UI animations, and React Hot Toast for user feedback.",
        "repoLink": "https://github.com/Shazia-Zameer-999/BitLinks",
        "liveDemo": "https://bit-links-zeta.vercel.app/"
    }, {
        "title": "BitLinks - URL Shortener",
        "description": "A fast, clean, and open-source URL shortener application. Allows users to shorten long URLs and optionally provide a custom alias, storing the mapping in MongoDB.",
        "video": "/demo_1.mp4",
        "tech": [
            "Next.js (App Router)",
            "React",
            "MongoDB",
            "Tailwind CSS",
            "Vercel",
            "React Hot Toast",
            "Framer Motion"
        ],
        "videoSrc": "/demo_2.mp4",
        "screenshots": [
            "/demo1.png",
            "/demo2.png",
            "/demo3.png"
        ],
        "detailedInfo": "BitLinks is a full-stack URL shortening service built with a focus on simplicity and speed using the Next.js App Router. Users submit a long URL via the main page, optionally providing a custom short alias. This data is sent to a dedicated API endpoint (/api/generate) which validates the input, checks for alias uniqueness (or generates a random short ID if no alias is provided), and saves the URL mapping to a MongoDB Atlas database. The application leverages Next.js dynamic routes ('/[shorturl]') to handle redirection. When a user visits a shortened link, this server-side route fetches the corresponding long URL from the database and performs a server-side redirect. Key technical challenges included resolving deployment issues related to environment variables (correctly differentiating between server-side secrets like MONGODB_URI and client-side configuration, opting for relative paths over NEXT_PUBLIC_HOST), and fixing Next.js-specific ESLint errors (replacing `<a>` tags with `<Link>` for internal navigation). The project utilizes Tailwind CSS for styling, Framer Motion for subtle UI animations, and React Hot Toast for user feedback.",
        "repoLink": "https://github.com/Shazia-Zameer-999/BitLinks",
        "liveDemo": "https://bit-links-zeta.vercel.app/"
    }
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
                    console.log("Window Width:", window.innerWidth);
                    console.log("Wrapper Offset Width:", horizontalWrapperRef.current.offsetWidth);
                    console.log("Calculated Scroll Width:", scrollWidth);
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
    }, [projects.length]);



    return (
        <>
            <section ref={showcaseRef} className="showcase-section">
                <div ref={horizontalWrapperRef} className="horizontal-wrapper">
                    {projects.map((project, index) => (
                        // 4. Assign the ref from our array to each panel div
                        <div key={index} ref={panelRefs.current[index]} className="project-panel">
                            <div className="project-image">
                                {/* <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" /> */}
                                <video src={project.video} controls autoPlay muted loop></video>
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
                        <a
                            href={selectedProject.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-green-400 font-medium hover:text-green-300 hover:underline transition-colors duration-300"
                        >
                            Link to the project
                            <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300">
                                &rarr;
                            </span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default HorizontalShowcase;