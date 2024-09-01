"use server"

export async function sendMessage(values: {
    name: string
    email: string
    message: string
}): Promise<{
    error: string | null
    ok: boolean
}> {
    // simulate server action
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (values.name === "Matthias") {
        return {
            ok: false,
            error: "Name already taken.",
        }
    }

    return {
        ok: true,
        error: null,
    }
}
