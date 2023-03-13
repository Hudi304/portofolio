import moment from 'moment'

export function formatMoment(date: string | undefined | null) {
  return date && date !== '' && date != null
    ? moment(date).format('MM/DD/YYYY-HH:mm')
    : '--'
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function validate(x: any) {
  let noSpaces = x
  if (typeof x == 'string') {
    noSpaces = x.trim()
  }

  if (noSpaces == null || noSpaces === undefined || noSpaces === '') {
    return '--'
  }
  return noSpaces
}

export function camelCaseToWordString(
  camelCaseString: string | undefined | null,
): string | undefined {
  if (!camelCaseString || camelCaseString == null) {
    return undefined
  }
  const result = camelCaseString.replace(/([A-Z]|\d{1,})/g, ' $1')
  return result
}

export function formatBool(bool: boolean | null) {
  switch (bool) {
    case true:
      return 'TRUE'
    case false:
      return 'FALSE'
    default:
      return '--'
  }
}
export function formatAmount(amount: string | number | undefined | null) {
  switch (amount) {
    case undefined:
      return '--'

    case null:
      return '--'

    case 0 || '0':
      return '--'

    default:
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
  }
}

export function formatDateToISO(date: number | string): {
  day: string
  hour: string
} {
  const d = new Date((date as number) * 1000).toISOString()
  const returnedValued = d.split('T')
  return {
    day: returnedValued[0],
    hour: returnedValued[1].split('.')[0],
  }
}
