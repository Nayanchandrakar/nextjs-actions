"use server"

import { z } from "zod"

const schema = z.object({
  input: z.string().min(5, "minimum 5 words required"),
})

const create = async (
  prevState: any,
  userName: unknown,
  formData: FormData
) => {
  try {
    const validateFields = schema.safeParse({
      input: formData.get("input"),
    })

    if (!validateFields.success) {
      return {
        error: validateFields.error.flatten().fieldErrors,
      }
    }

    return {
      data: validateFields?.data?.input,
    }
  } catch (error) {
    return {
      error: "Internal server error",
    }
  }
}

export { create }
