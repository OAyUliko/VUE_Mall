<template>
  <div class="rate">
    <div class="top">
      <span class="left">用户评价</span>
      <a href=""><span class="right">更多({{crates.cRate}})</span></a>
    </div>
    <div class="remark">
      <div class="title">
        <img :src="crates.list[0].user.avatar">
        <span>{{crates.list[0].user.uname}}</span>
      </div>
      <div class="content">
        {{crates.list[0].content}}
      </div>
      <div class="detail">
        <span>{{crates.list[0].created | formatDate}}</span>
        <span>{{crates.list[0].style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    formatDate
  } from '@/commom/utils.js'
  export default {
    name: 'Rate',
    props: {
      crates: {
        type: Object,
        default () {
          return []
        }
      }
    },
    filters: {
      formatDate(value) {
        const date = new Date(value * 1000);
        return formatDate(date, 'yyyy-mm-dd');
      }
    }


  }
</script>

<style scoped>
  .rate {
    border-bottom: 6px solid #ececec;
  }
  .rate .top {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 2px solid #ececec;
  }

  .left {
    float: left;
    margin-left: 10px;
  }

  .right {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .title {
    padding: 5px 0 0 10px;
  }

  .title img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #CCCCCC;
  }

  .title span {
    font-size: 16px;
    color: #4d4d4d;
    margin-left: 10px;
  }

  .content {
    padding: 10px;
    color: #666666;
    font-size: 16px;
    line-height: 19px;
    text-align: justify;
    /* 两端对齐 */
  }

  .detail {
    padding: 7px 10px 15px;
    font-size: 16px;
    color: #a2a2a2;

  }
  .detail span {
    margin-right: 10px;
  }
</style>
