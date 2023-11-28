"use client"
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';


export default function SignInButton() {

    const handleClick = () => {
        signIn("google")
    }

    return (
        <Button onClick={handleClick}>sign in</Button>
    )
}