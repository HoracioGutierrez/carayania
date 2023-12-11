import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import authConfig from './auth.config';
import { createPlanForNewUser } from './actions/createPlanForNewUser';


const prisma = new PrismaClient()

export const { handlers: { GET, POST }, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    /* ...authConfig, */
    providers : [
        ...authConfig.providers
    ],
    events: {
        async createUser({ user }) {
            await createPlanForNewUser(user.id)
        }
    },
    callbacks: {
        async session({ session, user }) {

            const userFromDB = await prisma.user.findFirst({
                where: {
                    email: session.user.email
                },
                include: {
                    currentPlan: true,
                    chats: true,
                    message: true,
                }
            })

            prisma.$disconnect()

            if(userFromDB) {
                session.user = {
                    name: userFromDB.name,
                    email: userFromDB.email,
                    image: userFromDB.image,
                    id: userFromDB.id,
                    planId: userFromDB.planId,
                    chatId : null,
                    plansIds : null,
                    currentPlan : userFromDB.currentPlan,
                    chats: userFromDB.chats,
                    message: userFromDB.message
                }
            }
            return session
        }/* ,
        async authorized({request,auth}){
            console.log({request})
            console.log({auth})
            return auth ? true : false
        } */
    }
})