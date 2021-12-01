import { defineStore } from 'pinia'

const contentNextId = 1
const messageNextId = 2
export const useStore = defineStore('community', {
    state: () => {
        return {
            content: [
                {
                    id: 1,
                    title: 'pizza americana',
                    app: 'instagram',
                    text: 'Nueva promocion!',
                    type: 'ad',
                    file: '/pizza1.jpg',
                    messages: [{
                        id: 1,
                        text: 'Esta disponible todos los dias?',
                        name: 'Jack',
                    }],
                },
                {
                    id: 2,
                    title: 'pizza pepperonni',
                    app: 'instagram',
                    text: 'Nueva promocion!',
                    type: 'ad',
                    file: '/pizza2.jpg',
                    messages: [],
                },
            ]
        }
    },
    getters: {
        getContentById: (state) => {
            return (id) => state.content.find(content => content.id == id)
        }
    },
    actions: {
        addCampaign({ name, launchDate }) {
            const newCampaing = {
                id: campaignNextId,
                name,
                launchDate
            }
            this.campaigns.push(newCampaing)
            campaignNextId++
            return newCampaing
        },
    }
})

