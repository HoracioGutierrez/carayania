import Image from 'next/image';
import NavigationLinksNavbar from './NavigationLinksNavbar';
import smallAvatar from '../assets/small-avatar.png';
import SocialIconsNavbar from './SocialIconsNavbar';


export default function LayoutFooter() {
    return (
        <footer className="px-4 py-4 dark:transparent dark:text-gray-400 text-xs">
            <div className="container flex flex-col sm:flex-row flex-wrap items-center justify-center mx-auto space-y-4 xs:justify-between xs:space-y-0">
                <div className="flex flex-col justify-center items-center sm:flex-row gap-4 xs:mb-4 sm:mb-0">
                    <Image src={smallAvatar} alt="Profile Avatar" width={48} height={48} className='rounded-full' />
                    <NavigationLinksNavbar />
                </div>
                <SocialIconsNavbar className='w-auto flex-row' />
            </div>
        </footer>
    )
}