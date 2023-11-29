import SignInButton from './SignInButton';


export default function PublicHome() {
    return (
        <main className='p-2 md:p-4 grow'>
            <div className="container h-full grid grid-cols-1 grid-rows-[minmax(min-content,_300px)_1fr] md:grid-rows-1 md:grid-cols-2 gap-8">
                <section className="home__image md:self-center max-h-96 h-full lg:max-h-[550px]">
                    <img src="https://picsum.photos/seed/picsum/800/600" alt="" className=" h-full w-full object-cover" />
                </section>
                <section className="home__content md:self-center max-h-96 h-full lg:max-h-[550px] flex flex-col gap-8 md:justify-center">
                    <header>
                        <h2 className="text-3xl font-bold">Carayan IA</h2>
                        <p className="text-lg text-slate-300">El chatbot de modas mas chic y canchero</p>
                    </header>
                    <div className='flex flex-col gap-4'>
                        <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum neque, repudiandae sapiente iure ducimus provident numquam, molestias, adipisci corrupti et eos! Blanditiis deserunt, saepe iure eius at perferendis delectus sat perferendis delectus sat perferendis delectus.</p>
                        <SignInButton className='sm:self-center md:self-stretch lg:self-end'>comenzar a chatear!</SignInButton>
                    </div>
                </section>
            </div>
        </main>
    )
}