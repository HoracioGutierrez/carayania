import NextAuth, { DefaultSession } from 'next-auth';


declare module "next-auth" {
    interface Session {
        user: {
            id: string
            name: string | null
            email: string | null
            image: string | null
            chatId: string | null
            planId: string | null
            plansIds: string[] | null
            currentPlan : {
                id : string | null
                name : string | null
                price : number | null
                currentQuantity : number | null
                maxQuantity : number | null
            } | null,
            chats : {
                id : string | null
                slug : string | null
                authorId : string | null
                messages? : {
                    id : string | null
                    content : string | null
                    createdAt : string | null
                    author : {
                        id : string | null
                        name : string | null
                        email : string | null
                        image : string | null
                    } | null
                }[] | null
            }[],
            message: {
                id: string;
                createdAt: Date | null;
                authorId: string;
                message: string;
                tokenCount: number;
                deleted: boolean;
                chatId: string;
            }[]
        } & DefaultSession["user"]
    }
}