"use server"

import randomstring from 'randomstring';
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const createNewChatForUser = async (userId: string): Promise<{ error: boolean, errorMessage: string, message: string, payload: any }> => {

    try {
        const client = new PrismaClient()

        const randomSlug = randomstring.generate(7);

        const check = await client.chat.findFirst({
            where: {
                author: {
                    id: userId
                },
                slug: randomSlug
            }
        })


        if (!check) {

            const res = await client.chat.create({
                data: {
                    slug: randomSlug,
                    author: {
                        connect: {
                            id: userId
                        }
                    }
                },
                include: {
                    author: true
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

        } else {
            return createNewChatForUser(userId)
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