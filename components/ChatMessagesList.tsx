"use client"
import { useEffect } from 'react';
import { useChat } from 'ai/react';
import { cn } from '@/lib/utils';


interface Props {
    chatSlug: string,
    payload: any
}
export default function ChatMessagesList({ chatSlug, payload }: Props) {

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
        <div className=''>
            {messages.map((message: any) => {
                return (
                    <article key={message.id} className={cn("flex items-start py-2", message.role == "user" && "flex-row-reverse")}>
                        <div className="flex-shrink-0">
                            {message.role == "assistant" ? "CarayanIA" : "Tu"}
                        </div>
                        <div className="ml-3 w-0 flex-1">
                            <div className="flex items-center justify-between">
                                <p className="ml-2 text-sm text-slate-500 dark:text-slate-400">{/* message.createdAt.toLocaleString() */}</p>
                            </div>
                            <p className={cn("mt-1 text-sm text-slate-600 dark:text-slate-300",message.role == "user" && "text-right")}>{message.content}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}