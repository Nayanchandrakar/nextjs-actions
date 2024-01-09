"use server"

const create = async (userName: unknown, formData: FormData) => {
  try {
    const value = formData.get("input")
    console.log(value, userName)
  } catch (error) {
    return {
      error: "Internal server error",
    }
  }
}

export { create }
