"use client"

import { useChat } from 'ai/react';
import { cn } from '@/lib/utils';


interface Props {
    chatSlug: string,
    expired: boolean
}

export default function ChatTextarea({ chatSlug , expired }: Props) {

    const { handleInputChange } = useChat({ id: chatSlug })

    return (
        <textarea disabled={expired} onChange={handleInputChange} id="chat-textarea" rows={4} className={cn("w-full border-0 bg-transparent px-0 text-base text-slate-900 focus:outline-none  dark:text-slate-200 dark:placeholder-slate-400 resize-none pr-[150px]",expired && "dark:text-slate-400")} placeholder="Enter your prompt" required></textarea>
    )
}