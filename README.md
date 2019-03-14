# Vue Template

vue-cli + vue-router

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

<br />

vetur

file structure(image)

## Router

```sh
$ npm install vue-router --save-dev
```

main.js

```js

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
  ...
</style>
```

<br />

## Meta

```javascript
router.afterEach((to) => {
  Vue.nextTick( () => {
    document.title = to.meta.title ? to.meta.title : 'default title';
  });
});
```

SEO
prerender
nuxt.js
