import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Code, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Page() {
    const year = new Date().getFullYear()

    return (
        <div className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            <header className="relative z-10 flex h-14 items-center px-4 lg:px-6">
                <Link className="flex items-center justify-center" href="#">
                    <Code className="h-6 w-6" />
                    <span className="sr-only">Matthias Mandler</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium underline-offset-4 hover:text-primary hover:underline"
                        href="#about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-medium underline-offset-4 hover:text-primary hover:underline"
                        href="#skills"
                    >
                        Skills
                    </Link>
                    <Link
                        className="text-sm font-medium underline-offset-4 hover:text-primary hover:underline"
                        href="#projects"
                    >
                        Projects
                    </Link>
                    <Link
                        className="text-sm font-medium underline-offset-4 hover:text-primary hover:underline"
                        href="#contact"
                    >
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="relative z-10 flex-1">
                <section
                    className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48"
                    id="about"
                >
                    <div className="container relative z-10 px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Matthias Mandler
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                    Web Developer passionate about creating
                                    beautiful and functional websites.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link href="https://github.com/motz0815">
                                    <Button
                                        variant="outline"
                                        className="border-gray-700 bg-gray-900/50 text-gray-100 hover:bg-gray-800/50"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/matthias-m-677012232">
                                    <Button
                                        variant="outline"
                                        className="border-gray-700 bg-gray-900/50 text-gray-100 hover:bg-gray-800/50"
                                    >
                                        <Linkedin className="mr-2 h-4 w-4" />
                                        LinkedIn
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="relative w-full py-12 md:py-24 lg:py-32"
                    id="skills"
                >
                    <div className="container relative z-10 px-4 md:px-6">
                        <h2 className="mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                            Skills
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            <Card className="border-gray-700 bg-gray-800/50">
                                <CardHeader>
                                    <CardTitle className="text-gray-100">
                                        Frontend
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-300">
                                    <ul className="list-inside list-disc">
                                        <li>HTML5</li>
                                        <li>CSS3 / Tailwind</li>
                                        <li>TypeScript</li>
                                        <li>React</li>
                                        <li>Next.js</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-gray-700 bg-gray-800/50">
                                <CardHeader>
                                    <CardTitle className="text-gray-100">
                                        Backend
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-300">
                                    <ul className="list-inside list-disc">
                                        <li>Node.js</li>
                                        <li>Supabase</li>
                                        <li>Python</li>
                                        <li>SQL</li>
                                        <li>Postgres</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-gray-700 bg-gray-800/50">
                                <CardHeader>
                                    <CardTitle className="text-gray-100">
                                        Tools & Others
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-300">
                                    <ul className="list-inside list-disc">
                                        <li>Git</li>
                                        <li>Docker</li>
                                        <li>CI/CD</li>
                                        <li>Turborepo</li>
                                        <li>Vercel</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section
                    className="relative w-full py-12 md:py-24 lg:py-32"
                    id="projects"
                >
                    <div className="container relative z-10 px-4 md:px-6">
                        <h2 className="mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                            Projects
                        </h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Card className="border-gray-700 bg-gray-800/50">
                                <CardHeader>
                                    <Link href="https://pendreams.com">
                                        <CardTitle className="text-gray-100">
                                            pendreams.com
                                        </CardTitle>
                                    </Link>
                                    <CardDescription className="text-gray-400">
                                        An AI-powered art inspiration website
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-gray-300">
                                    <p>
                                        Built with Next.js and Supabase.
                                        Features include user authentication, AI
                                        image generation, client-side infinite
                                        loading, and payment integration.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-gray-700 bg-gray-800/50">
                                <CardHeader>
                                    <Link href="https://zeus-system.com">
                                        <CardTitle className="text-gray-100">
                                            zeus-system.com
                                        </CardTitle>
                                    </Link>
                                    <CardDescription className="text-gray-400">
                                        A full-stack sensoring system
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-gray-300">
                                    <p>
                                        Developed using Next.js and Supabase.
                                        Includes real-time updates, a dashboard
                                        with user configurable data
                                        vizualizations, and a REST API.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section
                    className="relative w-full py-12 md:py-24 lg:py-32"
                    id="contact"
                >
                    <div className="container relative z-10 px-4 md:px-6">
                        <h2 className="mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
                            Contact Me
                        </h2>
                        <div className="mx-auto max-w-md">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
            <footer className="relative z-10 flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
                <p className="text-xs text-gray-400">
                    © {year} Matthias Mandler. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                    <Link
                        className="text-xs text-gray-400 underline-offset-4 hover:text-gray-100 hover:underline"
                        href="https://github.com/motz0815"
                    >
                        GitHub
                    </Link>
                    <Link
                        className="text-xs text-gray-400 underline-offset-4 hover:text-gray-100 hover:underline"
                        href="https://www.linkedin.com/in/matthias-m-677012232"
                    >
                        LinkedIn
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
