"use client"

import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';


interface PaymentButtonProps {
    userEmail: string
}

function PaymentButton({ userEmail }: PaymentButtonProps) {

    const [preferenceId, setPreferenceId] = useState("")
    initMercadoPago(process.env.MERCADOPAGO_CLIENT_ID || "")

    useEffect(() => {
        if (!preferenceId) {
            handleClick()
        }
    }, [preferenceId])

    const createPreference = async () => {
        const response = await fetch("/api/mercadopago", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "CarayanAI",
                unit_price: 1000,
                quantity: 1,
                currency_id: "ARS",
                payer_email: userEmail,
            })
        })
        const { id } = await response.json()
        return id
    }

    const handleClick = async () => {
        const id = await createPreference()
        if (id) {
            setPreferenceId(id)
        }
    }

    return (
        <div className="max-w-md mx-auto">
            {preferenceId && <Wallet customization={{ texts: { valueProp: "practicality", action: "pay" } }} initialization={{ preferenceId: preferenceId }} />}
        </div>
    )
}

export default PaymentButton