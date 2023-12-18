import MercadoPagoConfig, { Preference } from 'mercadopago';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const createPaymentId = async (payload: any) => {


    const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN as string , options: { timeout: 5000 } });
    const preference = new Preference(client);

    try {

        const response = await preference.create({
            body: {
                items: [
                    {
                        id: payload.id,
                        title: payload.title,
                        quantity: payload.quantity,
                        unit_price: payload.unit_price,
                    }
                ],
                back_urls: {
                    success: process.env.NEXTAUTH_URL + "/success",
                    failure: process.env.NEXTAUTH_URL + "/failure",
                    pending: process.env.NEXTAUTH_URL + "/pending"
                },
                auto_return: "approved" as const,
            }
        })

        return { ...returnType, payload: response.id }

    } catch (error) {
        if (error instanceof Error)
            return { ...returnType, error: true, errorMessage: error.message }
        else
            return { ...returnType, error: true, errorMessage: "Error creating plan" }
    }
}