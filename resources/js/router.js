import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

const routes = [

    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('./components/pages/Login.vue'),
        meta: { visitor: true }
    },

    {
        path: '/logout',
        name: 'Logout',
        component: () =>
            import ('./components/pages/Logout.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        //redirect: '/',
        name: 'PageNotFound',
        component: () =>
            import ('./components/common/PageNotFound.vue')
    },

    {
        // path: '/',
        redirect: '/admin-dashboard',
        name: 'Home',
        component: () =>
            import ('./Layouts/AppLayout.vue'),
        meta: { adminRequiresAuth: true },

        children: [{
                path: '/admin-dashboard',
                name: 'AdminDashboard',
                component: () =>
                    import ('./components/pages/admin/AdminDashboard.vue'),
            },

        ]
    },



]

const allRouterPath = createRouter({
    history: createWebHistory(),
    routes,
});

allRouterPath.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.loggedIn) {
            next({
                name: "Login"
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.visitor)) {
        // this route requires auth, check if logged in
        // if logged in, redirect to Home page.
        if (store.getters.loggedIn) {
            next({
                name: "Home"
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default allRouterPath