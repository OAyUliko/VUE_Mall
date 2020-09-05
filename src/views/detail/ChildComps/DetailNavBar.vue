<template>
  <div class="detailnavbar">
    <NavBar class='home_bar'>
      <div slot='left'>
        <img src="@/assets/img/commom/back.svg" @click="imgclick">
      </div>
      <div slot='middle'>
        <span v-for="(item,index) in titles" @click="spanclick(index)"
        :class="{'active': index===currIndex}">{{item}}</span>

      </div>
    </NavBar>

  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar,
    },
    data(){
      return {
        titles:['商品','评论','参数','推荐'],
        /* 当前默认选中的类 */
        currIndex: 0,
      }
    },
    methods:{
      spanclick(index){

        this.currIndex=index;
        this.$emit('spanclick',index);
      },
      imgclick(){
        this.$router.back()
      }
    }


  }
</script>

<style scoped>
  img {
   margin: 11px;
 }

  span {
   color: #a2a2a2;;
   margin: 0 10px;
   font-size: 17px;
   height: 44px;
   line-height: 44px;
   text-align: center;
 }

 .active {
   color: palevioletred;

 }
</style>
