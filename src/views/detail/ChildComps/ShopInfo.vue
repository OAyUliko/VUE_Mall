<template>
  <div class="shopinfo">
    <div class="name">
      <img :src="cshops.shopLogo">
      <span>{{cshops.name}}</span>
    </div>
    <div class="detail">
      <div class="left">
        <div class="sellnum">
          <p>{{cshops.cSells | sellnumFilter}}</p>
          <p class='text'>总销量</p>
        </div>
        <div class="goodsnum">
          <p>{{cshops.cGoods}}</p>
          <p class='text'>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div class="remark" v-for="index in cshops.score.length" :key="index">
          <span> {{cshops.score[index-1].name}}</span>
          <span class="score" :class="{'better-score':cshops.score[index-1].isBetter}"> {{cshops.score[index-1].score.toFixed(2)}}</span>
          <span class="better" :class="{'better-better':cshops.score[index-1].isBetter}"> {{cshops.score[index-1].isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shopurl">
      <a :href='cshops.shopUrl'><span>进入店铺</span></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopInfo',
    props: {
      cshops: {
        type: Object,
        default () {
          return []
        }
      }
    },

    /* 过滤器也是一个函数 */
    filters:{
      sellnumFilter(value){
        let result=value;
        if(value>10000)
          result=(value/10000).toFixed(2)+'万';
        return result;
      }
    }


  }
</script>

<style scoped>
  .shopinfo {
    border-bottom: 6px solid #ececec;
  }
  .shopinfo .name {
    height: 50px;
    margin: 13px 0px 4px 30px;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #CCCCCC;
  }

  .name span {
    font-size: 17px;
    color: #666666;
    margin-left: 10px;
  }

  .detail .left {
    width: calc(50% - 15px );
    display: flex;
    border-right: 1px solid #a2a2a2;
    margin: 20px 0 20px 15px;
  }
  .detail .right {
    width: calc(50% - 28px );
    margin: 13px 0 20px 27px;
  }
  .sellnum , .goodsnum {
      float: left;
      flex: 1;
      height: 50px;
      line-height: 20px;
      text-align: center;
  }
  .sellnum p, .goodsnum p {
     font-size: 18px;
  }
  .sellnum .text, .goodsnum .text {
    margin-top: 8px;
    font-size: 15px;
  }
  .detail .right, .detail .left {
    float: left;
  }
  .right .remark {
    font-size: 15px;

  }
  .score {
    color: #444444;
    font-weight: bold;
    padding-left: 10px;
  }
  .better-score {
    color: palevioletred;
  }
  .remark span {
  line-height: 19px;
  }
  .better {
    display: inline-block;
    height: 17px;
    width: 17px;
    background-color: #ccc;
    font-size: 14px;
    text-align: center;
    color: #444444;
    margin-left: 20px;
  }
  .better-better {
    background-color: palevioletred;
    color: white;
}
.shopurl{
    padding-bottom: 10px;
}

  .shopurl a{
    position: relative;
    display: inline-block;
    height: 25px;
    width: 100px;
    background-color: lightpink;
    line-height: 25px;
    text-align: center;
    color: white;
    border-radius: 8px;
    left: 50%;
    margin-left: -50px;




  }
</style>
