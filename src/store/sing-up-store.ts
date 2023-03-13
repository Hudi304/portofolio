import create from 'zustand'

type SignUpValues = {
  firstName?: string
  lastName?: string
  phoneNumber?: string
}

const initialValues: SignUpValues = {
  firstName: localStorage.getItem('FIRST_NAME') || '',
  lastName: '',
  phoneNumber: localStorage.getItem('PHONE_NUMBER') || '',
}

export type SignUpState = {
  values: SignUpValues
  setValues: (values: SignUpValues) => void
  isLoading: boolean
}

export const useSignUpStore = create<SignUpState>()((set, get) => ({
  values: initialValues,
  isLoading: false,
  setValues: (values: SignUpValues) => {
    set({ values })
    localStorage.setItem('FIRST_NAME', values.firstName || '')
    localStorage.setItem('PHONE_NUMBER', values.phoneNumber || '')
  },
}))
