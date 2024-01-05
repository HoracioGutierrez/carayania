import {
  CircleUserIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageSquarePlusIcon,
  MessagesSquareIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
} from 'lucide-react';
import Image from 'next/image';
import { auth } from '@/auth';
import LayoutFooter from '@/components/LayoutFooter';
import SectionTitle from '@/components/SectionTitle';
import SignOutButton from '@/components/SignOutButton';
import smallAvatar from '../../assets/small-avatar.png';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth()

  return (
    <>
      <div className='grow flex'>
        {session && (
          <aside className="flex ">
            {/* First Column */}
            <div className="flex h-screen w-[50px] left-0 flex-col items-center space-y-8 border-r border-slate-300  py-8 dark:border-slate-700  sm:w-0 sm:-left-9 sm:relative transition-[width] duration-300" >
              {/* Logo */}
              <a href="#" className="mb-1">
                <Image src={smallAvatar} alt="Profile Avatar" width={32} height={32} className='rounded-full' />
              </a>
              {/* New conversation */}
              <a href="#" className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800">
                <MessageSquarePlusIcon />
              </a>
              {/* Conversations */}
              <a
                href="#"
                className="rounded-lg bg-blue-100 p-1.5 text-blue-600 transition-colors duration-200 dark:bg-slate-800 dark:text-blue-600"
              >
                <MessagesSquareIcon />
              </a>
              {/* Discover */}
              <a
                href="#"
                className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <SearchIcon />
              </a>
              {/* User */}
              <a
                href="#"
                className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <CircleUserIcon />
              </a>
              {/* Settings */}
              <a
                href="#"
                className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <SettingsIcon />
              </a>
            </div>
            {/* Second Column */}
            <div className="h-screen w-0 overflow-y-auto filter-glass sm:py-4 sm:p-2 sm:w-60 transition-all duration-200 flex flex-col">
              <div className="flex items-start flex-col gap-4">

                <div className='flex justify-between w-full'>
                  <figure className="relative w-16 h-16 rounded-full">
                    <Image src={session?.user.image as string} alt="Profile Avatar" fill className='rounded-full' />
                  </figure>
                  <SignOutButton />
                </div>

                <div>
                  <SectionTitle className='pb-0 border-b-0'>{session?.user.name}</SectionTitle>
                  <p className='text-slate-600 text-sm font-light'>{session?.user.email}</p>
                </div>

                <div className='flex items-center gap-2'>
                  <h2 className="inline text-lg font-medium text-slate-800 dark:text-slate-200">Chats</h2>
                  <span className="rounded-full bg-accent-300 w-6 h-6 flex items-center justify-center py-1 text-xs text-slate-200">24</span>
                </div>

              </div>
              <div className="mt-8 space-y-4 grow">
                <button className="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                  <PlusIcon />
                  New Chat
                </button>
                <form>
                  <label htmlFor="chat-input" className="sr-only">Search chats</label>
                  <div className="relative flex items-center">
                    <input id="search-chats" type="text" className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 pr-10 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200" placeholder="Search chats" required />
                    <button type="submit" className="absolute right-1 rounded-lg p-2 text-sm text-slate-500 hover:text-blue-700 focus:outline-none sm:text-base">
                      <SearchIcon />
                      <span className="sr-only">Search chats</span>
                    </button>
                  </div>
                </form>

                <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
                  <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">Tailwind Classes</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">12 Mar</p>
                </button>

                <button className="flex w-full flex-col gap-y-2 rounded-lg bg-slate-200 px-3 py-2 text-left transition-colors duration-200 focus:outline-none dark:bg-slate-800">
                  <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">explain quantum computing</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">10 Feb</p>
                </button>
                <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800" >
                  <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">How to create ERP Diagram</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">22 Jan</p>
                </button>
                <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800" >
                  <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">API Scaling Strategies</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">1 Jan</p>
                </button>
              </div>
              <footer>
                <nav className="flex flex-wrap pl-0 xs:pl-3 space-x-4 sm:space-x-8 w-full justify-center">
                  <a target='_blank' rel="noopener noreferrer" href="https://instagram.com/horagutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                    <InstagramIcon />
                  </a>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/horacioegutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                    <LinkedinIcon />
                  </a>
                  <a target='_blank' rel="noopener noreferrer" href="https://github.com/HoracioGutierrez" className='hover:text-accent-500 transition-[color] duration-300'>
                    <GithubIcon />
                  </a>
                </nav>
              </footer>
            </div>
          </aside>
        )}
        {children}
      </div>
      {!session && (
        <LayoutFooter />
      )}
    </>
  )
}
