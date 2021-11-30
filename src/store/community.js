import { defineStore } from 'pinia'


// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('campaigns', {
    state: () => {
        return {
            contents: [
                {
                    id: 1,
                    name: 'pizza 1',
                    app: 'instagram',
                    text: 'Nueva promocion!',
                    type: 'ad',
                    file: '/pìza1.jpg',
                },
                {
                    id: 2,
                    name: 'pizza 2',
                    app: 'instagram',
                    text: 'Nueva promocion!',
                    type: 'ad',
                    file: '/pìza2.jpg',
                },
            ]
        }
    },
    getters: {
        getContentById: (state) => {
            return (id) => state.contents.find(content => content.id == id)
        }
    },
})
