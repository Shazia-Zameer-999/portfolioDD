"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import '../i18n';





export default function ImageSlider({ src1, src2, src3, title1, title2, title3, page_name }) {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const images = [
        {
            src: src1,
            alt: "img1",
            title: title1

        },
        {
            src: src2,
            alt: "img2",
            title: title2


        },
        {
            src: src3,
            alt: "img3",
            title: title3

        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isHovered, setIsHovered] = useState(false);

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
        console.log("currentIndex:", currentIndex)
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log("currentIndex:", currentIndex)
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleMouseOver = () => {
        console.log("true")
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        console.log("false")
        setIsHovered(false);

    };

    return (<>
        <div className="relative ">
            <div className="relative w-full mx-auto bg-[#111b2e]">
                <div onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    className="relative h-[460px]   overflow-hidden shadow-2xl transition-all duration-500 ease-in-out brightness-40"

                >
                    {/* Render the current image */}
                    <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        fill
                        style={{ objectFit: "cover" }}
                        className=" transition-all duration-500 ease-in-out cursor-pointer"

                    />
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute md:left-10 left-4 top-1/2 transform h-[50px] w-12 rounded-xl -mt-[2px] -translate-y-1/2 bg-white/10 text-white flex items-center justify-center transition-all duration-300 hover:bg-white/30"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="text-white w-6 h-6" />
                </button>
                <button
                    className="absolute md:right-10 right-4 top-1/2 transform h-[50px] w-12 rounded-xl -mt-[2px] -translate-y-1/2 bg-white/10 text-white flex items-center justify-center transition-all duration-300 hover:bg-white/20"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <ChevronRight className="text-white w-6 h-6 " />
                </button>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-2 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`md:h-4 md:w-4 h-3 w-3  mx-1 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#beff46] ${index === currentIndex ? "bg-[#beff46]" : "bg-gray-300"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="info absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center mb-100 flex-col  ">
                <h1 className="text-white md:text-4xl text-2xl font-[cursive] whitespace-nowrap" >{images[currentIndex].title}</h1>
            </div>
            <div className="which_page absolute md:bottom-10 md:right-[3%] bottom-7 right-[2.5%] text-white md:text-[18px] text-[13px] flex font-bold">
                <a href="/">{isMounted ? t('nav_home') : 'Home'} &nbsp; </a>
                <p className="text-green-500">&gt;</p>
                <p >&nbsp;{page_name}</p>
            </div>
        </div>
    </>
    );
}
