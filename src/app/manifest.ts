import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Elavarasan Dev Portfolio",
        short_name: "Elavarasan Dev",
        description:
            "Portfolio of Elavarasan, Full Stack Developer specializing in Angular, Nest.js, React, Node Js, Docker, and AWS.",
        start_url: "/",
        display: "standalone",
        background_color: "#0f0f14",
        theme_color: "#0f0f14",
        icons: [
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            }
        ],
    };
}