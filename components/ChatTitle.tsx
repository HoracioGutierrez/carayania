"use client"
import { useRef, useState } from 'react';
import { BanIcon, EditIcon } from 'lucide-react';
import { toast } from 'sonner';
import { saveTitleToChat } from '@/actions/saveTitleToChat';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';


type Props = {
    title: string,
    chatSlug: string
}

export default function ChatTitle({ title, chatSlug }: Props) {

    const [currentTitle, setCurrentTitle] = useState(title || "Sin Titulo")
    const [isEditing, setIsEditing] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const toggleEdit = () => {
        setIsEditing(!isEditing)
        setCurrentTitle(title || "Sin Titulo")
    }

    const handleEdit = async (e: any) => {

        if (e.key === 'Enter' || e.key === 'Escape') {
            setIsEditing(false)
            const { error } = await saveTitleToChat(chatSlug, currentTitle)
            error ? toast.error("Error al guardar el titulo") : toast.success("Titulo guardado!")
        }

        setCurrentTitle(e.target.value)
    }

    return (
        <div className='flex group mb-8 items-center gap-2'>
            {isEditing
                ? (
                    <p className='text-5xl'>
                        <label data-value={currentTitle} className='text-in'>
                            <input size={1} autoFocus ref={inputRef} type="text" className='w-full border-slate-500 border-[1px] bg-transparent focus:outline-none text-5xl font-bold number-input1' value={currentTitle} onKeyDown={handleEdit} onChange={handleEdit} onBlur={toggleEdit} />
                        </label>
                    </p>
                )
                : <h2 className='font-bold text-5xl'>{currentTitle}</h2>}
            <TooltipProvider>
                <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                        <Button onClick={toggleEdit} variant='ghost' size='icon' asChild className='w-5 h-5 opacity-0 transition-[opacity] duration-300 group-hover:opacity-100 group-hover:cursor-pointer'>
                            {isEditing ? <BanIcon className='stroke-red-500' /> : <EditIcon width={20} height={20} />}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{isEditing ? "Cancelar Edicion" : "Editar Titutlo" }</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}