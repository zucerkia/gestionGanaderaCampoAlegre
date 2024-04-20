import { User } from '@/models'

export type secureUser = Omit<User, 'password'>
export type Users = secureUser[]
export interface UserTableData extends secureUser {
  key: React.Key
}
