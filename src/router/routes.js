import Login from "src/pages/login/Login.vue"
import Proyects from "src/pages/proyects/Proyects.vue"

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: "login", component: Login },
    { path: '/proyectos', name: "proyects", component: Proyects },
]

export default routes