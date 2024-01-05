import { MetadataRoute } from 'next';


export default function manifest(): MetadataRoute.Manifest {
    return {
        "theme_color": "#8936FF",
        "background_color": "#2EC6FE",
        "icons": [
            {
                "purpose": "maskable",
                "sizes": "512x512",
                "src": "/icon512_maskable.png",
                "type": "image/png"
            },
            {
                "purpose": "any",
                "sizes": "512x512",
                "src": "/icon512_rounded.png",
                "type": "image/png"
            }
        ],
        "orientation": "any",
        "display": "standalone",
        "dir": "ltr",
        "lang": "es-AR",
        "name": "CarayanIA Chatbot",
        "short_name": "CarayanIA ",
        "start_url": "/",
        "scope": "/",
        "description": "Chatbot que habla como Pablo Carayani Camara"
    }
}