//* --- State ----------------------------------------------- *//
interface GlobalState {
  dashboardEdit: boolean
}

//* --- Store ----------------------------------------------- *//
export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    dashboardEdit: false,
  }),
})
