//* --- State ----------------------------------------------- *//
interface GlobalState {
  selectedComponetn: Component | null | undefined
  openEdit: true | false
}

//* --- Store ----------------------------------------------- *//
export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    selectedComponetn: null,
    openEdit: false,
  }),
})
