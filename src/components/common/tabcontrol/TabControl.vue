<template>
  <div class='tabcontrol'>
    <span v-for="(item,index) in ctitles" :class="{active:index===currIndex}" @click="itemclick(index)">
      {{item}}</span>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      ctitles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        /* 当前默认选中的类 */
        currIndex: 0,
      }
    },
    methods: {
      itemclick(index) {
        this.currIndex = index;
        //传给父组件
        this.$emit('itemclick', index)
      }
    }
  }
</script>

<style>
  .tabcontrol {
    height: 50px;
    display: flex;

  }

  span {
    display: inline-block;

    flex: 1;
    line-height: 50px;
    text-align: center;
    color: #444444;
  }

  .active {
    color: palevioletred;
    border-bottom: 2px solid pink;
  }
</style>
