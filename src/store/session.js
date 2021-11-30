import { defineStore } from 'pinia'

export const useStore = defineStore('session', {
    state: () => {
        return {
            user: null,
        }
    },
    actions: {
        setUser(user) {
            this.user = user
        }
    }
})
