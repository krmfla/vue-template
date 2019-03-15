# Vue Template

tools version:

**vue-cli** `3.5.0` + **vue-router** `3.0.2` + **vue** `2.6.6`

<br />

## Install

```sh
#upgrade npm if need
$ npm install -g npm@latest

$ npm install -g vue

$ npm install -g @vue/cli
```

<br />

## Start

```sh
$ vue create PROJECT

$ cd PROJECT

$ npm run serve
```

![structure](./assets/structure.png)

<br />

Vetur: Vue tooling for VS Code

![vetur](./assets/vetur.png)

<br />

## Router

install

```sh
$ npm install vue-router --save-dev
```

main.js

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// pages
import Hello from './pages/Hello.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

Vue.app
```html
<template>
  <div>
    <router-link :to="{path: '/hello'}" class="nav">Hello</router-link>
    <router-view></router-view>
  </div>
</template>
```

<br />

## Build

```sh
$ npm run build
```

<br />

## Style Scope
```html
<style scoped>
  div {
    ...
  }
</style>
```

![scoped](./assets/scoped.png)

<br />

## Meta

```javascript
router.afterEach((to, from) => {
  Vue.nextTick( () => {
    document.title = to.meta.title ? to.meta.title : 'default title';
  });
});
```

<br />

## Component

Assemble.vue
```html
<template>
  <div>
    <vheader></vheader>
  </div>
</template>

<script>
export default {
  components: {
    vheader
  }
}
</script>

<style>
  div {
    ...
  }
</style>
```

<br />

## Slot

content.vue
```html
<template>
  <div>
    <slot name="right" class="right"></slot>
  </div>
</template>
```

Assemble.vue
```html
<template>
  <div>
    <vcontent>
      <div slot="right" class="right">RIGHT</div>
    </vcontent>
  </div>
</template>
```

<br />

## Prerender

SEO

[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

[nuxt.js](https://github.com/nuxt/nuxt.js)
