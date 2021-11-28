import Login from "src/pages/login/Login.vue"
import Home from "src/pages/home/Home.vue"

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: "login", component: Login },
    { path: '/inicio', name: "home", component: Home },
]

export default routes