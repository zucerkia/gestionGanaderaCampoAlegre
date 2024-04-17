import { useState } from 'react'

import { Cattle, Cow } from '@/models/Cattle'

const useCattle = () => {
  const [cattle, setCattle] = useState<Cattle>([])

  const addCattle = async (cow: Cow) => {
    const newCow: Cow = { ...cow }
    setCattle([...cattle, newCow])
  }

  return { cattle, addCattle }
}

export default useCattle
