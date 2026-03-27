import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    token: ''
  }),
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    setUserInfo(info) {
      this.userInfo = info
    },
    setToken(token) {
      this.token = token
    },
    logout() {
      this.userInfo = null
      this.token = ''
    }
  }
})