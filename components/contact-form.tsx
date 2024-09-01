"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { sendMessage } from "@/app/actions"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Check, Send, X } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export function ContactForm() {
    const [pending, setPending] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setPending(true)

        // invoke server action
        const state = await sendMessage(values)

        if (state.ok) {
            // toast success
            toast({
                title: "Message sent!",
                description:
                    "Thank you for your message. I'll get back to you soon.",
                action: <Check />,
            })
        } else {
            // toast error
            toast({
                title: "Error",
                description: state.error,
                action: <X />,
            })
        }

        setPending(false)
    }

    return (
        <div className="mx-auto w-full max-w-md">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Your name"
                                        {...field}
                                        className="border-gray-700 bg-gray-800/50 text-gray-100 placeholder-gray-400"
                                    />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Your email"
                                        {...field}
                                        className="border-gray-700 bg-gray-800/50 text-gray-100 placeholder-gray-400"
                                    />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Your message"
                                        {...field}
                                        className="min-h-[100px] resize-none border-gray-700 bg-gray-800/50 text-gray-100 placeholder-gray-400"
                                    />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        loading={pending}
                        className="w-full bg-gray-700/50 text-gray-100 transition-colors duration-300 hover:bg-gray-600/50"
                    >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>
    )
}
