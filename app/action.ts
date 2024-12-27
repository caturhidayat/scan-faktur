'use server'

import { z } from "zod"

const urlSchema = z.string().url()

export async function validateUrl(prevState: any, formData: FormData) {
    try {

        await new Promise((resolve) => setTimeout(resolve, 1000))

        const rawData = {
            urlValidate: formData.get('urlValidate') as string
        }

        const validated = urlSchema.safeParse(rawData.urlValidate)

        if (!validated.success) {
            return {
                success: false,
                message: validated.error.issues[0].message,
                inputs: rawData
            }
        }

        console.log("Validated URL:", validated.data)

        return {
            success: true,
            message: 'Success'
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'Invalid URL'
        }
    }
}