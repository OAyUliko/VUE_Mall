<template>
  <div class="backtop">
      <img src="@/assets/img/commom/top.png" class='top'>
  </div>
</template>

<script>
  export default {
    name: 'BackTop'

    }
</script>

<style>
  .top {

    position: fixed;
    bottom: 60px;
    right: 20px;
    height: 40px;
    width: 40px;
    z-index: 4;
  }
</style>
