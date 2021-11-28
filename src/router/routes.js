import Login from "src/pages/login/Login.vue"
import Home from "src/pages/home/Home.vue"
import NewCampaign from "src/pages/campaigns/NewCampaign.vue"
import Campaign from "src/pages/campaigns/Campaign.vue"
import NewContent from "src/pages/content/NewContent.vue"

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: "login", component: Login },
    { path: '/inicio', name: "home", component: Home },
    { path: '/camp/nueva', name: "new-campaign", component: NewCampaign },
    { path: '/camp/:id', name: "campaign", component: Campaign, props: true },
    { path: '/camp/:campaignId/content/:id', name: "new-content", component: NewContent, props: true },
]

export default routes