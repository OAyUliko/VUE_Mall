<template>
    <div>
      <div class="icon-selector" :class="{active: ischecked}">
        <img src='../../../assets/img/cart/tick.svg' alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
     props: {
		  ischecked: {
		    type: Boolean,
        default: false
      }
    },
    /* data: function () {
		  return {
		    checked: true
      }
    }, */

    /* watch: {
		  value: function (newValue) {
        this.checked = newValue;
      }
    } */
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
  
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .active {
    background-color: palevioletred;
    border-color: palevioletred;
  }
</style>
