import { CheckCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { savePlanRenewalForUser } from '@/actions/savePlanRenewalForUser';


interface Props {
    searchParams: URLSearchParams
}

export default async function page({ searchParams }: Props) {

    const session = await auth()
    await savePlanRenewalForUser(searchParams, session?.user?.id as string)

    return (
        <main className='p-2 pt-[96px] grow max-h-screen grid place-content-center'>
            <div className='grid place-items-center'>
                <CheckCircleIcon width={100} height={100} />
                <h1 className='text-2xl font-bold text-center mb-8'>¡Gracias por tu compra!</h1>
                <Button asChild className='bg-primary-foreground text-primary'>
                    <Link href='/'> Volver al inicio </Link>
                </Button>
            </div>
        </main>
    )
}
