import React from 'react';

const Logo = ({ onLogoClick }) => {
    const handleLogoClick = (event) => {
    
        event.preventDefault();

        if (onLogoClick) {
            onLogoClick();
        }
    };
    return (
        <a href="/" className="nav-item" onClick={handleLogoClick}>
          
            <svg width="210" height="40" viewBox="0 0 210 40" xmlns="http://www.w3.org/2000/svg" aria-label="DatenDiva Logo">
                <style>
                    {`
                        /* --- 1. The Font and Gradient Definitions (Unchanged) --- */
                        .logo-text {
                            font-family: 'Inter', sans-serif;
                            font-size: 32px;
                            font-weight: 800; /* Extra bold for impact */
                            fill: url(#logoGradient);
                            letter-spacing: -1.5px;
                        }

                        /* --- 2. The Staggered "Slide-In" Animation (Updated for more letters) --- */
                        @keyframes slideIn {
                            from {
                                opacity: 0;
                                transform: translateY(15px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        .logo-letter {
                            opacity: 0;
                            animation: slideIn 0.5s ease-out forwards;
                        }
                        
                        .letter-1 { animation-delay: 0.2s; }
                        .letter-2 { animation-delay: 0.3s; }
                        .letter-3 { animation-delay: 0.4s; }
                        .letter-4 { animation-delay: 0.5s; }
                        .letter-5 { animation-delay: 0.6s; }
                        .letter-6 { animation-delay: 0.7s; }
                        .letter-7 { animation-delay: 0.8s; } /* New delay */
                        .letter-8 { animation-delay: 0.9s; } /* New delay */
                        .letter-9 { animation-delay: 1.0s; } /* New delay */

                        /* --- 3. THE HORIZONTAL "SCANNING" ANIMATION (Unchanged) --- */
                        @keyframes scan {
                            0% {
                                transform: translateX(0px);
                                opacity: 0.7;
                            }
                            50% {
                                transform: translateX(10px);
                                opacity: 1;
                            }
                            100% {
                                transform: translateX(0px);
                                opacity: 0.7;
                            }
                        }

                        .logo-dot {
                            fill: #34D399;
                            animation: scan 4s ease-in-out infinite;
                            /* Delayed a bit more to start after the longer text animates in */
                            animation-delay: 1.2s; 
                        }
                    `}
                </style>

                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#06df73' }} />
                        <stop offset="100%" style={{ stopColor: '#06df73' }} />
                    </linearGradient>
                </defs>

             

           
                <text x="0" y="30" className="logo-text">
                    <tspan className="logo-letter letter-1">D</tspan>
                    <tspan className="logo-letter letter-2">a</tspan>
                    <tspan className="logo-letter letter-3">t</tspan>
                    <tspan className="logo-letter letter-4">e</tspan>
                    <tspan className="logo-letter letter-5">n</tspan>
                    <tspan className="logo-letter letter-6">D</tspan>
                    <tspan className="logo-letter letter-7">i</tspan>
                    <tspan className="logo-letter letter-8">v</tspan>
                    <tspan className="logo-letter letter-9">a</tspan>
                </text>

                <circle cx="170" cy="29" r="5" className="logo-dot" />
            </svg>
        </a>
    );
};

export default Logo;

