"use client"
import { SendIcon } from 'lucide-react';
import { useChat } from 'ai/react';


interface Props {
    chatSlug: string
}

export default function SendChatIcon({ chatSlug }: Props) {

    const { append, input, isLoading, stop, messages } = useChat({ id: chatSlug })

    const handleClick = async (e: any) => {
        
    }

    return (
        <button onClick={handleClick} type="submit" className="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-base font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900" >
            Generate
            <SendIcon />
        </button>
    )
}