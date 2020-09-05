<template>
  <Swiper>
    <Slide v-for='item in cbanners' :key="item.title">
      <a :href='item.link'>
        <img :src="item.image" :alt="item.title" @load="swiperimgload">
      </a>
    </Slide>
  </Swiper>
</template>

<script>
  import {
    Swiper,
    Slide
  } from '@/components/common/swiper'
  export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      Slide
    },
    props: ['cbanners'],
    data(){
      return{
        allimgload: false,
      }
    },

    methods: {
      swiperimgload() {
        if (this.allimgload==false){
          this.$emit('swiperimgload');
          this.allimgload=true;
        }

      }
    }


  }
</script>

<style>
</style>
