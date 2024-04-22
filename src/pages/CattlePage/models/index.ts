export type Cow = {
  id: string
  name: string
  breed: string
  birthdate: string
  genre: string
}

export type Cattle = Cow[]

export interface newCow extends Omit<Cow, 'id'> {
  mother: string
  father: string
}

export interface CowData extends Cow {
  key: React.Key
}
