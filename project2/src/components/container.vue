<template>
  <div class="container">
    <div class="section" v-for="(item, index) in list" v-bind:key="'section' + index">
      <h2>{{ item.title }}</h2>
      <p>{{ item.info }}</p>
      <p>
        <a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
};
</script>

<style>
.section {
  width: 30%;
  display: inline-block;
  margin-top: 1%;
  margin-right: 1%;
  background-color: #eee;
  padding: 1%;
  box-sizing: border-box;
}
</style>
