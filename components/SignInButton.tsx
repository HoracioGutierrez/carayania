"use client"
import { signIn } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';


interface SignInButtonProps {
    children?: React.ReactNode,
    className?: string
}


export default function SignInButton({ children = "sign in" , className }: SignInButtonProps) {

    const handleClick = () => {
        signIn("google")
    }

    return (
        <Button onClick={handleClick} className={cn(className)}>{children}</Button>
    )
}