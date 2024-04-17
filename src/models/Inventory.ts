export interface Product {
  id: string
  name: string
  brand: string
  type: 'alimento' | 'medicina'
  quantity: number
}

export type Inventory = Product[]
