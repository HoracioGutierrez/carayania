"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import { useChat } from 'ai/react';
import { cn } from '@/lib/utils';
import smallAvatar from '../assets/small-avatar.png';


interface Props {
    chatSlug: string,
    payload: any,
    userImageURL: string
}
export default function ChatMessagesList({ chatSlug, payload, userImageURL }: Props) {

    const { messages, setMessages } = useChat({ id: chatSlug })
    useEffect(() => {
        const messages = payload?.map((message: any) => {
            return {
                id: message.id,
                role: message.role,
                content: message.message,
                createdAt: new Date(message.createdAt)
            }
        })
        setMessages(messages)
    }, [])

    return (
        <div className='flex flex-col gap-4'>
            {messages.map((message: any) => {
                console.log(message)
                return (
                    <article key={message.id} className={cn("flex items-start gap-2", message.role == "user" ? "flex-row-reverse from-transparent to-[rgba(255,255,255,0.1)] bg-gradient-to-r" : "")}>
                        <div className="flex-shrink-0">
                            <Image src={message.role == "assistant" ? smallAvatar : userImageURL} alt="Profile Avatar" width={60} height={60} className='rounded-sm' />
                        </div>
                        <div className="ml-3 w-0 flex-1 py-1">
                            <p className={cn("text-sm text-slate-900 dark:text-slate-300", message.role == "user" && "text-right")}>{message.content}</p>
                            <p className={cn("text-sm text-slate-500 dark:text-slate-600", message.role == "user" && "text-right")}>{message.createdAt.toLocaleString()}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}