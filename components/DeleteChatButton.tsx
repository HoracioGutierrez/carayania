"use client"
import { toast } from 'sonner';
import { TrashIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { deleteChatFromUser } from '@/actions/deleteChatFromUser';
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
    chatId: string
}
export default function DeleteChatButton({ children, className, disabled, chatId }: Props) {

    const handleClick = async () => {
        toast.loading("Borrando chat...")
        const { error } = await deleteChatFromUser(chatId)

        if (error) toast.error("Error al borrar el chat")

        toast.success("Chat borrado!")

    }

    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    <Button size={'icon'} variant={"ghost"} className={cn(className, disabled && "bg-slate-500 hover:bg-slate-500")} onClick={handleClick}>
                        <TrashIcon className='stroke-red-500' />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Borrar Chat</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}