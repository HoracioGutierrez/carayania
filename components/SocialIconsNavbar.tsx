import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';


interface SocialIconsNavbarProps {
    className?: string
}

export default function SocialIconsNavbar({ className }: SocialIconsNavbarProps) {
    return (
        <nav className={cn("flex flex-col sm:flex-row pl-0 gap-4 sm:gap-8 w-full justify-center", className)}>
            <a target='_blank' rel="noopener noreferrer" href="https://instagram.com/horagutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                <InstagramIcon />
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/horacioegutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                <LinkedinIcon />
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://github.com/HoracioGutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                <GithubIcon />
            </a>
        </nav>
    )
}