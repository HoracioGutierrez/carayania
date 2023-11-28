import { auth } from '@/auth';


export default async function Home() {

  const session = await auth()

  return (
    <main>
      {session ? "You are logged in" : "You are not logged in"}
    </main>
  )
}
