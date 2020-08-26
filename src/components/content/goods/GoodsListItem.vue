<template>
  <div class="goodslistitem">
    <a :href='goodsitem.link'>
      <img :src='goodsitem.show.img'>
      <div class="declear">
        <p>{{goodsitem.title}}</p>
        <span class='price'>{{goodsitem.orgPrice}}</span>
        <span class='collect'>{{goodsitem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsitem: {
        type: Object,
        default () {
          return {}
        }
      }
    }

  }
</script>

<style>
  .goodslistitem {
    width: 48%;
    height: 350px;
    float: left;
  }

  .goodslistitem img {
    width: 100%;
    height: 82%;
    background-color: #e1e1e1;
    border-radius: 10px;
  }

  .goodslistitem p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    margin-top: 5px;

  }

  .declear {

    height: 50px;

    text-align: center;
  }

  .declear span {
    height: 30px;
    line-height: 30px;
    font-size: 14px;

  }

  .price {
    color: palevioletred;
    margin-right: 15px;
  }

  .collect::before {
    content: '11';
    color: transparent;
    background: url("../../../assets/img/commom/collect.svg") no-repeat 0/14px 14px;
  }
</style>
