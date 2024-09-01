import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: "KnowTheWeb",
    description:
        "KnowTheWeb | Learn what a website is made of. Search for websites by their technologies, and get insights on how they are built.",
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
            </body>
        </html>
    )
}
