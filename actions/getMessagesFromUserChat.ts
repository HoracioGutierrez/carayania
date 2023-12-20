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

        const chatWithMessages = await client.chat.findFirst({
            where : {
                slug: chatSlug
            },
            include : {
                message: true
            }
        })

        const messages = await client.message.findMany({
            where: {
                chatIdRelation: {
                    slug: chatSlug
                }
            },
            orderBy : {
                createdAt: "asc"
            },
            include : {
                chatIdRelation: true,
            }
        })

        if (messages) {
            client.$disconnect()
            return {
                ...returnType,
                payload: chatWithMessages,
            }
        } else {
            return {
                ...returnType,
                error: true,
                errorMessage: "Messages not found"
            }
        }

    } catch (error) {
        return {
            ...returnType,
            error: true,
            errorMessage: "Something went wrong"
        }
    }
}