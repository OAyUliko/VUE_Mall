<template>
  <div class="detailinfo">

      <div class="title">{{cgoods.title}}</div>
      <div class="price">
        <span class="nowprice">￥{{cgoods.newPrice}}</span>
        <span class="oldprice">{{cgoods.oldPrice}}</span>
        <em :style="{backgroundColor: cgoods.discountBgColor}">{{cgoods.discount}}</em>
      </div>
      <div class="other">
        <span>{{cgoods.columns[0]}}</span>
        <span>{{cgoods.columns[1]}}</span>
        <span>{{cgoods.services[0].name}}</span>
      </div>
      <div class="service">
        <span class="serviceitem" v-for="index in cgoods.services.length-1" :key="index">
          <img v-if="index<5" :src="cgoods.services[index].icon">
          <span v-if="index<5">{{cgoods.services[index].name}}</span>
        </span>
      </div>
 
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props: {
      cgoods: {
        type: Object,
        default () {
          return []
        }
      }
    },

  }
</script>

<style scoped>
  .detailinfo {
    height: 160px;
    border-bottom: 6px solid #ececec;
  }

  .detailinfo .title {
    padding: 10px 5px 10px;
    line-height: 20px;
  }

  .detailinfo .nowprice {
    font-size: 22px;
    color: palevioletred;
  }

  .detailinfo .oldprice {
    font-size: 15px;
    color: #666666;
    margin-left: 7px;
    text-decoration: line-through;
  }

  .price {
    position: relative;
  }

  .detailinfo em {
    position: absolute;
    top: -2px;
    left: 160px;
    padding: 2px 5px;
    background-color: palevioletred;
    color: white;
    font-size: 12px;
    font-style: normal;
    border-radius: 8px;
  }

  .other {
    margin: 15px 5px 0;
    height: 20px;
    color: #a2a2a2;
    font-size: 12px;
    display: flex;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
  }

  .service img {
    height: 14px;
    width: 14px;
    vertical-align: middle;

  }

  .service {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    height: 20px;
  }

  .service .serviceitem {
    width: 35px;
    flex: 1;
    font-size: 11px;
    color: #a2a2a2;
    text-align: center;
    line-height: 20px;
  }

  .service .serviceitem span {}
</style>
