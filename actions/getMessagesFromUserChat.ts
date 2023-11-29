import { PrismaClient } from '@prisma/client';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const getMessagesFromUserChat = async (chatSlug: string) => {
    try {
        const client = new PrismaClient()
        const messages = await client.message.findMany({
            where: {
                chatIdRelation: {
                    slug: chatSlug
                }
            },
            orderBy : {
                createdAt: "asc"
            }
        })

        if (messages) {
            client.$disconnect()
            return {
                ...returnType,
                payload: messages
            }
        } else {
            return {
                ...returnType,
                error: true,
                errorMessage: "Messages not found"
            }
        }

    } catch (error) {
        console.log(error)
        return {
            ...returnType,
            error: true,
            errorMessage: "Something went wrong"
        }
    }
}