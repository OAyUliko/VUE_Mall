<template>
  <div id="home">
    <NavBar class='home_bar'>
      <div slot='middle'>购物街</div>
    </NavBar>
    <TabControl v-bind:ctitles='titles' class='tabcon' @itemclick='itclick' v-show='tabisshow' ref='toptabcontrol'></TabControl>
    <Sroll class='scroll' ref='scroll' :probeType='3' :pullUpLoad='true' @gototop='gototop' @pullingUp='pullingUp'>
      <HomeSwiper v-bind:cbanners='banners' @swiperimgload='swiperimgload'></HomeSwiper>
      <Recommand v-bind:crecommend='recommend'></Recommand>
      <Feature></Feature>
      <TabControl v-bind:ctitles='titles' @itemclick='itclick' v-show='!tabisshow' ref='tabcontrol'></TabControl>
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


  import {
    debounce
  } from '@/commom/utils.js'

  import {
    getHomeMutiData,
    getHomeGoods
  } from '@/network/home.js'

  import {
    ItemListenerMixin,BackToTopMinin
  } from '@/commom/mixin.js'

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
       
        tabisshow: false,
        taboffsettop: 0,
        leavescrolly: 0,

      }


    },
    created() {
      //请求首页相关商品数据
      this.HomeMutiData();
      this.HomeGoods('pop');
      this.HomeGoods('new');
      this.HomeGoods('sell');


    },
    mixins:[ItemListenerMixin,BackToTopMinin],
    mounted() {
     
      //这个的缺点是频繁调用！事件名称，回调函数
      /* this.$bus.$on('imgload',function(){
         this.$refs.scroll.refresh();
       })*/
      console.log("首页scroll刷新mounted")
      //这一段注释了，是因为后面用了mixin来混入，就不用重复代码了，只需要导入函数就行
      /* const refresh = this.debounce(this.$refs.scroll.refresh, 50)

      this.homeItemListener= () => {
        refresh();
      }

      this.$bus.$on('imgload', this.homeItemListener) */
    },
    activated() {
      this.$refs.scroll.bs.scrollTo(0, this.leavescrolly, 0)
    },
    deactivated() {
      this.leavescrolly = this.$refs.scroll.bs.y;
      //离开的时候就不监听首页中goodsitem的加载了
      //传入函数名，函数体
      this.$bus.$off('imgload',this.ItemListener);


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
        this.$refs.toptabcontrol.currIndex = index;
        this.$refs.tabcontrol.currIndex = index;
      },
      //返回顶部操作
      backtotop() {
        this.$refs.scroll.bs.scrollTo(0, -55, 500);
      },
      //轮播图里的图片全部加载完成后，再获得tabcontrol的offsettop
      //不然直接获得的值会偏小,因为当时的图片还不一定加载完成
      swiperimgload() {
        this.taboffsettop = this.$refs.tabcontrol.$el.offsetTop;
      },
      //根据高度判断是否显示【返回顶部】图标
      //再添加一个功能：到特定高度后，将第一个TabControl显示，第二个隐藏起来
      gototop(position) {
        this.imgisshow = (-position.y) > 1000;
        if ((-position.y) > this.taboffsettop) {
          this.tabisshow = true;
          this.$refs.scroll.$el.style.top = '98px';

        } else
          this.tabisshow = false

      },
      //监听上拉事件 加载更多
      pullingUp() {
        this.HomeGoods(this.currgoodstype);
        this.$refs.scroll.bs.finishPullUp(); //拉动一次后 finish一次 就可以达到多次加载的效果了
      },

      //防抖操作
/*      debounce(func, delay) {
        let timer = null;
        return function(...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay);
        }
      } */

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
    /* 这个fixed滚动之后就不要了 开始需要是因为整个页面都是滚动的
    再添加完Better-Scroll之后 我们规定了可以滚动的区域
    就不需要fixed来定位显示在最外层了*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: pink;
    color: palevioletred;
    z-index: 3;
  }

  /* 这里是吸顶效果 但是在项目后期就不起作用了 */
  /*  .tabcon {
    position: sticky;
    top: 44px;
    background-color: white;
  }
 */
  .tabcon {
    position: fixed;
    top: 44px;
    left: 0;
    width: 100%;
    z-index: 3;
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
