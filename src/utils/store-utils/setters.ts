// import { TableFilter, TableResponse } from '@/api/api.types'
// import { TimeUnit } from '@/common/rapi/enums/TimeUnit.enum'
// import { ReactInputEvent } from '@/components/form/search/search'
// import { DEFAULT_FILTER, GetType, SetType } from './store-utils'
import { debounce } from 'lodash'

/** Default loadData fallback */
// export function tableErrorHandler<M>(set: SetType, response: TableResponse<M>) {
//   set({
//     tableData: {
//       data: [],
//       numberOfItems: 0,
//       error: response,
//     },
//     isTableLoading: false,
//   })
// }

// /** Sets the TimeRange in a table store */
// export function setTableStoreTimeRange<F>(
//   set: SetType,
//   timeRange: TimeUnit,
//   filter: TableFilter<F>,
// ) {
//   const old_opts = filter?.options || {}

//   const options = {
//     ...old_opts,
//     timeRange,
//     range: undefined,
//   }

//   const tableFilter = {
//     ...filter,
//     options,
//   }

//   set({ tableFilter })
// }

// /** Sets the dateRange in a table store */
// export function setTableStoreDateRange<F>(
//   set: SetType,
//   start_date: string,
//   end_date: string,
//   tableFilter: TableFilter<F>,
// ) {
//   const range = {
//     start: start_date,
//     end: end_date,
//   }

//   const filter_options = {
//     ...tableFilter?.options,
//     range,
//     timeRange: undefined,
//   }

//   set({
//     tableFilter: {
//       ...tableFilter,
//       options: filter_options,
//     },
//   })
// }

// /** Sets the search string in a table store from an input onChange event */
// export function onTableStoreSearchStringChange<F>(
//   event: ReactInputEvent,
//   set: SetType,
//   get: GetType,
// ) {
//   const searchString = event.target.value
//   const store_filter = get().tableFilter
//   const storeFilter = store_filter.options
//   const tableFilter: TableFilter<F> = {
//     page: DEFAULT_FILTER.page,
//     options: { ...storeFilter, searchString },
//   }
//   set({ tableFilter })
// }
