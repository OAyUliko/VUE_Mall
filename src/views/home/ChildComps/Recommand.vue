<template>
  <div class="recommand">
    <div v-for="item in crecommend" class="item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommand',
    props:['crecommend']
  }
</script>

<style>
  .recommand {

    display: flex;
    text-align: center;
    border-bottom: 8px solid #ececec;
    padding: 10px 0;
  }
  .item {
    flex:1;
    font-size: 13px;
  }
  .item img {
    height: 75px;
    width: 75px;
    margin-bottom: 5px;
  }
</style>
