export interface Production {
  id: string
  cowId: string
  producedLiters: number
  productionDate: string
  quality: string
  comments: string
}

export type newProduction = Omit<Production, 'id'>

export type ProductionHistory = Production[]

export interface ProductionTableData extends Production {
  key: string
}
