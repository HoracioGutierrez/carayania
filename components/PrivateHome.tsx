import Image from 'next/image';
import { auth } from '@/auth';
import CreateChatButton from './CreateChatButton';
import SectionTitle from './SectionTitle';


export default async function PrivateHome() {

    const session = await auth()


    return (
        <main className='p-2 md:p-4 grow'>
            <div className="container px-2">
                <header className='border-b pb-2 flex items-center gap-4 xs:gap-8'>
                    <div className='relative w-[40px] h-[40px] xs:w-[60px] xs:h-[60px] '>
                        <Image src={session?.user.image as string} alt="Profile Avatar" fill />
                    </div>
                    <SectionTitle className='pb-0 border-b-0'>{session?.user.name}</SectionTitle>
                </header>
                <section>
                    <CreateChatButton userId={session?.user.id as string} />
                    <h2 className='text-xl font-bold mt-4'>Chats</h2>
                    <div>
                        {session?.user.chats.length && session?.user.chats.length > 0 ? (
                            <>
                                {session?.user.chats.map((chat: any) => (
                                    <div key={chat.id} className='flex items-center gap-4 xs:gap-8 mt-4'>
                                        <div className='relative w-[40px] h-[40px] xs:w-[60px] xs:h-[60px] '>
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='font-bold'>{chat.slug}</h3>
                                            <p className='text-sm text-gray-500'>{chat.lastMessage && "Aun no hay mensajes en este chat"}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <p>No tienes chats!</p>
                        )}
                    </div>
                </section>
            </div >
        </main >
    )
}