import { defineStore } from 'pinia'

let campaignNextId = 2
let contentNextId = 1

const truncateString = (string = '', maxLength = 50) =>
    string.length > maxLength
        ? `${string.substring(0, maxLength)}…`
        : string

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('campaigns', {
    state: () => {
        return {
            campaigns: [
                {
                    id: 1,
                    name: 'Campaña sin contenido',
                    launchDate: new Date(),
                    content: []
                },
            ],
        }
    },
    getters: {
        getCampaignById: (state) => {
            return (id) => state.campaigns.find(campaign => campaign.id == id)
        },
        getContentById: (state) => {
            return (campaignId, id) => {
                const campaign = state.campaigns.find(campaign => campaign.id == campaignId)
                return campaign.content.find(content => content.id == id)
            }
        }
    },
    actions: {
        addCampaign({ name, launchDate }) {
            const newCampaing = {
                id: campaignNextId,
                name,
                launchDate,
                content: []
            }
            this.campaigns.push(newCampaing)
            campaignNextId++
            return newCampaing
        },
        addContent(campaignId, { app, type, text, file, title }) {

            const newContent = {
                id: contentNextId,
                app,
                type,
                text,
                file,
                title,
                published: false
            }
            const campaign = this.getCampaignById(campaignId)
            campaign.content.push(newContent)
            contentNextId++
            return newContent
        },
        cutContent(campaignId, contentId) {
            const content = this.getContentById(campaignId, contentId)
            if (content) {
                if (content.type === "pic") {
                    content.text = truncateString(content.text, 149)
                }
                if (content.type === "ad") {
                    content.text = truncateString(content.text, 124)
                }
            }
        }
    }
})
