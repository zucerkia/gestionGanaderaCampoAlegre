export interface User {
  name: string
  email: string
  documentType: 'CC' | 'CE' | 'TI'
  documentNumber: string
  password: string
}

export type SecureUser = Omit<User, 'password'>
export type UserLogin = Pick<User, 'documentNumber' | 'password'>
