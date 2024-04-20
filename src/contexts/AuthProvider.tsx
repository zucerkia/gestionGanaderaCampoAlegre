import { UserLogin } from '@/models'
import { PropsWithChildren, createContext, useState } from 'react'

interface AuthState {
  isAuthenticated: boolean
  user: string | null
}

interface AuthActions {
  login: (data: UserLogin) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthState & AuthActions>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: async () => {},
})

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  })

  const login = async ({ documentNumber, password }: UserLogin) => {
    console.log(documentNumber, password)
    const username = 'test'
    setAuthState({ isAuthenticated: true, user: username })
  }

  const logout = async () => {
    setAuthState({ isAuthenticated: false, user: null })
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
