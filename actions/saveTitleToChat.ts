"use server"

import { PrismaClient } from '@prisma/client';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const saveTitleToChat = async (chatSlug: string, title: string) => {

    try {
        const client = new PrismaClient()
        const chat = await client.chat.update({
            where: {
                slug: chatSlug
            },
            data: {
                title: title
            }
        })

        if(!chat) {
            throw new Error("Chat not found")
        }

        return {
            ...returnType,
            payload: chat
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