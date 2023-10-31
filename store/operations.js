import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useOperationsStore = create(

  persist(
    (set) => ({
      operations: [],
      setOperations: (operation) => { set((state) => ({ operations: [...state.operations, operation] })) }
    }),
    {
      name: 'operations'
    }
  )

)
