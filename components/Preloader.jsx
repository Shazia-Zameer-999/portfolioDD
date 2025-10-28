import React from 'react';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 animate-fade-in">
            
            <svg className="w-36 h-36 loader-svg" viewBox="0 0 100 100">
              
                <circle
                    className="loader-arc arc-1"
                    cx="50"
                    cy="50"
                    r="20"
                    strokeWidth="8"
                    stroke="#4A90E2"
                />

               
                <circle
                    className="loader-arc arc-2"
                    cx="50"
                    cy="50"
                    r="30"
                    strokeWidth="6"
                    stroke="#50E3C2"
                />


                <circle
                    className="loader-arc arc-3"
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="4"
                    stroke="#B8E986"
                />
            </svg>
        </div>
    );
};

export default Preloader;

