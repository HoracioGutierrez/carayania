"use client"

import { toast } from 'sonner';
import { useChat } from 'ai/react';
import SendChatIcon from './SendChatIcon';


interface Props {
    children: React.ReactNode,
    chatSlug: string,
    expired: boolean
}

export default function ChatForm({ children, chatSlug, expired }: Props) {

    const { append, stop, isLoading } = useChat({ id: chatSlug })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (expired) {
            toast.error("No tienes mas creditos!")
            return
        }

        if (!isLoading) {
            const input = e.target["chat-textarea"].value
            append({ content: input, role: 'user', id: chatSlug }, { data: { id: chatSlug } })
            e.target.reset()
        }
    }

    return (
        <form className='w-full fixed bottom-0 left-0' onSubmit={onSubmit}>
            {children}
            <SendChatIcon chatSlug={chatSlug} isLoading={isLoading} stop={stop} expired={expired} />
        </form>
    )
}