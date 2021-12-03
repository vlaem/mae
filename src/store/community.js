import { defineStore } from 'pinia'

let contentNextId = 1
let messageNextId = 3
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
        addMessage(contentId, { message, username }) {
            const content = this.getContentById(contentId)
            const newMessage = {
                id: messageNextId++,
                text: message,
                name: username,

            }
            content.messages.push(newMessage)

            messageNextId++
            return newMessage
        },
        publishContent (content) {
            this.content.push({
                ...content,
                id: messageNextId,
            })

            messageNextId++;
        }
    }
})

