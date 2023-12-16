import MercadoPagoConfig, { Preference } from 'mercadopago';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const createPaymentId = async (payload: any) => {


    const client = new MercadoPagoConfig({ accessToken: "TEST-7625224674925986-070920-0871f36d6f33bc4c996d03f16d64b1bb-129738358", options: { timeout: 5000 } });
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
                    success: "http://localhost:/3000" + "/success",
                    failure: "http://localhost:/3000" + "/failure",
                    pending: "http://localhost:/3000" + "/pending"
                },
                auto_return: "approved" as const,
            }
        })

        return { ...returnType, payload: response.id }

    } catch (error) {
        console.log(error)
        if (error instanceof Error)
            return { ...returnType, error: true, errorMessage: error.message }
        else
            return { ...returnType, error: true, errorMessage: "Error creating plan" }
    }
}