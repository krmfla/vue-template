<template>
  <!-- 必須要被一個 DOM 物件包起來 -->
  <div>
    <!-- 用 name 與 path 的差別? -->
    <!-- 命名路由: https://router.vuejs.org/zh/guide/essentials/named-routes.html -->
    <router-link :to="{path: '/hello'}" class="nav">Hello</router-link>
    <router-link :to="{name: 'c2f', params: { userId: 123 }}" class="nav">CtoF</router-link>
    <router-link :to="{path: '/assemble'}" class="nav">Assemble</router-link>

    <router-view></router-view>
  </div>
</template>

<script></script>

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