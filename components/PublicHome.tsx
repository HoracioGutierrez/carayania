import Image from 'next/image';
import bigBackground from '../assets/big-background.jpg';
import SignInButton from './SignInButton';
import { ThemeTogglerButton } from './ThemeTogglerButton';


export default function PublicHome() {
    return (
        <main className='p-2 md:p-4 grow flex justify-center items-center overflow-hidden'>
            <div className='flex flex-col gap-8 items-center max-w-[700px]'>
                <figure className='relative w-20 md:w-24 lg:w-32 xl:w-44 h-20 md:h-24 lg:h-32 xl:h-44 m-auto group overflow-hidden rounded-full'>
                    <Image src={bigBackground} alt="background" className="m-auto rounded-full group-hover:scale-105 transition-[transform] duration-300" />
                </figure>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className="scroll-m-20 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight xl:text-8xl text-gradient-p-to-a text-center">Carayan IA</h2>
                        <p className="text-base md:text-xl lg:text-2xl font-extralight dark:text-slate-600 text-center">El chatbot de modas mas chic y canchero</p>
                    </div>
                    <p className="text-slate-600 xl:text-xl dark:text-slate-300 text-center text-balanced">A <span className='text-gradient-p-to-a font-bold text-xl xl:text-2xl'>Carayan IA</span> le podes preguntar lo que quieras, desde que outfit ponerte hoy hasta si es buena idea ir a la casa de tu ex luego de unas copas para hacer el fiki fiki...No mentira, porque el que bebe no conduce.</p>
                </div>
                <div className='flex items-center gap-4 mt-12'>
                    <SignInButton className='m-auto w-full xs:max-w-fit bg-gradient-to-br from-primary to-secondary-50 hover:from-secondary-50 hover:to-primary text-base border-pulse hover:scale-105 transition-[transform] duration-300'>comenzar a chatear!</SignInButton>
                    <ThemeTogglerButton className=""/>
                </div>
            </div>
        </main>
    )
}