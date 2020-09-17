<template>
  <div class="cart">
    <NavBar class='navbar'>
      <div slot='middle'>购物车({{CarNum}})</div>
    </NavBar>
    <Sroll class="cartscroll">
      <CartList v-bind:cCarLists='CarList'></CartList>
    </Sroll>
    <BottonBar></BottonBar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import CartList from './ChildComps/CartList.vue'
  import Sroll from '@/components/common/scroll/Scroll.vue'
  import BottonBar from './ChildComps/BottonBar.vue'
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      Sroll,
      BottonBar
    },
    /* data(){
      return {
        CarList:[],
      }
    }, */
    computed: {
      //这里是把Vuex中的getters拿到我的计算属性里面(映射)
      //要用到Vuex中的mapgetter
      ...mapGetters([
        'CarNum', 'CarList'
      ])

    },


  }
</script>

<style>
  .cart {
    height: 100vh;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: pink;
    color: palevioletred;
    z-index: 3;
  }

  .cartscroll {
    position: absolute;
    top: 44px;
    bottom: 84px;
    left: 0;
    right: 0;
  
  }
</style>
