import { auth } from '@/auth';
import PrivateHome from '@/components/PrivateHome';
import PublicHome from '@/components/PublicHome';


export default async function Home() {

  const session = await auth()

  return (
    <>
      {session ? <PrivateHome /> : <PublicHome />}
    </>
  )
}
