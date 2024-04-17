import { Product } from '@/models/Inventory'

export interface ProductData extends Omit<Product, 'type'> {
  key: React.Key
}

export interface CattleRegisterData extends Omit<Product, 'id'> {}

export interface ProductRegisterData {}
