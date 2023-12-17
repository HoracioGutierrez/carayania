import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';


const config = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        async authorized({ auth , request }) {

            if(request.url === process.env.NEXTAUTH_URL || request.url == process.env.NEXTAUTH_URL + "/" ) return true

            if(request.url.includes("/share/")) return true

            if(request.url.includes("/chat/")){
                if(!auth) {
                    return NextResponse.redirect(process.env.NEXTAUTH_URL as string)
                }
            }

            return auth ? true : false
        }
    }
} satisfies NextAuthConfig

export default config