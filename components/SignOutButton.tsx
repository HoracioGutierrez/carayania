"use client"
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';


export default function SignOutButton() {

    const handleClick = () => {
        signOut()
    }

    return (
        <Button onClick={handleClick}>sign out</Button>
    )
}