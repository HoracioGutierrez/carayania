import LayoutFooter from '@/components/LayoutFooter';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {children}
      <LayoutFooter />
    </>
  )
}
