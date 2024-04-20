import { useState } from 'react'
import { Users } from '../models'

const useUsers = () => {
  const [users, setUsers] = useState<Users>([])

  return {
    users,
    setUsers,
  }
}

export default useUsers
