export interface Vaccination {
  id: string
  cowId: string
  vaccine: string
  applyDate: string
  applied: boolean
}

export type VaccinationHistory = Vaccination[]

export type NewVaccination = Omit<Vaccination, 'id'>
