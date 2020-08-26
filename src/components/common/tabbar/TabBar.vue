<!-- Components 放公共的组件
分页中的子组件放在各自的对应的pages中 -->

<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBar'
	
	}
</script>

<style>
	
	.tabbar {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #f6f6f6;
		height: 49px;
		box-shadow: 0px 5px 9px 3px #ccc;
	}
	
</style>
