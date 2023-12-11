import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import Drawer from './Drawer';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import smallAvatar from '../assets/small-avatar.png';
import { ThemeTogglerButton } from './ThemeTogglerButton';


export default async function LayoutHeader() {

    const session = await auth()

    return (
        <header className="p-4 bg-transparent  dark:shadow-none dark:bg-transparent fixed w-full z-10">
            <div className="container px-2 flex justify-between h-16 mx-auto">
                <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <Image src={smallAvatar} alt="Profile Avatar" width={32} height={32} className='rounded-full' />
                </Link>
                <div className="items-center space-x-3 flex">
                    <nav className='hidden md:flex gap-2'>
                        <ThemeTogglerButton/>
                        {session ? <SignOutButton /> : <SignInButton />}
                    </nav>
                    <Drawer session={session}/>
                </div>
            </div>
        </header>
    )
}