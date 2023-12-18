import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import Drawer from './Drawer';
import HeaderWithFixedScroll from './HeaderWithFixedScroll';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import smallAvatar from '../assets/small-avatar.png';
import { ThemeTogglerButton } from './ThemeTogglerButton';


export default async function LayoutHeader() {

    const session = await auth()

    return (
        <HeaderWithFixedScroll>
            <div className="container px-2 flex justify-between mx-auto h-full">
                <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center">
                    <Image src={smallAvatar} alt="Profile Avatar" width={32} height={32} className='rounded-full' />
                </Link>
                <div className="items-center flex">
                    <nav className='hidden md:flex gap-2'>
                        <ThemeTogglerButton />
                        {session ? <SignOutButton /> : <SignInButton />}
                    </nav>
                    <Drawer session={session} />
                </div>
            </div>
        </HeaderWithFixedScroll>
    )
}