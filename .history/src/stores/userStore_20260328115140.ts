import { defineStore } from 'pinia'

interface UserInfo {
  id?: string
  name?: string
  avatar?: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as UserInfo | null,
    token: ''
  }),
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info
    },
    setToken(token: string) {
      this.token = token
    },
    logout() {
      this.userInfo = null
      this.token = ''
    }
  }
})