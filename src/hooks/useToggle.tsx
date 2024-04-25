import { useState } from 'react'

const useToggle = (state: boolean) => {
  const [isActive, setIsActive] = useState(state)

  const toggle = () => {
    setIsActive(!isActive)
  }
  return {
    isActive,
    toggle,
  }
}

export default useToggle
