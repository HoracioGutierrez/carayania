import { auth } from '@/auth';
import ChatForm from '@/components/ChatForm';
import ChatMessagesList from '@/components/ChatMessagesList';
import ChatTextarea from '@/components/ChatTextarea';
import ChatTitle from '@/components/ChatTitle';
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
        <main className='p-2 grow flex flex-col  pb-[130px] container'>
            <ChatTitle title={payload?.title as string} chatSlug={slug} />
            <ChatMessagesList chatSlug={slug} payload={payload?.message} userImageURL={session?.user.image as string} />
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