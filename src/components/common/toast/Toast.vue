<template>
  <div class='toast' v-show="isShow">
   111
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    props: {
      message: {
        type: String,
        default () {
          return ''
        }
      },
			isShow:{
				type:Boolean,
				default(){
					return false
				}
			}
    },
   
  }
</script>

<style>
	.toast {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		padding: 8px 10px;
		color: #fff;
		background-color: rgba(0,0,0,0.75);
	}
  
</style>
