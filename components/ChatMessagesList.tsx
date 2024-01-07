"use client"
import { useEffect } from 'react';
import { CopyIcon } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import { useChat } from 'ai/react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import smallAvatar from '../assets/small-avatar.png';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';


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

    const handleClick = async (role: string, message: string, date: Date) => {
        try {
            await navigator.clipboard.writeText(`${role == "user" ? "Yo" : "Carayan IA"}: ${message} - ${date?.toLocaleString() || ""}`)
            toast.success("Mensage copiado al portapapeles")
        } catch (error) {
            toast.error("No se pudo copiar el mensaje")
        }
    }

    return (
        <div className='flex flex-col gap-4 grow p-2'>
            {messages.map((message: any) => {
                return (
                    <article key={message.id} className={cn("flex items-start gap-2 group", message.role == "user" ? "flex-row-reverse from-transparent dark:to-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.3)] bg-gradient-to-r" : "")}>
                        <div className="flex-shrink-0">
                            <Image src={message.role == "assistant" ? smallAvatar : userImageURL} alt="Profile Avatar" width={60} height={60} className='rounded-sm' />
                        </div>
                        <div className="ml-3 w-0 flex-1 py-1">
                            <div className='flex gap-2'>
                                <p className={cn("text-sm text-slate-900 dark:text-slate-300", message.role == "user" && "text-right")}>
                                    {message.content}
                                </p>
                                <TooltipProvider>
                                    <Tooltip delayDuration={200}>
                                        <TooltipTrigger asChild>
                                            <Button onClick={handleClick.bind(null, message.role, message.content, message.createdAt)} asChild variant={"ghost"} size={"icon"} className='w-5 h-5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:stroke-slate-50 group-hover:pointer-events-auto transition duration-300 shrink-0 hover:cursor-pointer'>
                                                <CopyIcon />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent asChild>
                                            <span>Copiar mensaje</span>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <p className={cn("text-sm text-slate-500 dark:text-slate-600", message.role == "user" && "text-right")}>{message.createdAt?.toLocaleString()}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}