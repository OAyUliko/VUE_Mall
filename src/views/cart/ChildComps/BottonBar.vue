<template>
  <div class="buttonbar">

    <CheckButton class="checkbutton left" :ischecked='isAllChecked()' @click.native="buttonclick" ref='bottonclick'></CheckButton>
    <span class="left">全选</span>

    <span class="left sum">合计：￥{{TotalPrice}}</span>
    <div class="pay right">去结算({{TotalNum}})</div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton.vue'
  export default {
    name: "ButtonBar",
    props: {

    },
    components: {
      CheckButton
    },
    computed: {
      TotalPrice() {
        return this.$store.state.CarList.filter((item) => {
          return item.checked
        }).reduce((perValue, item) => {
          return item.price * item.count + perValue;
        }, 0).toFixed(2)
      },
      TotalNum() {
        return this.$store.state.CarList.filter((item) => {
          return item.checked
        }).reduce((perValue, item) => {
          return item.count + perValue;
        }, 0)
      },

    },
    methods: {
      //上面的影响下面的全选
      isAllChecked() {
        if (this.$store.state.CarList.length == 0)
          return false;
        else {
          return this.$store.state.CarList.every(function(item, index, CarList) {
            return item.checked == true;
          })
        }
      },
      buttonclick() {
        //如果上面的全部选中
        if (this.isAllChecked()) {
          this.$store.state.CarList.forEach(item => item.checked = false)
        } else
          this.$store.state.CarList.forEach(item => item.checked = true) 
      



      }
    }



  }
</script>

<style scoped>
  .buttonbar {
    position: fixed;
    bottom: 48px;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #e2e2e2;

  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  span {
    line-height: 40px;
    text-align: center;
    margin-left: 5px;
    font-size: 14px;
    color: #666;
  }

  .sum {
    margin-left: 15px;
    font-size: 16px;
    color: #111111;
  }

  .checkbutton {
    display: inline-block;
    margin: 10px 0 0 10px;
  }

  .pay {
    width: 30%;
    background-color: palevioletred;
    color: white;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
</style>
