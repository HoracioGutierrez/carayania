import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import smallAvatar from '../assets/small-avatar.png';


export default function LayoutFooter() {
    return (
        <footer className="px-4 py-4 dark:transparent dark:text-gray-400 text-xs">
            <div className="container flex flex-col sm:flex-row flex-wrap items-center justify-center mx-auto space-y-4 xs:justify-between xs:space-y-0">
                <div className="flex flex-col justify-center items-center xs:flex-row">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full ">
                        <Image src={smallAvatar} alt="Profile Avatar" width={32} height={32} className='rounded-full' />
                    </div>
                    <ul className="flex flex-col xs:flex-row gap-2 xs:gap-4 flex-wrap items-center mx-0 sm:space-x-8">
                        <li>
                            <Link href='/about-us' className='hover:text-accent-500 transition-[color] duration-300'> Sobre Nosotros</Link>
                        </li>
                        <li>
                            <Link href='/terms-of-use' className='hover:text-accent-500 transition-[color] duration-300'> Terminos de Uso</Link>
                        </li>
                        <li>
                            <Link href='/privacy-policy' className='hover:text-accent-500 transition-[color] duration-300'> Privacidad</Link>
                        </li>
                    </ul>
                </div>
                <ul className="flex flex-wrap pl-0 xs:pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a target='_blank' rel="noopener noreferrer" href="https://instagram.com/horagutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/horacioegutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                            <LinkedinIcon />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/HoracioGutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                            <GithubIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}