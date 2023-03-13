import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export enum CompleteProfileStep {
  NAME = 'NAME',
  DATE_OF_BIRTH = 'DATE_OF_BIRTH',
  ADDRESS = 'ADDRESS',
  ANNUAL_INCOME = 'ANNUAL_INCOME',
  LIQUID_NET_WORTH = 'LIQUID_NET_WORTH',
  INVESTMENT_EXPERIENCE = 'INVESTMENT_EXPERIENCE',
  RISK_TOLERANCE = 'RISK_TOLERANCE',

  PRIMARY_GOAL = 'PRIMARY_GOAL',
  INVESTMENT_MATURITY = 'INVESTMENT_MATURITY',
  OTHER_INVESTMENTS = 'OTHER_INVESTMENTS',
  INVESTMENT_NEXT_YEAR = 'INVESTMENT_NEXT_YEAR',
  PHONE_NUMBER = 'PHONE_NUMBER',
  PHONE_NUMBER_VALIDATION = 'PHONE_NUMBER_VALIDATION',
  COMPLETION = 'COMPLETION',
}

export type CompleteProfileState = {
  currentStep: CompleteProfileStep
  setState: (state: CompleteProfileState) => void
  firstName?: string
  lastName?: string

  dateOfBirth?: string

  primaryAddress?: string
  secondaryAddress?: string
  city?: string
  country?: string
  zipCode?: string

  annualIncome?: string
  liquidNetWorth?: string
  investmentExperience?: string
  toleranceForRisk?: string
  primaryInvestmentGoal?: string
  investmentMaturity?: string
  otherInvestments?: string
  investmentsNextYear?: string

  phoneNumber?: string
}

export const useCompleteProfileStore = create<CompleteProfileState>()(
  devtools(
    persist(
      (set, get) => ({
        currentStep: CompleteProfileStep.NAME,
        setState: (newState: any) => set((currentState) => ({ ...newState })),
      }),
      {
        name: 'complete-profile-storage',
      },
    ),
  ),
)
