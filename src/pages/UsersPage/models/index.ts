import { SecureUser } from '@/models'

export type Users = SecureUser[]
export interface UserTableData extends SecureUser {
  key: React.Key
}
