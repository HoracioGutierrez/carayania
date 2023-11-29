"use client"
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
    userId: string
}

export default function CreateChatButton({ children = "crear chat", className, disabled , userId }: Props) {

    console.log(userId)

    const handleClick = async () => {
        if (disabled) toast.error("No tienes mas creditos!")

        await createNewChatForUser(userId)
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className={cn(className , disabled && "bg-slate-500 hover:bg-slate-500")} onClick={handleClick}>{children}</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>No tiene mas creditos!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}