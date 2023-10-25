import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useOperationsStore = create(

  persist(
    (set) => ({
      operations: [],
      notifications: [],
      setOperations: (operation) => { set((state) => ({ operations: [...state.operations, operation] })) },
      setNotifications: (notification) => { set((state) => ({ notifications: [...state.notifications, notification] })) },
      removeNotifications: () => { set((state) => ({ notifications: [] })) }
    }),
    {
      name: 'operations'
    }
  )

)
