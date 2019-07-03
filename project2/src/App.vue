<template>
  <!-- 必須要被一個 DOM 物件包起來 -->
  <div>
    <!-- 用 name 與 path 的差別? -->
    <!-- 命名路由: https://router.vuejs.org/zh/guide/essentials/named-routes.html -->
    <router-link :to="{path: '/hello'}" class="nav">Hello</router-link>
    <router-link :to="{path: '/c2f/123' }" class="nav">CtoF1</router-link>
    <router-link :to="{path: '/c2f/456' }" class="nav">CtoF2</router-link>
    <!-- using router name -->
    <router-link :to="{name: 'assemble'}" class="nav">Assemble</router-link>
    <router-link :to="{path: '/slot'}" class="nav">Slot</router-link>

    <router-view></router-view>
  </div>
</template>

<!-- 當 script 無內容時，會 render 失敗 -->
<!-- <script></script> -->

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  padding: 5px;
}
</style>