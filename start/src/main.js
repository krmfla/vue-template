import Vue from 'vue'
import VueRouter from 'vue-router'

// init
Vue.use(VueRouter);

Vue.config.productionTip = false // TODO: ?

// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/C2F.vue';
import Assemble from './pages/Assemble.vue';
import App from './App.vue'

const router = new VueRouter({
  mode: 'history', // TODO: ?
  routes: [
    {
      path: '/hello',
      name: 'hello', // TODO: ?
      component: Hello,
      meta: {
        title: "HELLO"
      }
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF,
      meta: {
        title: "C TO F"
      }
    },
    {
      path: '/assemble',
      name: 'assemble',
      component: Assemble,
      meta: {
        title: "Assemble"
      }
    },
    {
      path: '/*',
      redirect: '/hello', // 轉址
    },
  ]
});

// TODO: beforeEach afterEach?

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'default title';
  });
});

new Vue({
  router, // TODO: ?
  render: h => h(App),
}).$mount('#app')