"use client"
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';


export default function SignOutButton() {

    const handleClick = () => {
        signOut()
    }

    return (
        <Button onClick={handleClick} asChild className='w-8 h-8 hover:bg-transparent hover:stroke-accent-500 hover:cursor-pointer' variant={"ghost"} size={"icon"}>
            <LogOut/>
        </Button>
    )
}