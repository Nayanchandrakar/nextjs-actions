"use client"
import { create } from '@/actions/create-action'
import CreateButton from './_components/create-button'
import { useFormState } from 'react-dom'

export default function HomePage() {
  const updateData = { userName: 'nayan' }

  const initilaData = {
    error: ''
  }

  const updateCreate = create.bind(null, updateData)

  const [state, formAction] = useFormState(updateCreate, initilaData)


  return (
    <form action={formAction} className="p-9 space-x-2">
      <input name="input" type='text' placeholder="enter a value" className="border " />
      {state?.error && "please fill all the field"}
      <CreateButton />
    </form>
  )
}