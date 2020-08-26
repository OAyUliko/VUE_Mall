<template>
	<TabBar>
		<TabBarItem path='/home' activeColor='palevioletred'>
			<div slot='item_img'><img src="@/assets/img/tabbar/首页.png" alt=""></div>
			<div slot='item_img_active'><img src="@/assets/img/tabbar/首页填充.png" alt=""></div>
			<div slot='item_name'>首页</div>
		</TabBarItem>
		<TabBarItem path='/Categroy' activeColor='palevioletred'>
			<div slot='item_img'><img src="@/assets/img/tabbar/分类.png" alt=""></div>
			<div slot='item_img_active'><img src="@/assets/img/tabbar/分类填充.png" alt=""></div>
			<div slot='item_name'>分类</div>
		</TabBarItem>
		<TabBarItem path='/cart' activeColor='palevioletred'>
			<div slot='item_img'><img src="@/assets/img/tabbar/购物车.png" alt=""></div>
			<div slot='item_img_active'><img src="@/assets/img/tabbar/购物车填充.png" alt=""></div>
			<div slot='item_name'>购物车</div>
		</TabBarItem>
		<TabBarItem path='/profile' activeColor='palevioletred'>
			<div slot='item_img'><img src="@/assets/img/tabbar/个人中心-我的.png" alt=""></div>
			<div slot='item_img_active'><img src="@/assets/img/tabbar/个人中心.png" alt=""></div>
			<div slot='item_name'>我的</div>
		</TabBarItem>
	</TabBar>
</template>

<script>
	import TabBar from '@/components/common/tabbar/TabBar.vue'
	import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
