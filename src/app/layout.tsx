import { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import StyledComponentsRegistry from '../lib/registry'


export const metadata: Metadata = {
    metadataBase: new URL("https://elavarasandev.netlify.app"),
    title: {
        default: "Elavarasan M | Full Stack Developer",
        template: "%s | Elavarasan M",
    },
    description:
        "Elavarasan M is a Full Stack Developer specializing in Angular, React, TypeScript, Node.js, Nest js and cloud technologies. Explore projects, skills, certifications, and experience.",
    keywords: [
        "Elavarasan M",
        "Elavarasan",
        "Full Stack Developer",
        "Angular Developer",
        "Nest js Developer",
        "React Developer",
        "TypeScript Developer",
        "Node.js Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Developer Portfolio",
        "Software Engineer Portfolio",
        "JavaScript Developer",
        "Docker Developer",
        "Developer Portfolio India",
    ],
    authors: [{ name: "Elavarasan M", url: "https://elavarasandev.netlify.app" }],
    creator: "Elavarasan M",
    publisher: "Elavarasan M",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    icons: {
        icon: "/myphoto.png",
        shortcut: "/myphoto.png",
        apple: "/myphoto.png",
    },
    openGraph: {
        title: "Elavarasan M | Full Stack Developer",
        description:
            "Explore the portfolio of Elavarasan M, a Full Stack Developer skilled in Angular, React, TypeScript, Node.js, Nest.js, Docker, and modern web technologies.",
        url: "https://elavarasandev.netlify.app",
        siteName: "Elavarasan Portfolio",
        locale: "en_US",
        type: "website",
    },

    category: "technology",
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <main>
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </main>
            </body>
        </html>
    )
}