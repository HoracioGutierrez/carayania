"use client"

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import { ThemeTogglerButton } from './ThemeTogglerButton';


interface DrawerProps {
    session: any
}

export default function Drawer({ session }: DrawerProps) {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button className="flex justify-end p-4 md:hidden">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className=''>
                <SheetHeader>
                    <SheetTitle>Navegacion</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                    <ThemeTogglerButton />
                    <Link href='/'> Home </Link>
                    <Link href='/about-us'> Sobre Nosotros</Link>
                    <Link href='/terms-of-use'> Terminos de Uso</Link>
                    <Link href='/privacy-policy'> Privacidad</Link>
                    <div className='flex justify-center gap-8'>
                        <a target='_blank' rel="noopener noreferrer" href="https://instagram.com/horagutierrez">
                            <InstagramIcon />
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/horacioegutierrez">
                            <LinkedinIcon />
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/HoracioGutierrez">
                            <GithubIcon />
                        </a>
                    </div>
                    {session ? <SignOutButton /> : <SignInButton />}
                </nav>
            </SheetContent>
        </Sheet>
    )
}