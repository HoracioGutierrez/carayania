"use server"
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const deleteChatFromUser = async (chatId: string): Promise<{ error: boolean, errorMessage: string, message: string, payload: any }> => {
    try {
        const client = new PrismaClient()

        const res = await client.chat.update({
            data : {
                deleted : true
            },
            where : {
                id : chatId
            }
        })

        if (res) {
            client.$disconnect()
            revalidatePath("/")
            return {
                ...returnType,
                payload: res
            }
        } else {
            return {
                ...returnType,
                error: true,
                errorMessage: "Something went wrong"
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