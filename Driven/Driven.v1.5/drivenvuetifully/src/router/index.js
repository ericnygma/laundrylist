// Composables
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/Homebase',
        name: 'Homebase',
        component: () => import('@/views/Homebase.vue'),
      },
      {
        path: '/toAirport',
        name: 'ToAirportTrip',
        component: () => import('@/views/ToAirportTrip.vue'),
      },
      {
        path: '/fromAirport',
        name: 'FromAirportTrip',
        component: () => import('@/views/FromAirportTrip.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
      },
      {
        path: '/hourly',
        name: 'BytheHour',
        component: () => import('@/views/BytheHour.vue'),
        // this is a test path to see if the router and code works
      },
     ],
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
