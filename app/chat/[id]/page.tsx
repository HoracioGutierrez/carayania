import { Share2Icon } from 'lucide-react';
import ChatForm from '@/components/ChatForm';
import ChatMessagesList from '@/components/ChatMessagesList';
import ChatTextarea from '@/components/ChatTextarea';
import { getMessagesFromUserChat } from '@/actions/getMessagesFromUserChat';
import { ScrollArea } from '@/components/ui/scroll-area';
import SendChatIcon from '@/components/SendChatIcon';


interface Props {
    params: {
        id: string
    }
}

export default async function page({ params: { id: slug } }: Props) {

    const { payload } = await getMessagesFromUserChat(slug)
    

    return (
        <main className='h-full flex-col'>
            <ScrollArea className='h-[calc(100%_-_180px)] container py-4'>
                <ChatMessagesList chatSlug={slug} payload={payload}/>
            </ScrollArea>
            <ChatForm chatSlug={slug}>
                <div className="mb-4 w-full bg-slate-200 dark:bg-slate-900">
                    <div className="rounded-lg rounded-b-none border border-slate-300 bg-slate-50 px-2 py-2 dark:border-slate-700 dark:bg-slate-800">
                        <label htmlFor="prompt-input" className="sr-only">Enter your prompt</label>
                        <ChatTextarea chatSlug={slug} />
                    </div>
                    <div className="ml-2 flex items-center py-2">
                        <div>
                            <SendChatIcon chatSlug={slug} />
                            <button type="button" className="ml-2 inline-flex items-center gap-x-2 rounded-lg bg-slate-700 px-4 py-2.5 text-center text-base font-medium text-slate-50 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900" >
                                Share
                                <Share2Icon />
                            </button>
                        </div>
                    </div>
                </div>
            </ChatForm>
        </main>
    )
}