import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('campaigns', {
    state: () => {
        return {
            campaigns: [
                {
                    id: 1,
                    name: 'Campaña 1',
                },
                {
                    id: 2,
                    name: 'Campaña 2',
                },
            ],
        }
    },
})
