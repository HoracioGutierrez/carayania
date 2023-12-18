import { auth } from '@/auth';
import ChatForm from '@/components/ChatForm';
import ChatMessagesList from '@/components/ChatMessagesList';
import ChatTextarea from '@/components/ChatTextarea';
import { cn } from '@/lib/utils';
import { getMessagesFromUserChat } from '@/actions/getMessagesFromUserChat';


interface Props {
    params: {
        id: string
    }
}

export default async function page({ params: { id: slug } }: Props) {

    const session = await auth()
    const { payload } = await getMessagesFromUserChat(slug)


    return (
        <main className='p-2 grow min-h-screen flex flex-col  pb-[130px]'>
            {/* <ScrollArea className='h-[calc(100vh_-_112px)] container pb-[120px]'> */}
            <ChatMessagesList chatSlug={slug} payload={payload} userImageURL={session?.user.image as string} />
            {/* </ScrollArea> */}
            <ChatForm chatSlug={slug} expired={session?.user.currentPlan?.expired as boolean}>
                <div className="w-full relative">
                    <div className={cn("rounded-lg rounded-b-none border border-slate-300 bg-slate-50 px-2 py-2 dark:border-slate-700 dark:bg-slate-800", session?.user.currentPlan?.expired && "dark:bg-slate-500")}>
                        <label htmlFor="prompt-input" className="sr-only">Enter your prompt</label>
                        <ChatTextarea chatSlug={slug} expired={session?.user.currentPlan?.expired as boolean} />
                    </div>
                </div>
            </ChatForm>
        </main>
    )
}