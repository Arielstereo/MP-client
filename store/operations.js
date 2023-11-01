import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useOperationsStore = create(

  persist(
    (set) => ({
      operations: [],
      setOperations: (operation) => { set((state) => ({ operations: [...state.operations, operation] })) }
    }),
    {
      name: 'operations',
      storage: createJSONStorage(() => sessionStorage)
    }
  )

)
