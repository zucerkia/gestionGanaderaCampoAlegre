export interface Product {
  id: string
  name: string
  brand: string
  type: 'alimento' | 'medicina'
  quantity: number
}

export type Inventory = Product[]

export interface ProductTableData extends Omit<Product, 'type'> {
  key: React.Key
}

export type NewProduct = Omit<Product, 'id'>

export type UpdateProduct = Partial<Product>
