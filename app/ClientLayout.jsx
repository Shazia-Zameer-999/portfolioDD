"use client";
import '../i18n';

import { LoadingProvider, useLoading } from '@/context/LoadingContext';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function AppContent({ children }) {
    const { isLoading, setIsLoading } = useLoading();
    const pathname = usePathname();
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 2500);
        }
    }, [pathname]);

    return (
        <>
            <CustomCursor />
            {isLoading && <Preloader />}
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default function ClientLayout({ children }) {
    return (
        <LoadingProvider>
            <AppContent>{children}</AppContent>
        </LoadingProvider>
    );
}
