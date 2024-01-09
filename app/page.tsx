'use client'

import { create } from '@/actions/create-action'

export default function HomePage() {
  const updateData = { userName: 'nayan' }

  const updateCreate = create.bind(null, updateData)

  return (
    <form action={updateCreate} className="p-9 space-x-2">
      <input name="input" type='text' placeholder="enter a value" className="border " />
      <button className="border  border-black" typeof="submit">Submit</button>
    </form>
  )
}