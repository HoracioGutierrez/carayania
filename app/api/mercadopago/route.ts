import { NextRequest, NextResponse } from 'next/server';
import { createPaymentId } from '@/actions/createPaymentLink';


export async function POST(req: NextRequest) {
    //const json = await req.json() TODO check if this is needed

    const { error, payload } = await createPaymentId({ id: 1234, title: "Test", quantity: 1, unit_price: 1000 })

    if (error) {
        return NextResponse.json({ error: true, errorMessage: payload })
    }

    return NextResponse.json({ id: payload })

}


