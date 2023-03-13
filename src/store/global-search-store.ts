import create from 'zustand'
import { debounce } from 'lodash'
import { getGlobalSearchApi } from '@/api/endpoints/rapi/explorer.api'
import { GlobalSearchRequest } from '@/common/rapi/models/GlobalSearchRequest.model'
import { GlobalSearchResponse } from '@/common/rapi/models/GlobalSearchResponse.model'

const initialFilterValues: GlobalSearchRequest = {
  searchString: '',
}

export type GlobalSearchStore = {
  data: GlobalSearchResponse
  filter: GlobalSearchRequest
  isDataLoading: boolean
  hoveringDropdown: boolean
  menuIsOpen: boolean
  setMenuIsOpen: (menuIsOpen: boolean) => void

  setHoveringDropdown: (hoveringDropdown: boolean) => void

  clearData: () => void
  setSearchString: (searchString: string) => void
  loadData: (filter: GlobalSearchRequest) => void
}

export const useGlobalSearchStore = create<GlobalSearchStore>()((set, get) => ({
  isDataLoading: true,
  data: { accounts: [], blocks: [], transactions: [], nfts: [] },
  filter: initialFilterValues,
  hoveringDropdown: false,
  menuIsOpen: false,
  setMenuIsOpen: (menuIsOpen: boolean) => {
    set({ menuIsOpen })
  },
  setHoveringDropdown: (hoveringDropdown: boolean) => {
    set({ hoveringDropdown })
  },
  clearData: () => {
    set({ filter: initialFilterValues })
  },

  setSearchString: (searchString: string) => {
    set({ filter: { searchString } })
  },

  loadData: debounce(
    async (filter: GlobalSearchRequest) => {
      set({
        isDataLoading: true,
        data: { accounts: [], blocks: [], transactions: [], nfts: [] },
      })
      const data: GlobalSearchResponse = await getGlobalSearchApi(filter)
      set({
        data: data,
      })
      set({ isDataLoading: false })
    },
    500,
    { leading: false },
  ),
}))
