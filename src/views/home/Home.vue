<template>
  <div id="home">
    <NavBar class='home_bar'>
      <div slot='middle'>购物街</div>
    </NavBar>
    <Sroll class='scroll' ref='scroll' :probeType='3'  :pullUpLoad='true' @gototop='gototop' @pullingUp='pullingUp'>
      <HomeSwiper v-bind:cbanners='banners'></HomeSwiper>
      <Recommand v-bind:crecommend='recommend'></Recommand>
      <Feature></Feature>
      <TabControl v-bind:ctitles='titles' class='tabcon' @itemclick='itclick'></TabControl>
      <GoodsList v-bind:goods="goods[currgoodstype].list"></GoodsList>
    </Sroll>
      <BackTop @click.native='backtotop' v-show='imgisshow'></BackTop>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import HomeSwiper from '@/views/home/ChildComps/HomeSwiper.vue'
  import Recommand from '@/views/home/ChildComps/Recommand.vue'
  import Feature from '@/views/home/ChildComps/Feature.vue'
  import TabControl from '@/components/common/tabcontrol/TabControl.vue'
  import GoodsList from '@/components/content/goods/GoodsList.vue'
  import Sroll from '@/components/common/scroll/Scroll.vue'
  import BackTop from '@/components/content/backtop/BackTop.vue'

  import {
    getHomeMutiData,
    getHomeGoods
  } from '@/network/home.js'
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      Recommand,
      Feature,
      TabControl,
      GoodsList,
      Sroll,
      BackTop
    },
    data() {
      return {
        //在data中保存我网络请求来的数据
        banners: [],
        recommend: [],
        dKeyword: [],
        Keywords: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currgoodstype: 'pop',
        imgisshow:false
      }


    },
    created() {
      //请求首页相关商品数据
      this.HomeMutiData(),
      this.HomeGoods('pop');
      this.HomeGoods('new');
      this.HomeGoods('sell');

    },

    methods: {
      //网络请求相关方法
      HomeMutiData() {
        getHomeMutiData().then(res => {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      HomeGoods(type) {
        //要获得当前已有页数的下一页的数据
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          //怎么把一个数组添加到一个数组的后面 push！
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;

        })
      },

      //商品数据相关方法
      itclick(index) {
        switch (index) {
          case 0:
            this.currgoodstype = 'pop'
            break
          case 1:
            this.currgoodstype = 'new'
            break
          case 2:
            this.currgoodstype = 'sell'
            break
        }
      },
      //返回顶部操作
      backtotop(){
        this.$refs.scroll.bs.scrollTo(0,-600,500);
      },
      //根据高度判断是否显示【返回顶部】图标
      gototop(position){
        this.imgisshow=(-position.y)>1000
      },
      //监听上拉事件 加载更多
      pullingUp(){
        this.HomeGoods(this.currgoodstype);
        this.$refs.scroll.bs.finishPullUp();
      }

    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
  }

  /*  导航栏的颜色就不要写到组件里面了,因为每个页面的颜色可能会不同 */
  .home_bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: pink;
    color: palevioletred;
    z-index: 2;
  }

  .tabcon {
    position: sticky;
    top: 44px;
    background-color: white;
  }
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
