"use client"
import { useRef, useState } from 'react';
import { BanIcon, EditIcon } from 'lucide-react';
import { Button } from './ui/button';


type Props = {
    title: string
}
export default function ChatTitle({ title }: Props) {

    const [currentTitle, setCurrentTitle] = useState(title || "Sin Titulo")
    const [isEditing, setIsEditing] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleEdit = (e: any) => {
        if (e.key === 'Enter') {
            setIsEditing(false)
        }

        if (e.key === 'Escape') {
            setIsEditing(false)
        }

        setCurrentTitle(e.target.value)
    }

    return (
        <div className='flex group mb-8 items-center gap-2'>
            {isEditing
                ? (
                    <p className='text-5xl'>
                        <label data-value={currentTitle} className='text-in'>
                            <input size={1} autoFocus ref={inputRef} type="text" className='w-full border-slate-500 border-[1px] bg-transparent focus:outline-none text-5xl font-bold number-input1' value={currentTitle} onChange={handleEdit} onBlur={toggleEdit} />
                        </label>
                    </p>
                )
                : <h2 className='font-bold text-5xl'>{currentTitle}</h2>}
            <Button onClick={toggleEdit} variant='ghost' size='icon' asChild className='w-5 h-5 opacity-0 transition-[opacity] duration-300 group-hover:opacity-100 group-hover:cursor-pointer'>
                {isEditing ? <BanIcon className='stroke-red-500' /> : <EditIcon width={20} height={20} />}
            </Button>
        </div>
    )
}