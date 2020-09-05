<template>
  <div class="goodslistitem" @click="gotodetail">
    <a>
      <img :src='goodsitemimg' @load="imgload">
      <div class="declear">
        <p>{{goodsitem.title}}</p>
        <span class='price'>￥{{goodsitemprice}}</span>
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
    },
    computed:{
      goodsitemimg(){
        return this.goodsitem.image || this.goodsitem.show.img
      },
      goodsitemprice(){
        return this.goodsitem.discountPrice || this.goodsitem.orgPrice
      },
    },
    methods:{
      imgload(){
        this.$bus.$emit('imgload')
      },
      gotodetail(){
        this.$router.push('/detail/'+this.goodsitem.iid);
      }
    }

  }
</script>

<style scoped>
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
