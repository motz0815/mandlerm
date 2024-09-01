"use server"
import { Resend } from "resend"

export async function sendMessage(values: {
    name: string
    email: string
    message: string
}): Promise<{
    error: string | null
    ok: boolean
}> {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
        from: "noreply@mandlerm.com",
        to: "me@motz.xyz",
        subject: "New message from your website from " + values.name,
        replyTo: values.email,
        html:
            "<p>Hi Matthias, you have a new message from your website:</p><p><strong>Name:</strong> " +
            values.name +
            "</p><p><strong>Email:</strong> " +
            values.email +
            "</p><p><strong>Message:</strong> " +
            values.message +
            "</p>",
    })

    if (error) {
        return {
            ok: false,
            error: error.message,
        }
    }

    return {
        ok: true,
        error: null,
    }
}
