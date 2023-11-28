import { auth } from '@/auth';


export default async function Home() {

  const session = await auth()

  return (
    <main className='p-2 md:p-4 grow'>
      <div className="container">
        {session ? "You are logged in" : "You are not logged in"}
      </div>
    </main>
  )
}
