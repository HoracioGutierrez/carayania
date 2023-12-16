"use client"
import { SendIcon, StopCircleIcon, XCircleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';


interface Props {
    chatSlug: string,
    isLoading: boolean,
    stop: any,
    expired?: boolean
}

export default function SendChatIcon({ chatSlug, isLoading, stop, expired }: Props) {

    const handleClick = async (e: any) => {
        if (isLoading) {
            stop()
            e.preventDefault()
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation()
        }
    }

    return (
        <button onClick={handleClick} type="submit" className={cn("inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-base font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 absolute right-4 top-1/2 -translate-y-1/2",expired && "bg-red-500 hover:bg-red-800 dark:focus:ring-red-900")} >
            {isLoading ? "Stop" : expired ? "No tienes mas creditos!" : "Generar"}
            {isLoading ? <StopCircleIcon /> : expired ? <XCircleIcon/> :<SendIcon />}
        </button>
    )
}