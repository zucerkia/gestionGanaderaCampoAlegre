import { newCow } from '@/models'

export interface CattleDetailForm extends Omit<newCow, 'genre' | 'birthday'> {
  birthday: Date
}
