export interface User {
  name: string
  email: string
  documentType: 'CC' | 'CE' | 'TI'
  documentNumber: string
  password: string
}
