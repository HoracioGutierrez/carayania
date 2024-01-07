import { auth } from '@/auth';
import LayoutFooter from '@/components/LayoutFooter';
import LayoutSidebar from '@/components/LayoutSidebar';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth()

  return (
    <>
      <div className='grow flex'>
        {session && <LayoutSidebar session={session} />}
        {children}
      </div>
      {!session && <LayoutFooter />}
    </>
  )
}
