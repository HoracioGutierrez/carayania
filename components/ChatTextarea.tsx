"use client"

import { useChat } from 'ai/react';


interface Props {
    chatSlug: string
}

export default function ChatTextarea({ chatSlug }: Props) {

    const { handleInputChange } = useChat({ id: chatSlug })

    return (
        <textarea onChange={handleInputChange} id="chat-textarea" rows={4} className="w-full border-0 bg-slate-50 px-0 text-base text-slate-900 focus:outline-none dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 resize-none" placeholder="Enter your prompt" required></textarea>
    )
}