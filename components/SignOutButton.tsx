"use client"
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';


export default function SignOutButton() {

    const handleClick = () => {
        signOut()
    }

    return (
        <Button onClick={handleClick} asChild className='w-8 h-8' variant={"ghost"} size={"icon"}>
            <LogOut/>
        </Button>
    )
}