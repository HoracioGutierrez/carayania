import NextAuth, { DefaultSession } from 'next-auth';


/* 

model User {
  id            String        @id @default(auto()) @map("_id") @db.ObjectId
  name          String?
  email         String?       @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  //plans         PlansOnUser[]
  chats         ChatsOnUser[]
  Message       Message[]
  currentPlan   Plan?
  plans        Plan[] @relation("UserPlans", fields: [plansIds], references: [id])
  plansIds     String[] @db.ObjectId
}


*/

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