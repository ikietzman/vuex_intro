import VueRouter from 'vue-router';

import One from './components/One.vue';
import Two from './components/Two.vue';
import Three from './components/Three.vue';
import Ay from './components/A.vue';
import Bee from './components/B.vue';
import Employee from './components/Employee.vue'
import Employees from './components/Employees.vue'

const routes = [
  { path: '/one', component: One },
  { path: '/two', component: Two, children: [
    { path: '/a', component: Ay },
    { path: '/b', component: Bee }
  ] },
  { path: '/three', component: Three },
  { path: '/employees', component: Employees },
  { path: '/employee/:id', component: Employee }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router;
