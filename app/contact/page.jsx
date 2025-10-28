"use client"
import React, { useState, useEffect } from 'react'

import ImageSlider from '@/components/ImageSlider'
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/Contact_form2';
import InterludeSection from '@/components/InterludeSection';


const page = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (

    <>

      <ImageSlider src1="/contact_img/image4.jpg" src2="/contact_img/image5.jpg" src3="/contact_img/image6.jpg" title1={isMounted ? t('contact.slider.title1') : "Let's Build Something Great Together."} title2={isMounted ? t('contact.slider.title2') : "Let's Connect..."} title3={isMounted ? t('contact.slider.title3') : "Your Next Project Starts Here."} page_name={isMounted ? t('contact.slider.pageName') : "Contact"} />


      <InterludeSection />
      <ContactForm />



    </>
  )
}

export default page
