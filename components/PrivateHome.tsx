import { EyeIcon, MessageSquareIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import { Button } from './ui/button';
import CreateChatButton from './CreateChatButton';
import DeleteChatButton from './DeleteChatButton';
import SectionTitle from './SectionTitle';
import ShareChatButton from './ShareChatButton';


export default async function PrivateHome() {

    const session = await auth()

    return (
        <main className='p-2 pt-[96px] grow '>
            <div className="container px-2">
                <header className='border-b pb-2 gap-4 xs:gap-8 flex flex-col md:flex-row md:justify-between md:items-center  '>
                    <div>
                        <div className='relative w-[40px] h-[40px] xs:w-[60px] xs:h-[60px] '>
                            <Image src={session?.user.image as string} alt="Profile Avatar" fill />
                        </div>
                        <SectionTitle className='pb-0 border-b-0'>{session?.user.name}</SectionTitle>
                    </div>
                    <div>
                        <p>Plan actual : {session?.user.currentPlan?.maxQuantity} preguntas</p>
                        <p>Cant. hechas : {session?.user.currentPlan?.currentQuantity} preguntas</p>
                        <p>Expiró : {session?.user.currentPlan?.expired ? "Si" : "No"}</p>
                    </div>
                </header>
                <section className='@container'>
                    <header className='flex items-center py-4 gap-2'>
                        <h2 className='text-xl font-bold'>Chats</h2>
                        <CreateChatButton disabled={session?.user.currentPlan?.expired as boolean} userId={session?.user.id as string} rounded />
                    </header>
                    <div className='grid gap-4 @md:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4'>
                        {session?.user.chats.length && session?.user.chats.length > 0 ? (
                            <>
                                {session?.user.chats.map((chat: any) => {
                                    return (
                                        <article key={chat.id} className='flex flex-wrap items-center gap-4 xs:gap-4 mt-4 p-2 shadow-md rounded-sm hover:scale-105 transition-transform duration-300 bg-secondary dark:bg-secondary'>
                                            <div className='grid place-content-center w-[40px] h-[40px] xs:w-[60px] xs:h-[60px] '>
                                                <MessageSquareIcon />
                                            </div>
                                            <div className='flex-1'>
                                                <h3 className='font-bold'>{chat.slug}</h3>
                                                <p className='text-xs text-gray-400 max-h-20 overflow-hidden text-clip'>{chat.lastMessage || "Aun no hay mensajes en este chat "}</p>
                                            </div>
                                            <div className='flex gap-2 justify-end grow'>
                                                <DeleteChatButton chatId={chat.id} />
                                                <ShareChatButton slug={chat.slug} />
                                                <Button asChild size={"icon"} variant={"outline"}>
                                                    <Link href={`/chat/${chat.slug}`}>
                                                        <EyeIcon className='cursor-pointer' />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </article>
                                    )
                                })}
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