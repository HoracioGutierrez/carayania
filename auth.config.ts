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

            if(request.url === "http://localhost:3000/") return true

            if(request.url.includes("/chat/")){
                if(!auth) {
                    return NextResponse.redirect("http://localhost:3000/")
                }
            }
            return auth ? true : false
        }
    }
} satisfies NextAuthConfig

export default config