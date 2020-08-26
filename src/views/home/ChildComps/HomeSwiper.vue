<template>
  <Swiper>
    <Slide v-for='item in cbanners' :key="item.title">
      <a :href='item.link'>
        <img :src="item.image" :alt="item.title">
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
    props:['cbanners']


  }
</script>

<style>
</style>
