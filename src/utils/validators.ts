import * as yup from 'yup'

export function isId(fieldName?: string) {
  if (fieldName === undefined) {
    yup
      .number()
      .nullable(true)
      .moreThan(-1, 'Invalid Id')
      .typeError('Must be an Id')
  }
  return yup
    .number()
    .nullable(true)
    .moreThan(-1, 'Invalid number')
    .typeError(fieldName + ' must be a number')
}

export function isNumber(fieldName?: string) {
  if (fieldName === undefined) {
    yup
      .number()
      .nullable(true)
      .moreThan(-1, 'Invalid number')
      .typeError('Must be a number')
  }
  return yup
    .number()
    .nullable(true)
    .moreThan(-1, 'Invalid number')
    .typeError(fieldName + ' must be a number')
}

export function isHash(fieldName?: string) {
  if (fieldName === undefined) {
    return yup
      .string()
      .max(64, 'Hash must have 64 characters')
      .min(64, 'Hash must have 64 characters')
  }
  return yup
    .string()
    .max(64, fieldName + ' must have 64 characters')
    .min(64, 'Hash must have 64 characters')
}

export function isAddress(fieldName?: string) {
  if (fieldName === undefined) {
    return yup
      .string()
      .max(42, 'This field must have have 42 characters')
      .min(42)
      .matches(/^0x.*$/, 'This field must starts with 0x')
  }

  return yup
    .string()
    .max(42, fieldName + ' have 42 characters')
    .min(42)
    .matches(/^0x.*$/, fieldName + ' must starts with 0x')
}
