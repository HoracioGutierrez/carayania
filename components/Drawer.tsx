"use client"

import { MenuIcon } from 'lucide-react';
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


interface DrawerProps {
    session: any
}

export default function Drawer({ session }: DrawerProps) {
    return (
        <Sheet>
            <SheetTrigger>
                <Button className="flex justify-end p-4 md:hidden">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className=''>
                <SheetHeader>
                    <SheetTitle>Navegacion</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                    {session ? <SignOutButton /> : <SignInButton />}
                </nav>
            </SheetContent>
        </Sheet>
    )
}