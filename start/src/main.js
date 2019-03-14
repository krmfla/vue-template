import Vue from 'vue'
import VueRouter from 'vue-router'

// init
Vue.use(VueRouter);

Vue.config.productionTip = false // TODO: ?

// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/C2F.vue';
import App from './App.vue'

const router = new VueRouter({
  mode: 'history', // TODO: ?
  routes: [
    {
      path: '/hello',
      name: 'hello', // TODO: ?
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    {
      path: '/*',
      redirect: '/hello', // 轉址
    },
  ]
});

new Vue({
  router, // TODO: ?
  render: h => h(App),
}).$mount('#app')