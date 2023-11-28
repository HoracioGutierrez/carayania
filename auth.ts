import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import authConfig from './auth.config';
import { createPlanForNewUser } from './actions/createPlanForNewUser';


const prisma = new PrismaClient()

export const { handlers: { GET, POST }, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
    events: {
        async createUser({ user }) {
            await createPlanForNewUser(user.id)
        }
    },
    callbacks: {
        async session({ session, user }) {

            const test = await prisma.user.findFirst({
                where: {
                    email: session.user.email
                },
                include: {
                    currentPlan: true,
                    chats: true,
                }
            })

            console.log(test)

            return session
        }
    }
})