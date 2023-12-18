import { PrismaClient } from '@prisma/client';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const savePlanRenewalForUser = async (planDetails: any, userId: string) => {

    try {
        const client = new PrismaClient()
        const plan = await client.plan.create({
            data: {
                currentQuantity : 0,
                maxQuantity : 10,
                name : planDetails.payment_type == "credit_card" ? "CC" : "MP",
                price : 1000,
                expired : false,
                payment_id : planDetails.payment_id,
                preference_id : planDetails.preference_id,
                User : {
                    connect : {
                        id : userId
                    }
                }
            }
        })

        return {
            ...returnType,
            payload: plan
        }

    } catch (error) {
        if(error instanceof Error) {
            return {
                ...returnType,
                error: true,
                errorMessage: error.message
            }
        }

        return {
            ...returnType,
            error: true,
            errorMessage: "Error creating plan"
        }
    }
}