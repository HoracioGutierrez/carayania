"use client"
import {
  EyeIcon,
  MessageSquareIcon,
  MessageSquarePlusIcon,
  PlusIcon,
  SearchIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ScrollAreaViewport } from '@radix-ui/react-scroll-area';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';
import CreateChatButton from './CreateChatButton';
import DeleteChatButton from './DeleteChatButton';
import { ScrollArea } from './ui/scroll-area';
import SectionTitle from './SectionTitle';
import ShareChatButton from './ShareChatButton';
import SignOutButton from './SignOutButton';
import SocialIconsNavbar from './SocialIconsNavbar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';


interface LayoutSidebarProps {
    session: any
}

export default async function LayoutSidebar({ session }: LayoutSidebarProps) {

    return (
        <aside className="h-screen w-[50px] sm:w-60 filter-glass p-2 transition-all duration-200 flex flex-col justify-between items-center gap-4">
            <div className="flex items-start flex-col gap-4">
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 w-full'>
                    <figure className="relative w-[34px] sm:w-16 h-[34px] sm:h-16 rounded-full">
                        <Image src={session?.user.image as string} alt="Profile Avatar" fill className='rounded-full' />
                    </figure>
                    <SignOutButton />
                </div>

                <div className='hidden sm:block'>
                    <SectionTitle className='pb-0 border-b-0'>{session?.user.name}</SectionTitle>
                    <p className='text-slate-600 text-sm font-light'>{session?.user.email}</p>
                </div>

                <Separator className='hidden sm:block' />

                <CreateChatButton disabled={session?.user.currentPlan?.expired as boolean} userId={session?.user.id} variant={"ghost"} className='w-full p-0 sm:p-4 sm:border sm:border-accent-500'>
                    <PlusIcon className='hidden sm:block' />
                    <MessageSquarePlusIcon className={cn('sm:hidden w-full h-full', session?.user.currentPlan?.expired && "stroke-red-500")} />
                    <span className='hidden sm:inline'>New Chat</span>
                </CreateChatButton>

                <form>
                    <label htmlFor="chat-input" className="sr-only hidden sm:inline">Search chats</label>
                    <div className="relative flex items-center">
                        <input id="search-chats" type="text" className="hidden sm:inline w-full bg-transparent rounded-lg sm:border border-slate-300 sm:bg-slate-50 sm:p-2 sm:pr-10 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-500 sm:dark:border-accent-700 sm:dark:bg-slate-900 dark:text-slate-200 placeholder:w-0 sm:placeholder:w-auto" placeholder="Search chats" required />
                        <button type="submit" className="sm:absolute sm:right-1 rounded-lg sm:p-2 text-sm sm:text-slate-500 hover:text-blue-700 focus:outline-none sm:text-base w-[34px] sm:w-auto h-[34px] sm:h-auto">
                            <SearchIcon className='w-full h-full hover:stroke-accent-500' />
                            <span className="sr-only">Search chats</span>
                        </button>
                    </div>
                </form>

                {session?.user.chats.length && session?.user.chats.length > 0 && (
                    <div className='flex items-center sm:gap-2'>
                        <h2 className="hidden sm:block text-lg font-medium text-slate-800 dark:text-slate-200">Chats</h2>
                        <span className="rounded-full bg-accent-300 w-[34px] sm:w-6 h-[34px] sm:h-6 flex items-center justify-center py-1 text-xs text-slate-200 transition">
                            {session?.user.chats.length}
                        </span>
                    </div>
                )}

            </div>
            <ScrollArea className='hidden sm:block grow w-full'>
                <ScrollAreaViewport asChild>
                    <div className='grow sm:flex sm:flex-col sm:gap-2'>
                        {session?.user.chats.length && session?.user.chats.length > 0 ? (
                            <>
                                {session?.user.chats.map((chat: any) => (
                                    <article className='bg-primary-300 rounded-md p-2'>
                                        <MessageSquareIcon />
                                        <h3 className='font-bold'>{chat.title || "Sin Titulo"}</h3>
                                        <p className='text-xs text-gray-400 line-clamp-3 text-balanced'>{chat.lastMessage || "Aun no hay mensajes en este chat "}</p>
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
                                ))}
                            </>
                        ) : <p>No chats yet</p>}
                    </div>
                </ScrollAreaViewport>
            </ScrollArea>
            {/* <div className="hidden sm:block space-y-4 grow w-full">

                <button className="flex w-full flex-col gap-y-2 rounded-lg px-2 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
                    <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">Tailwind Classes</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">12 Mar</p>
                </button>

                <button className="flex w-full flex-col gap-y-2 rounded-lg bg-slate-200 px-2 py-2 text-left transition-colors duration-200 focus:outline-none dark:bg-slate-800">
                    <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">explain quantum computing</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">10 Feb</p>
                </button>
                <button className="flex w-full flex-col gap-y-2 rounded-lg px-2 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800" >
                    <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">How to create ERP Diagram</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">22 Jan</p>
                </button>
                <button className="flex w-full flex-col gap-y-2 rounded-lg px-2 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800" >
                    <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">API Scaling Strategies</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">1 Jan</p>
                </button>
            </div> */}
            <footer>
                <SocialIconsNavbar />
            </footer>
        </aside>
    )
}