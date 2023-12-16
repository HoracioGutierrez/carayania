/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : "lh3.googleusercontent.com"
            }
        ]
    },
    env : {
        MERCADOPAGO_CLIENT_ID : process.env.MERCADOPAGO_CLIENT_ID,
    }
}

module.exports = nextConfig
