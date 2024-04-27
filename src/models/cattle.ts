export type Cow = {
  id: string
  name: string
  breed: string
  birthday: string
  genre: string
}

export interface CowParents {
  mother: string
  father: string
}

export interface CowDetails extends Cow, CowParents {
  heatDate: string
  birthDate: string
  dryingDate: string
  inseminationDate: string
  brucellosisVaccineDate: string
  aftosaVaccineDate: string
  mother: string
  father: string
}

export type Cattle = Cow[]

export interface newCow extends CowParents, Omit<Cow, 'id'> {}

export interface CowTableData extends Cow {
  key: React.Key
}
