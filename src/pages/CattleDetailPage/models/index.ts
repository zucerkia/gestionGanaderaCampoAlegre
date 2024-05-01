import { Vaccination, newCow } from '@/models'

export interface CattleDetailForm extends Omit<newCow, 'genre' | 'birthday'> {
  birthday: Date
}

export interface VaccinationTableData
  extends Pick<Vaccination, 'applyDate' | 'vaccine'> {
  key: string
}
