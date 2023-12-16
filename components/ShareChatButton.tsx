"use client"

import { Share2Icon } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './ui/button';


type Props = {
    slug : string
}

export default function ShareChatButton({ slug }: Props) {

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(`${window.location.origin}/share/${slug}`)
            toast.success("Link copiado al portapapeles")
        } catch (error) {
            toast.error("No se pudo copiar el link")
        }
    }

    return (
        <Button onClick={handleClick} size={"icon"} variant={"ghost"}>
            <Share2Icon width={24} height={24}/>
        </Button>
    )
}