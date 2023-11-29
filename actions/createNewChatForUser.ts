"use server"

import randomstring from 'randomstring';
import { PrismaClient } from '@prisma/client';


const returnType = {
    error: false,
    errorMessage: "",
    message: "Plan created",
    payload: null
}

export const createNewChatForUser = async (userId: string) => {

    try {
        const client = new PrismaClient()
        
        const randomSlug = randomstring.generate(7);

        const check = await client.chat.findFirst({
            where : {
                author : {
                    id : userId
                },
                slug : randomSlug
            }
        })


        if(!check) {

            console.log("chat doesn't exist")

            const res = await client.chat.create({
                data : {
                    slug : randomSlug,
                    author : {
                        connect : {
                            id : userId
                        }
                    }
                },
                include : {
                    author : true
                }
            })

            if(res) {
                console.log("chat created")
            } else {
                console.log("chat not created")
            }

        } else {
            console.log("test")
        }

        client.$disconnect()


    } catch (error) {
        console.log(error)
        return {
            ...returnType,
            error: true,
            errorMessage: error
        }
    }
}