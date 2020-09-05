<template>
  <div class="warpper" ref='warpper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data(){
      return {
        bs:null,
      }

    },
    props:{
      //这个值不要规定死了 因为使用情况会不一样
        probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default:false
        }
    },
    mounted() {
      //1.创建BScroll对象
      this.bs=new BScroll(this.$refs.warpper,{
        pullUpLoad:this.pullUpLoad,
        click:true,
        probeType:this.probeType
      })
      //2.进行监听 把实时移动的高度传给父组件 一句高度来显示 【返回顶部】 图标
      this.bs.on('scroll',(position) => {
        this.$emit('gototop',position);
       
      })
      //3.监听上拉事件 加载更多
      if(this.pullUpLoad){
      this.bs.on('pullingUp',() => {
        this.$emit('pullingUp');
      })}
    },
    methods:{
      refresh(){
        console.log('组件refresh一次');
        this.bs && this.bs.refresh();
      }
    }
    }
</script>

<style scoped>
</style>
