import { defineStore } from 'pinia'

export const useStore = defineStore('campaigns', {
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
