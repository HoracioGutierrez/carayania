import { auth } from '@/auth';


export const checkAuthOnChatRoute = async () => {
    
    const session = await auth()

    return session ? true : false
}