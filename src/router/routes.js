import Login from "src/pages/login/Login.vue"
import Home from "src/pages/home/Home.vue"
import NewCampaign from "src/pages/campaigns/NewCampaign.vue"
import Campaign from "src/pages/campaigns/Campaign.vue"
import NewCampaignContent from "src/pages/campaigns/NewContent.vue"
import CampaignContent from "src/pages/campaigns/Content.vue"
import CampaignContentPreview from "src/pages/campaigns/ContentPreview.vue"
import Content from "src/pages/content/Content.vue"


const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: "login", component: Login },
    { path: '/inicio', name: "home", component: Home },
    { path: '/camp/nueva', name: "new-campaign", component: NewCampaign },
    { path: '/camp/:id', name: "campaign", component: Campaign, props: true },
    { path: '/camp/:campaignId/content/new', name: "campaign-new-content", component: NewCampaignContent, props: true },
    { path: '/camp/:campaignId/content/:id', name: "campaign-content", component: CampaignContent, props: true },
    { path: '/camp/:campaignId/content/:id/preview', name: "campaign-content-preview", component: CampaignContentPreview, props: true },
    { path: '/content/:id', name: "content", component: Content, props: true },
]

export default routes