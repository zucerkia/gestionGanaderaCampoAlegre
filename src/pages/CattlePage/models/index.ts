export type Cow = {
  id: string
  name: string
  breed: string
  birthdate: string
  genre: string
}

export type Cattle = Cow[]

export interface CowData extends Omit<Cow, 'id'> {
  key: React.Key
}

export interface CattleRegisterData extends Omit<Cow, 'id' | 'genre'> {
  mother: string
  father: string
}
