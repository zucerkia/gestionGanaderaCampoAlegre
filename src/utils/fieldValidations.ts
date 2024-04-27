import { FormRule } from 'antd'

export const requiredInput: FormRule = {
  required: true,
  message: 'El campo es requerido',
}

export const emailInput: FormRule = {
  type: 'email',
  message: 'El campo debe ser un correo válido',
}
