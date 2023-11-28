import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';


const config = {
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
} satisfies NextAuthConfig

export default config