"use client";
import { useLoading } from '@/context/LoadingContext';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const TransitionLink = ({ href, children, ...props }) => {
    const { setIsLoading } = useLoading();
    const router = useRouter();
    const pathname = usePathname();

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     if (pathname !== href) {
    //         setIsLoading(true);
    //         setTimeout(() => {
    //             router.push(href);
    //             // Give it a moment before hiding the loader on the new page
    //             setTimeout(() => setIsLoading(false), 500);
    //         }, 500); // Duration of the loader
    //     }
    // };

    const handleClick = (e) => {
        e.preventDefault();
        // Only start the loading process if we're going to a new page.
        if (pathname !== href) {
            setIsLoading(true); // 1. Turn the loader ON.
            router.push(href);    // 2. Tell Next.js to start navigating.
        }
    };

    return (
        <Link href={href} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
};

export default TransitionLink;