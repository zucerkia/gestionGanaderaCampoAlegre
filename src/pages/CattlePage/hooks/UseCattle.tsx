import { useState } from 'react'
import { Cattle, Cow, newCow } from '../models'

const useCattle = () => {
  const [cattle, setCattle] = useState<Cattle>([])

  const addCattle = async (newCow: newCow) => {
    const id = String(new Date().getTime())
    const cow: Cow = { ...newCow, id }

    setCattle([...cattle, cow])
  }

  return { cattle, addCattle }
}

export default useCattle
