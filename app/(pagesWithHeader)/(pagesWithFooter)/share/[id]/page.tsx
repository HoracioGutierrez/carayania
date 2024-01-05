import ChatMessagesList from '@/components/ChatMessagesList';
import ChatTitle from '@/components/ChatTitle';
import { getMessagesFromUserChat } from '@/actions/getMessagesFromUserChat';


interface Props {
    params: {
        id: string
    }
}

export default async function page({ params: { id: slug } }: Props) {

    const { payload } = await getMessagesFromUserChat(slug)

    return (
        <main className='p-2 grow flex flex-col  pb-[130px] container'>
            <ChatTitle title={payload?.title as string} chatSlug={slug} />
            <ChatMessagesList chatSlug={slug} payload={payload?.message} userImageURL='' />
        </main>
    )
}