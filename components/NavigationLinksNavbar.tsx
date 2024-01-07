import Link from 'next/link';
import { cn } from '@/lib/utils';


interface NavigationLinksNavbarProps {
    className?: string
}

export default function NavigationLinksNavbar({ className }: NavigationLinksNavbarProps) {
    return (
        <nav className={cn("flex flex-col text-center sm:flex-row pl-0 gap-4 sm:gap-8 w-full justify-center", className)}>
            <Link href='/about-us' className='hover:text-accent-500 transition-[color] duration-300'> Sobre Nosotros</Link>
            <Link href='/terms-of-use' className='hover:text-accent-500 transition-[color] duration-300'> Terminos de Uso</Link>
            <Link href='/privacy-policy' className='hover:text-accent-500 transition-[color] duration-300'> Privacidad</Link>
        </nav>
    )
}