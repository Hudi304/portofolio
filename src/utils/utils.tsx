import moment from 'moment'
import { CSSProperties } from 'react'

export type UseStatePair<T> = {
  item: T
  setItem: (item: T) => void
}

export type Stylable = {
  className?: string
  style?: CSSProperties
}

type Opt = {
  label: string
  value: string
}

export function optionToBool(option: Opt): boolean | null {
  const value = option.value
  switch (value) {
    case 'approved':
      return false
    case 'rejected':
      return true
    default:
      return null
  }
}

export type ScoreColor = {
  score: number
  percent: number
  color: string
}

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max)
}

export function parseBool(value: any): boolean | undefined {
  const lower = value?.toLowerCase()
  if (lower === 'true') {
    return true
  }
  if (lower === 'false') {
    return false
  }
  return undefined
}

export function parseTimeStamp(timeStamp: any) {
  let data
  try {
    const timeStamp_no = Number(timeStamp)
    if (timeStamp_no && timeStamp_no != null) {
      data = moment(timeStamp_no * 1000).format(`y MMM Do ddd hh:mm`)
    }
  } catch (error) {
    console.log('parseTimeStamp() has failed : \n', error)
  }
  return data
}

export function isArr(arr: any): boolean {
  return Array.isArray(arr)
}

export function isValidArr(arr: any[] | null | undefined): boolean {
  if (arr === null) {
    return false
  }
  if (arr === undefined) {
    return false
  }
  if (arr.length < 1) {
    return false
  }
  return Array.isArray(arr)
}

export function getValidArr<T>(arr: T[] | null | undefined): T[] | null {
  if (arr === null) {
    return null
  }
  if (arr === undefined) {
    return null
  }
  if (!Array.isArray(arr)) {
    return null
  }
  return arr
}

export function isEmptyArr(arr: any): boolean {
  if (isArr(arr)) {
    return arr.length === 0
  }
  return false
}

export function getEnumAsOptions<T extends object>(
  enumeration: T,
): Array<{ value: keyof typeof enumeration; label: keyof typeof enumeration }> {
  const keys = Object.keys(enumeration) as Array<keyof typeof enumeration>
  const options = keys.map((key) => {
    return { value: key, label: key }
  })
  return options
}

export function enumToOptionsWithLabels<T extends object>(
  enumeration: T,
  labels: string[],
): Array<{ value: string; label: string }> {
  const keys = Object.keys(enumeration) as Array<keyof typeof enumeration>
  const options = keys.map((key, i) => {
    return { value: key as string, label: labels[i] }
  })
  return options
}

export function getEnumAsOptionsForChart<T extends object>(
  enumeration: T,
): Array<{ value: keyof typeof enumeration; label: string }> {
  const keys = Object.keys(enumeration) as Array<keyof typeof enumeration>
  const options = keys.map((key) => {
    return { value: key, label: 'Last ' + (key as string).toLowerCase() }
  })
  return options
}

export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email)
}

export function isValidZipCode(zipCode: string) {
  return /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode)
}

export function deepEqual(object1: any, object2: any) {
  function isObject(object: any) {
    return object != null && typeof object === 'object'
  }

  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    const val1 = object1[key]
    const val2 = object2[key]
    const areObjects = isObject(val1) && isObject(val2)
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false
    }
  }
  return true
}

export function sortStringsAscending(a: any, b: any, key: string) {
  if (a[key] < b[key]) {
    return -1
  }
  if (a[key] > b[key]) {
    return 1
  }
  return 0
}

export function sortStringsDescending(a: any, b: any, key: string) {
  if (a[key] > b[key]) {
    return -1
  }
  if (a[key] < b[key]) {
    return 1
  }
  return 0
}

export function sortAscByKey(arr: any[] | undefined, key: string) {
  return arr?.sort((a, b) => sortStringsAscending(a, b, key)) || []
}

export function findByKey(array: any[], key: string, value: any) {
  if (array) {
    return array?.find((item, index) => item[key] === value)
  } else {
    return undefined
  }
}

export function findById(array: any[], itemId: any) {
  if (array) {
    return array?.find((item, index) => item.id === itemId)
  } else {
    return undefined
  }
}

export const getValue = (obj: any, accessor: any, value?: any): any => {
  if (!obj) return ''
  if (typeof accessor === 'string')
    return getValue(obj, accessor.split('.'), value)
  else if (accessor.length === 1 && value !== undefined)
    return (obj[accessor[0]] = value)
  else if (accessor.length === 0) return obj
  else return getValue(obj[accessor[0]], accessor.slice(1), value)
}

export const generateGuid = (): string => {
  const s4 = () => {
    const rand = Math.floor((1 + Math.random()) * 0x10000)
    return rand.toString(16).substring(1)
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  )
}

export const downloadCsv = (csv: any, fileName: string) => {
  const hiddenElement = document.createElement('a')
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
  hiddenElement.target = '_blank'
  hiddenElement.download = fileName.replace(/"/g, '')
  hiddenElement.click()
  hiddenElement.remove()
}

export const downloadZip = (data: any, filename: string) => {
  const blob = new Blob([data], { type: 'application/zip' })
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style.display = 'none'
  const url = window.URL.createObjectURL(blob)
  a.href = url
  a.download = filename.replace(/"/g, '')
  a.click()
  window.URL.revokeObjectURL(url)
  a.remove()
}

export const downloadFile = (
  data: any,
  filename: string,
  contentType: string,
) => {
  const blob = new Blob([data], { type: contentType })

  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style.display = 'none'
  const url = window.URL.createObjectURL(blob)
  a.href = url
  a.download = filename.replace(/"/g, '')
  a.click()

  window.URL.revokeObjectURL(url)
  a.remove()
}

// import { saveAs } from 'file-saver'
export const downloadPdf = (data: any, filename: string) => {
  const blob = new Blob([data], { type: 'application/pdf' })

  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style.display = 'none'
  const url = window.URL.createObjectURL(blob)
  a.href = url
  a.download = filename.replace(/"/g, '')
  a.click()
  window.URL.revokeObjectURL(url)
  a.remove()
}

export const range = (start: number, end: number) => {
  return Array.from({ length: end - start }, (v, k) => k + start)
}

export const selectAll = (state: any, arrayKey: any, selected: boolean) => {
  return {
    ...state,
    [arrayKey]: state[arrayKey]?.map((item: any) => ({
      ...item,
      selected,
    })),
  }
}

export const selectArrAll = (array: any[], selected: boolean) => {
  return array.map((item: any) => {
    return {
      ...item,
      selected,
    }
  })
}

//? only use if the list of items has .id
export const selectItem = (state: any, arrayKey: any, selectedItem: any) => {
  return {
    ...state,
    [arrayKey]: state[arrayKey].map((item: any) => ({
      ...item,
      selected:
        item.id === selectedItem.id ? selectedItem.selected : item.selected,
    })),
  }
}

//? only use if the list of items has .id
export const selectItemById = (array: any, selectedItemId: string) => {
  const rez = array.map((item: any) => {
    if (item.id === selectedItemId) {
      return {
        ...item,
        selected: item.selected ? !item.selected : true,
      }
    } else {
      return item
    }
  })

  return rez
}

export function isEmailString(email: string): boolean {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(email)
}

export async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    //! TODO this is deprecated and needs to be updated
    //? https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
    //? https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event
    return document.execCommand('copy', true, text)
  }
}

export function formatToUSD(data: string | number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const formattedString = formatter.format((data as number) / 100)
  return formattedString
}

export function formatUSD(data: string | number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const formattedString = formatter.format(data as number)
  return formattedString
}
export function formatNumber(data: string | number) {
  const formattedString = (data as number).toLocaleString(
    undefined, // leave undefined to use the visitor's browser
    // locale or a string like 'en-US' to override it.
    { minimumFractionDigits: 2 },
  )
  return formattedString
}

export function getLabelBreadcrumbString(location: any): string {
  if (location.pathname.split('/')[3] === 'block') {
    return 'Block'
  } else if (location.pathname.split('/')[3] === 'transaction') {
    return 'Transaction'
  } else if (location.pathname.split('/')[3] === 'account') {
    return 'Account'
  }
  return ''
}
