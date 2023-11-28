import NextAuth, { DefaultSession } from 'next-auth';


declare module "next-auth" {
    interface Session {
        user: {
            id: string
            name: string
            email: string
            image: string
            chatId: string
            planId: string
            plansIds: string[]
            currentPlan : {
                id : string
                name : string
                price : number
                currentQuantity : number
                maxQuantity : number
            }
        } & DefaultSession["user"]
    }
}