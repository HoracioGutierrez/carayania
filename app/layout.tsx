import './globals.scss';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarayanIA',
  description: 'CarayanIA es un chatbot web que habla como Pablo Carayáni Camara',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='min-h-full h-full'>
      <body className={cn(inter.className,"flex flex-col min-h-full")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position='top-right'/>
        </ThemeProvider>
      </body>
    </html>
  )
}
