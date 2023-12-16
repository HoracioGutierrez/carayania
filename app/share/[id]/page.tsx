import ChatMessagesList from '@/components/ChatMessagesList';
import { getMessagesFromUserChat } from '@/actions/getMessagesFromUserChat';
import LayoutFooter from '@/components/LayoutFooter';
import { ScrollArea } from '@/components/ui/scroll-area';


interface Props {
    params: {
        id: string
    }
}

export default async function page({ params: { id: slug } }: Props) {

    const { payload } = await getMessagesFromUserChat(slug)

    return (
        <main className='p-2 pt-[96px] grow max-h-screen flex flex-col'>
            <ScrollArea className='h-screen container py-4'>
                <ChatMessagesList chatSlug={slug} payload={payload}/>
            </ScrollArea>
            <LayoutFooter/>
        </main>
    )
}