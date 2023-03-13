import { TableFilter } from '@/api/api.types'
import { TimeUnit } from '@/common/rapi/enums/TimeUnit.enum'
import { ReactInputEvent } from '@/components/form/search/search'
import { TableStore } from '@/components/widgets/table/table'
import { API_Call_type, debounced, loadData } from './function-types'
import {
  onTableStoreSearchStringChange,
  setTableStoreDateRange,
  setTableStoreTimeRange,
  tableErrorHandler,
} from './setters'

export type SetType = (state: any) => void
export type GetType = () => any

export const DEFAULT_FILTER = {
  page: {
    pageNumber: 0,
    pageSize: 10,
  },
}

export type ErrorResponse = {
  status: number
  data: any
}

export type DetailsStore<M> = {
  detailsData?: M
  errorData?: any
  clearError: () => void
  areDetailsLoading: boolean
  getDetailsApiCall: (uniqueIdentifier: any, secondIdentifier?: any) => any
}

type Details_API_Call<M> = (uniqueIdentifier: string) => Promise<M>

/** ### createDetailsStore_OBJ
 * This function returns an object
 * ready to be consumed by a Details wrapper component */
export function createDetailsStore_OBJ<M>(
  apiCall: Details_API_Call<M>,
  set: SetType,
  get: GetType,
): DetailsStore<M> {
  return {
    detailsData: undefined,
    areDetailsLoading: true,
    getDetailsApiCall: debounced(async (uniqueIdentifier: string) => {
      set({ areDetailsLoading: true })
      apiCall(uniqueIdentifier)
        .then((response: M) => {
          set({ detailsData: response })
          set({ areDetailsLoading: false })
        })
        .catch((err) => {
          set({ errorData: err })
          set({ areDetailsLoading: false })
        })
    }),
    clearError: () => {
      set({ errorData: undefined })
    },
  }
}

/** ### createTableStore_OBJ
 *  This is a function that returns an object
 * that should be consumed by a Table component
 * -  it will automatically fetch data on first render
 * -  it will automatically fetch data when the uniqueIdentifier parameter changes
 * -  it will automatically fetch data when the filter parameter changes [TableFilter<F>] */
export function createTableStore_OBJ<M, F>(
  apiCall: API_Call_type<M, F>,
  set: SetType,
  get: GetType,
): TableStore<M, F> {
  return {
    isTableLoading: false,
    tableFilter: DEFAULT_FILTER,
    setFilter: (tableFilter: TableFilter<F>) => {
      set({ tableFilter })
    },
    numberOfFilters: 0,
    setNumberOfFilters: (numberOfFilters: number) => {
      set({ numberOfFilters })
    },
    loadTableData: debounced(async (tableFilter: TableFilter<F>) => {
      set({ isTableLoading: true })
      loadData(apiCall, tableFilter)
        .then((response) => {
          set({ tableData: response, isTableLoading: false })
          set({ isTableLoading: false })
        })
        .catch((err) => {
          tableErrorHandler(set, err)
          set({ isTableLoading: false })
        })
    }),
  }
}

export type TimeRangeFilter = {
  setTimeRange: (timeRange: TimeUnit) => void
  setDateRange: (start: string, end: string) => void
}

//prettier-ignore
// export function withTimerRangeFilter<M, F>(tableStore: TableStore<M, F> & TextSearchFilter, set: SetType, get: GetType ): TableStore<M, F> & TimeRangeFilter & TextSearchFilter
//prettier-ignore
export function withTimerRangeFilter<M, F>(tableStore: TableStore<M, F>, set: SetType, get: GetType ): TableStore<M, F> & TimeRangeFilter {
  return {
    ...tableStore,
    setTimeRange: (timeRange: TimeUnit) => {
      console.log("here")

      setTableStoreTimeRange(set, timeRange, get().tableFilter)
    },
    setDateRange: (start: string, end: string) => {
      setTableStoreDateRange(set, start, end, get().tableFilter)
    },
  }
}

export type TextSearchFilter = {
  onSearchStringChange: (event: ReactInputEvent) => void
}

//TODO research this better there must be a way of doing this
//prettier-ignore
// export function withSearchFilter<M, F>(tableStore: TableStore<M, F>  & TimeRangeFilter, set: SetType, get: GetType ): TableStore<M, F> & TimeRangeFilter  & TextSearchFilter
//prettier-ignore
export function withSearchFilter<M, F>(tableStore: TableStore<M, F> , set: SetType, get: GetType ): TableStore<M, F> & TextSearchFilter {
  return {
    ...tableStore,
    onSearchStringChange: (event: ReactInputEvent) => {
      onTableStoreSearchStringChange(event, set, get)
    },
  }
}
