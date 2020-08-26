<template>
	<div class="bar_item" @click="goto">
		<!-- 插槽都要包装一层div，要添加什么属性或者金姓什么操作的话
		对外层div操作 -->
		<!-- v-if =false：元素不存在 和v-show不一样-->
		<div v-if="isActive">
			<slot name="item_img"></slot>
		</div>
		<div v-else>
			<slot name="item_img_active"></slot>
		</div>
		<div :style='style'>
			<slot name="item_name"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			activeColor:{
				type:String,
				default:'palevioletred'
			}
		},
		methods: {
			goto() {				
				this.$router.push(this.path);
			}
		},
		computed: {
			/* 因为有4个item,要循环进行4次isActive判断，
			拿当前活跃的路径和当次循环中的path进行搜索对比 */		
			isActive() {
				//console.log(this.$route);
				//当前活跃路由：{name: undefined, path: "/cart", …}
				//console.log(this.path);
				return this.$route.path.indexOf(this.path);
			},
			/* 颜色的计算 */
			style(){
				return this.isActive? {}:{color:this.activeColor}
		}
	},
	}
</script>

<style>
	.bar_item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 16px;
	}

	.bar_item img {
		height: 20px;
		width: 20px;
		vertical-align: middle;
		padding-bottom: 3px;
	}

</style>
