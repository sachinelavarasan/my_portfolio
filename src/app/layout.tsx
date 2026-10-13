import { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import StyledComponentsRegistry from '../lib/registry'

const heading = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

// Runs before first paint: use the saved theme, else the system setting (avoids a flash of the wrong theme).
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`


export const metadata: Metadata = {
    metadataBase: new URL("https://elavarasandev.netlify.app"),
    title: {
        default: "Elavarasan M | Senior Full Stack Developer",
        template: "%s | Elavarasan M",
    },
    description:
        "Elavarasan M is a Senior Full Stack Developer specializing in Angular, React, TypeScript, Node.js, Nest js and cloud technologies. Explore projects, skills, certifications, and experience.",
    keywords: [
        "Elavarasan M",
        "Elavarasan",
        "Senior Full Stack Developer",
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
        title: "Elavarasan M | Senior Full Stack Developer",
        description:
            "Explore the portfolio of Elavarasan M, a Senior Full Stack Developer skilled in Angular, React, TypeScript, Node.js, Nest.js, Docker, and modern web technologies.",
        url: "https://elavarasandev.netlify.app",
        siteName: "Elavarasan Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Elavarasan M – Senior Full Stack Developer. Building secure, scalable APIs and SaaS platforms",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Elavarasan M | Senior Full Stack Developer",
        description:
            "Senior Full Stack Developer building secure, scalable APIs and SaaS platforms with NestJS, Node.js, React, and React Native.",
        images: ["/og-image.png"],
    },

    category: "technology",
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={`${heading.variable} ${body.variable} ${mono.variable}`}
            suppressHydrationWarning
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}