import { Cow } from '@/models/Cattle'

export interface CowData extends Omit<Cow, 'id'> {
  key: React.Key
}

export interface CattleRegisterData extends Omit<Cow, 'id' | 'genre'> {
  mother: string
  father: string
}
