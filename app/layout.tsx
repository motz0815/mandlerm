import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: "Matthias Mandler - Portfolio",
    description:
        "I'm Matthias Mandler, a web developer from Austria. I build websites and web applications using modern web technologies.",
    keywords: ["websites", "web technologies", "web development"],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    GeistSans.variable,
                    GeistMono.variable,
                )}
            >
                {children}
                <Suspense>
                    <Toaster />
                </Suspense>
                <Analytics />
            </body>
        </html>
    )
}
