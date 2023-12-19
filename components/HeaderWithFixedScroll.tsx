"use client"

import { useEffect } from 'react';
import { cn } from '@/lib/utils';


interface Props {
    children: React.ReactNode;
}

export default function HeaderWithFixedScroll({ children }: Props) {

    useEffect(() => {
        const header = document.querySelector('header')
        const scrollListener = () => {
            if (header)
                if (window.scrollY > 20) {
                    header.classList.add("header-fixed")
                } else {
                    header.classList.remove("header-fixed")
                }
        }
        window.addEventListener('scroll', scrollListener)
        scrollListener()
        return () => window.removeEventListener('scroll', scrollListener)
    }, [])

    return (
        <header className={cn("py-4 h-24 transition-all duration-300")}>
            {children}
        </header>
    )
}