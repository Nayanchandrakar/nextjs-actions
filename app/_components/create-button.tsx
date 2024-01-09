"use client"

import { useFormStatus } from "react-dom"

const CreateButton = () => {
    const { pending } = useFormStatus()

    return <button className="border  border-black disabled:opacity-50 bg-black text-white px-4 py-1 rounded-lg" disabled={pending} typeof="submit">Submit</button>
}

export default CreateButton