<template>
  <div class="content">
    <p>CONTENT 1</p>
    <slot name="right" class="right"></slot>
  </div>
</template>

<style scoped>
div {
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: #666;
  color: white;
}
</style>