"use client"
import React,{useState,useEffect} from 'react'
import ImageSlider from '@/components/ImageSlider'
import HorizontalShowcase from '@/components/HorizontalShowcase'
import CallToAction from '@/components/CallToAction'
import ElasticString from '@/components/ElasticString'
import { useTranslation } from 'react-i18next';

const page = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (<>
        <ImageSlider src1="/projects_img/image7.jpg" src2="/projects_img/image8.jpg" src3="/projects_img/image9.jpg" title1={isMounted ? t('projects.slider.title1') : "Architecting for Scale."}
            title2={isMounted ? t('projects.slider.title2') : "Bringing Ideas to Life."} title3={isMounted ? t('projects.slider.title3') : "Where Data Meets Design."} page_name={isMounted ? t('projects.slider.pageName') : "Projects"} />
        <ElasticString />
        <HorizontalShowcase />
        <CallToAction />
    </>
    )
}

export default page
