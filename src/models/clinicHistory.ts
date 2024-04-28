export interface ClinicRegister {
  id: string
  cowId: string
  weight: number
  bodyCondition: string
  diagnostic: string
  comments: string
  evolution: string
  startIllnessDate: string
  finishIllnessDate: string
}

export type ClinicHistory = ClinicRegister[]

export type NewClinicRegister = Omit<ClinicRegister, 'id'>
