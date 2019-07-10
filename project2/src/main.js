import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js';

// init
Vue.use(VueRouter);

// 讓 vue 在正式環境下，不會顯示開發提示
Vue.config.productionTip = false;

// pages
import Hello from './pages/Hello.vue';
import CtoF from './pages/C2F.vue';
import Assemble from './pages/Assemble.vue';
import Slot from './pages/Slot.vue';
import Count from './pages/Count.vue'
import App from './App.vue'

// components
import DynamicContent1 from './components/DynamicContent1.vue';
import DynamicContent2 from './components/DynamicContent2.vue';
import Addon from './components/Addon.vue';

const router = new VueRouter({
  // vue-router HTML5 History 模式
  // https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'hello',
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
      },
      children: [
        {
          path: '123',
          component: DynamicContent1
        },
        {
          path: '456',
          components: {
            default: DynamicContent2,
            Addon: Addon
          }
        }
      ]
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
      path: '/slot',
      name: 'slot',
      component: Slot,
      meta: {
        title: "Using Slot"
      }
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    },
    {
      path: '/*',
      redirect: '/hello', // 當 path 無匹配時, 轉址到預設位置
    },
  ]
});

// beforeEach afterEach?
// 完整的導航解析流程
// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'default title';
  });
});

new Vue({
  router, // 通過 router 配置参數注入路由
  store, // vuex
  render: h => h(App),
}).$mount('#app');