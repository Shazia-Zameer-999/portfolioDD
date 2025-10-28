"use client";
import { useLoading } from '@/context/LoadingContext';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';


const TransitionLink = ({ href, children, ...props }) => {
    const { setIsLoading } = useLoading();
    const router = useRouter();
    const pathname = usePathname();

 

    const handleClick = (e) => {
        e.preventDefault();
       
        if (pathname !== href) {
            setIsLoading(true); 
            router.push(href); 
        }
    };

    return (
        <Link href={href} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
};

export default TransitionLink;