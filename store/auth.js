import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      token: '',
      id: '',
      username: '',
      lastName: '',
      email: '',
      amount: '',
      alias: '',
      userProfile: null,
      setToken: (token) => { set((state) => ({ token })) },
      setId: (id) => { set((state) => ({ id })) },
      setUsername: (username) => { set((state) => ({ username })) },
      setLastName: (lastName) => { set((state) => ({ lastName })) },
      setEmail: (email) => { set((state) => ({ email })) },
      setAmount: (amount) => { set((state) => ({ amount })) },
      setAlias: (alias) => { set((state) => ({ alias })) },
      setLogout: () => { set((state) => ({ userProfile: null, token: '', id: '', username: '', password: '', amount: '', alias: '' })) },
      setUserProfile: (userProfile) => { set((state) => ({ userProfile })) }
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
