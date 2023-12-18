"use client"
import { PlusCircleIcon } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { createNewChatForUser } from '@/actions/createNewChatForUser';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';


type Props = {
    children?: React.ReactNode,
    className?: string,
    disabled?: boolean,
    userId: string,
    rounded?: boolean
}

export default function CreateChatButton({ children = "crear chat", className, disabled, userId, rounded }: Props) {

    const handleClick = async () => {
        if (disabled) {
            toast.error("No tienes mas creditos!")
        } else {

            toast.loading("Creando chat...")
            const { error } = await createNewChatForUser(userId)

            if (error) toast.error("Error al crear el chat")

            toast.success("Chat creado!")
        }
    }
    
    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    <Button className={cn(className, disabled && "bg-red-500 hover:bg-slate-500")} onClick={handleClick} variant={rounded ? "ghost" : "default"} size={rounded ? "icon" : "default"}>
                        {rounded ? <PlusCircleIcon /> : children}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>No tiene mas creditos!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}