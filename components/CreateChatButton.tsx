"use client"
import { PlusCircleIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
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
    rounded?: boolean,
    variant?: "default" | "secondary" | "link" | "destructive" | "outline" | "ghost" | null | undefined
}

export default function CreateChatButton({ children = "crear chat", className, disabled, userId, rounded , variant }: Props) {

    const router = useRouter()

    const handleClick = async () => {
        if (disabled) {
            toast.error("No tienes mas creditos!")
        } else {

            toast.loading("Creando chat...")
            const { error, payload } = await createNewChatForUser(userId)

            if (error) toast.error("Error al crear el chat")

            toast.success("Chat creado!")
            toast.loading("Redireccionando...")
            router.push("/chat/" + payload.slug)
        }
    }

    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    <Button className={cn(className,disabled && "sm:hover:bg-red-500 sm:border-red-950","hover:bg-transparent")} onClick={handleClick} variant={variant ? variant : "default"} size={rounded ? "icon" : "default"}>
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