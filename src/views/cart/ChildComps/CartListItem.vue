<template>
  <div class="cartlistitem">
    <CheckButton class='checkbutton' :ischecked='caritem.checked'  @click.native="buttonclick"></CheckButton>
    <div class="left">
      <img :src='caritem.pic'>
    </div>
    <div class="declear">
      <p  class='name'>{{caritem.name}}</p>
      <p class='desc'>{{caritem.desc}}</p>
      <p>
        <span  class='price' >￥{{caritem.price}}</span>
        <span  class='count'>×{{caritem.count}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton.vue'
  export default {
    name: 'CartListItem',
    props: {
      caritem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    components: {
      CheckButton,
    },
    methods:{
      buttonclick(){
        this.caritem.checked=!this.caritem.checked
      }
    }


  }
</script>

<style scoped>
  .cartlistitem {
    padding: 10px;
    height: 142px;
    border-bottom: 1px solid #ccc;
  }
  .checkbutton {
    float: left;
    position: relative;
    top: 50%;
    margin-top: -13px;


    vertical-align: center;
  }
  .left {
    width: 20%;
  }
  .declear {
    float: left;
    width: 73%;
  }

  .cartlistitem img {
    width: 90%;
    height: 142px;
    border-radius: 8px;
  }

  .declear .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 17px;
  }

  .declear .desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    margin-top: 20px;
    color: #666666;
  }

  .price {
    float: left;
    font-weight: bold;
    color: palevioletred;
    margin-top: 65px;
    font-size: 19px;
  }

  .count {
    float: right;
    margin-top: 67px;
    font-size: 17px;
  }
</style>
