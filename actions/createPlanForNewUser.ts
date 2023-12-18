import { PrismaClient } from '@prisma/client';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const createPlanForNewUser = async (userId: string) => {

    try {
        const client = new PrismaClient()
        await client.plan.create({
            data: {
                name: "FREE",
                price: 0,
                currentQuantity: 0,
                maxQuantity: 5,
                User: {
                    connectOrCreate: {
                        where : {
                            id : userId
                        },
                        create : {
                            id : userId
                        }
                    }
                },
            }
        })
        client.$disconnect()
    } catch (error) {
        if (error instanceof Error)
            return { ...returnType, error: true, errorMessage: error.message }
        else
            return { ...returnType, error: true, errorMessage: "Error creating plan" }
    }

}