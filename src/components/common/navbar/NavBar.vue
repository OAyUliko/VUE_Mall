<template>
  <div class='navbar'>
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name='middle'></slot>
    </div>
    <div class="right">
      <slot name='right'></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name:'NavBar'
  }
</script>

<style>
  .navbar {
    display: flex;
    height: 44px;
    background-color: pink;
    box-shadow: 0px 2px 11px 1px #ccc;
  }
  .left , .right {
    width: 15%;
  }

  .middle {
    flex: 1;
    line-height: 44px;
    font-size: 19px;
    text-align: center;

  }
</style>
