import { useState } from 'react'
import { Inventory, NewProduct, UpdateProduct } from '../models'

const useInventory = () => {
  const [inventory, setInventory] = useState<Inventory>([
    {
      id: '1',
      brand: 'marca 1',
      name: 'nombre 1',
      quantity: 20,
      type: 'medicina',
    },
    {
      id: '2',
      brand: 'marca 2',
      name: 'nombre 2',
      quantity: 20,
      type: 'medicina',
    },
  ])

  const addToInventory = async (product: NewProduct) => {
    setInventory([
      ...inventory,
      { id: String(new Date().getTime()), ...product },
    ])
  }

  const updateProduct = async (id: string, product: UpdateProduct) => {
    console.log(id, product)
  }
  const deleteProduct = async (id: string) => {
    console.log(id)
  }

  return {
    inventory,
    addToInventory,
    updateProduct,
    deleteProduct,
  }
}

export default useInventory
