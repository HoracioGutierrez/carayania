"use client"

import { useChat } from 'ai/react';


interface Props {
    children: React.ReactNode,
    chatSlug: string
}

export default function ChatForm({ children, chatSlug }: Props) {

    const { append } = useChat({ id: chatSlug })

    const onSubmit = (e: any) => {
        e.preventDefault()
        const input = e.target["chat-textarea"].value
        append({ content: input, role: 'user', id: chatSlug },{data : { id : chatSlug }})
    }

    return (
        <form className='h-[180px] w-full' onSubmit={onSubmit}>
            {children}
        </form>
    )
}