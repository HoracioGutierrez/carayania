"use client"
import { toast } from 'sonner';
import { TrashIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { deleteChatFromUser } from '@/actions/deleteChatFromUser';
import { Button } from './ui/button';


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
        <Button size={'icon'} variant={"destructive"} className={cn(className, disabled && "bg-slate-500 hover:bg-slate-500")} onClick={handleClick}>
            <TrashIcon/>
        </Button>
    )
}