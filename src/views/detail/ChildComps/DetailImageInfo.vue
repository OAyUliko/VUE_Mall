<template>
  <div class="detailimageinfo">
    <div class="desc">
      <em class="em1"></em>
      <em class="em2"></em>
      <div>{{cdetails.desc}}</div>
    </div>
    <div class="image" v-for="(item,index) in cdetails.detailImage" :key="index" >
      <p>{{item.key}}</p>
      <div class="showimg">
        <img :src="item.list[index]" v-for="index in item.list.length-1 " :key="index" @load="detailimgload">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'DetailImageInfo',
    props: {
      cdetails: {
        type: Object,
        default () {
          return []
        }

      }
    },
    methods:{
      detailimgload(){
        this.$emit('detailimgload');
      }
    }

  }
</script>

<style scoped>
  .detailimageinfo {

    border-bottom: 6px solid #ececec;
  }

  .detailimageinfo .desc {
    margin: 15px 0 15px;
    position: relative;
  }

  .desc div {
    padding: 10px 20px 10px;
    color: #666666;
    font-size: 15px;
  }

  .em1 {
    position: absolute;
    top: 0;
    left: 10px;
    display: inline-block;
    width: 140px;
    border-top: 1px solid #444444;
  }

  .em2 {
    position: absolute;
    bottom: 0;
    right: 10px;
    display: inline-block;
    width: 140px;
    border-top: 1px solid #444444;
  }
  .image {
    padding: 0 10px 10px;
  }
  .image p{
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    color: palevioletred;
    margin-bottom: 10px;
  }
  .image img {
    width: 100%;
  }
</style>
