<template>
  <div>
  <Swiper  class='detailswiper' >
    <Slide v-for='(item,index) in cbanners' :key="item">
      <a>
        <img :src="item">
      </a>
    </Slide>
  </Swiper>
  </div>
</template>

<script>
  import {
    Swiper,
    Slide
  } from '@/components/common/swiper'

  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      Slide
    },
    props: {
      cbanners: {
        type: Array,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        allimgload: false,
      }
    },

    methods: {
      swiperimgload() {
        if (this.allimgload == false) {

          this.allimgload = true;
        }

      }
    }


  }
</script>

<style scoped>
  .detailswiper {
    margin-top: 44px;
    height: 300px;
    overflow: hidden;
  
  }
</style>
