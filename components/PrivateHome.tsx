import { EyeIcon, MessageSquareIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import CreateChatButton from './CreateChatButton';
import DeleteChatButton from './DeleteChatButton';
import PaymentButton from './PaymentButton';
import SectionTitle from './SectionTitle';
import ShareChatButton from './ShareChatButton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';


export default async function PrivateHome() {

    const session = await auth()

    return (
        <main className='grow grid'>
            <div className="container px-2 grid grid-rows-[min-content_1fr] lg:gap-8 lg:grid-cols-2 lg:grid-rows-1">
                <section className=' gap-4 xs:gap-8 @container'>
                    <div className='flex flex-col gap-6 @[695px]:flex-row justify-between'>
                        <div className='flex items-start gap-4 flex-wrap'>
                            <div className='relative w-[40px] h-[40px] xs:w-[60px] xs:h-[60px] '>
                                <Image src={session?.user.image as string} alt="Profile Avatar" fill className='rounded-full' />
                            </div>
                            <div>
                                <SectionTitle className='pb-0 border-b-0'>{session?.user.name}</SectionTitle>
                                <p className='text-slate-600 text-sm font-light'>{session?.user.email}</p>
                            </div>
                            <div>
                                <Badge variant={session?.user.currentPlan?.expired ? "destructive" : "default"} className={cn(!session?.user.currentPlan?.expired && 'bg-yellow-300')}>
                                    {session?.user.currentPlan?.expired ? "Expirado" : "Premium Plan"}
                                </Badge>
                            </div>
                        </div>
                        <div >
                            <div className='hidden lg:flex flex-col gap-8'>
                                <p className='font-light text-sm'>
                                    <span className='text-slate-400 font-bold text-lg'>Plan actual</span>
                                    <br />
                                    <span className='text-slate-600 text-xs'>
                                        {session?.user.currentPlan?.name === "FREE" && "Su plan actual es gratuito y se crea automaticamente con su cuenta para que pruebes la plataforma. Después de que se termine, podés comprar un plan premium. Su plan actual tiene un limite de : "}
                                    </span>
                                    <br />
                                    {session?.user.currentPlan?.maxQuantity} preguntas
                                </p>
                                <p className='font-light text-sm'>
                                    <span className='text-slate-400 font-bold text-lg'>Cant. hechas</span>
                                    <br />
                                    <span className='text-slate-600 text-xs'>Esta es la cantidad de preguntas hechas por haber iniciado un chat o haber continuado chateando en una misma ventana de chat. De momento van : </span>
                                    <br />
                                    {session?.user.currentPlan?.currentQuantity} preguntas
                                </p>
                                <p className='font-light text-sm'>
                                    <span className='text-slate-400 font-bold text-lg'>Expiró</span>
                                    <br />
                                    <span className='text-slate-600 text-xs'>Su plan expira cuando se agotan las preguntas ya sea por haber creado la misma cantidad de chats nuevos que su limite de plan actual con una pregunta por chat o bien habiendo hecho tantas preguntas en un solo chat como numero de limite de plan actual </span>
                                    <br />
                                    {session?.user.currentPlan?.expired ? "Si" : "No"}
                                </p>
                            </div>
                            {session?.user.currentPlan?.expired && <PaymentButton userEmail={session?.user.email as string} />}
                        </div>
                    </div>
                </section>
                <section className='@container/section'>
                    <header className='flex items-center py-4 gap-2'>
                        <h2 className='text-xl font-bold'>Chats</h2>
                        <CreateChatButton disabled={session?.user.currentPlan?.expired as boolean} userId={session?.user.id as string} rounded />
                    </header>
                    <div className='grid gap-4 @md/section:grid-cols-2 @xl/section:grid-cols-3 @3xl/section:grid-cols-4'>
                        {session?.user.chats.length && session?.user.chats.length > 0 ? (
                            <>
                                {session?.user.chats.map((chat: any) => {
                                    return (
                                        <article key={chat.id} className='bg-secondary p-2 shadow-md rounded-sm transition-[transform] hover:scale-105 chat-article @container/article @[320px]/article:grid-cols-[1fr_120px]'>
                                            <div className='flex chat-article__header @[320px]/article:col-start-1 @[320px]/article:col-end-2'>
                                                <MessageSquareIcon />
                                                <h3 className='font-bold'>{chat.title || "Sin Titulo"}</h3>
                                            </div>
                                            <div className='max-h-20 chat-article__content @[320px]/article:col-start-1 @[320px]/article:col-end-2'>
                                                <p className='text-xs text-gray-400 line-clamp-3 text-balanced'>{chat.lastMessage || "Aun no hay mensajes en este chat "}</p>
                                            </div>
                                            <div className='flex items-center justify-end chat-article__actions @[320px]/article:row-start-1 @[320px]/article:row-end-3 @[320px]/article:col-start-2 @[320px]/article:self-stretch'>
                                                <DeleteChatButton chatId={chat.id} />
                                                <ShareChatButton slug={chat.slug} />
                                                <TooltipProvider>
                                                    <Tooltip delayDuration={200}>
                                                        <TooltipTrigger asChild>
                                                            <Button asChild size={"icon"} variant={"ghost"}>
                                                                <Link href={`/chat/${chat.slug}`}>
                                                                    <EyeIcon className='cursor-pointer' />
                                                                </Link>
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Ver Chat</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider >
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