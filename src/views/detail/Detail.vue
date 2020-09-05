<template>
  <div class="detail">
    <DetailNavBar class='home_bar' @spanclick='spanclick' ref='detailnavbar'></DetailNavBar>
 <div>{{$store.state.CarList}}</div>
   <!-- <Sroll class="detaiilscroll" ref='scroll' @gototop='detailscroll' :probeType='3'>

      <DetailSwiper v-bind:cbanners='banners'></DetailSwiper>
      <DetailInfo v-bind:cgoods='goods'></DetailInfo>
      <ShopInfo v-bind:cshops='shops'></ShopInfo>
      <Rate v-bind:crates='rates' ref='rate'></Rate>
      <DetailImageInfo v-bind:cdetails='imageinfo' @detailimgload='detailimgload'></DetailImageInfo>
      <Params v-bind:cparams='params' ref='params'></Params>
      <GoodsList v-bind:goods='recommends' ref='recommends'></GoodsList>
    </Sroll> -->
    <BackTop @click.native='backtotop' v-show='imgisshow'></BackTop>
    <BottomNavBar @addCar='addCar'></BottomNavBar>


  </div>
</template>

<script>
  import DetailNavBar from '@/views/detail/ChildComps/DetailNavBar.vue'
  import Sroll from '@/components/common/scroll/Scroll.vue'
  import DetailSwiper from '@/views/detail/ChildComps/DetailSwiper.vue'
  import DetailInfo from '@/views/detail/ChildComps/DetailInfo.vue'
  import ShopInfo from '@/views/detail/ChildComps/ShopInfo.vue'
  import DetailImageInfo from '@/views/detail/ChildComps/DetailImageInfo.vue'
  import Params from '@/views/detail/ChildComps/Params.vue'
  import Rate from '@/views/detail/ChildComps/Rate.vue'
  import GoodsList from '@/components/content/goods/GoodsList.vue'
  import BottomNavBar from '@/views/detail/ChildComps/BottomNavBar.vue'




  import {
    getDetails,
    Goods,
    getRecommends
  } from '@/network/detail.js'

  import {
    debounce
  } from '@/commom/utils.js'

  import {
    ItemListenerMixin,
    BackToTopMinin
  } from '@/commom/mixin.js'


  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      Sroll,
      DetailSwiper,
      DetailInfo,
      ShopInfo,
      DetailImageInfo,
      Params,
      Rate,
      GoodsList,
      BottomNavBar,


    },
    data() {
      return {
        iid: null,
        banners: [],
        goods: {},
        shops: {},
        imageinfo: {},
        params: {},
        rates: {},
        recommends: [],
        scrolly: [],
        scrolldebounce: null,

      }
    },
    created() {
      this.iid = this.$route.params.iid;
      this.Details(this.iid);
      this.Recommends();
      this.scrolldebounce = debounce(() => {
        this.scrolly = [];
        this.scrolly.push(0);
        this.scrolly.push(this.$refs.rate.$el.offsetTop);
        this.scrolly.push(this.$refs.params.$el.offsetTop);
        this.scrolly.push(this.$refs.recommends.$el.offsetTop);
      }, 100)
    },
    mixins: [ItemListenerMixin, BackToTopMinin],
    //mounted 中的代码 是重复的 在Detail和Home中，都是对Scroll进行刷新的防抖操作
    //然后在离开时（页面跳转时）进行事件的取消监听
    //所以进行代码的抽取——用mixin混入
    mounted() {
      console.log("detail mounted")
      /* const refresh = debounce(this.$refs.scroll.refresh, 50)

      this.detailItemListener= () => {
        refresh();
      }
      this.$bus.$on('detailimgload',this.detailItemListener) */

      //1.写在这里来获得各个高度的话 会获取不到 因为数据还没有到子组件 v-if是空的 所以不会渲染出来 就会出现undefined的情况
      //那我写在数据获取完的后面呢 就是写在methods中的Details的里面呢 也不行 因为数据虽然过来了 但是还没有渲染出来 等渲染完之后会回调
      //update生命周期函数 要是写在这里面 又会频繁调用
      //那写在哪里呢！！
      //看methods中的Details中的代码！ 有个

      /* this.scrolly.push(0);
      this.scrolly.push(this.$refs.rate.$el.offsetTop);
      this.scrolly.push(this.$refs.params.$el.offsetTop);
      this.scrolly.push(this.$refs.recommends.$el.offsetTop);
      console.log(this.scrolly) */

    },
    destroyed() {
      this.$bus.$off('imgload', this.ItemListener);
    },
    //2.写在生命周期的update中又会频繁调用
    /* updated() {
       this.scrolly=[];
       this.scrolly.push(0);
       this.scrolly.push(this.$refs.rate.$el.offsetTop);
       this.scrolly.push(this.$refs.params.$el.offsetTop);
       this.scrolly.push(this.$refs.recommends.$el.offsetTop);
       console.log(this.scrolly)
     }, */
    methods: {
      Details(iid) {
        getDetails(iid).then(res => {
          //1.获得轮播图图片
          this.banners = res.result.itemInfo.topImages;
          //2.获得商品info
          this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
          //3.获得店铺info
          this.shops = res.result.shopInfo;
          //4.获得详情info
          this.imageinfo = res.result.detailInfo;
          //5.获得商品参数info
          this.params = res.result.itemParams;
          //6.获得评价info
          this.rates = res.result.rate

          //3.写在这里！！！ 下一帧 等数据到了 渲染完了 就会回调这个
          //经过测试 这个好像也不对 等回到首页之后再点击另一个商品 高度的获得又不对了 有时候是对的 是因为它是提取的缓存 所以高度是对的
          //原因是：这里仅仅是渲染出来了 但是图片还没出来！！
          //那么到底写在哪里！！！！！
          //看refresh这里的代码！！

          //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
          //它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
          /* this.$nextTick(() => {
            this.scrolly=[];
            this.scrolly.push(0);
            this.scrolly.push(this.$refs.rate.$el.offsetTop);
            this.scrolly.push(this.$refs.params.$el.offsetTop);
            this.scrolly.push(this.$refs.recommends.$el.offsetTop);
            console.log(this.scrolly)
          }) */

        })
      },
      Recommends() {
        getRecommends().then(res => {
          console.log(res);
          //7.获得推荐商品数据
          this.recommends = res.data.list;
        })
      },
      detailimgload() {
        //这里是监听详情页中详情图片的加载，每加载完一张图片，就调用一次emit发送给父组件，调用这个函数，要进行刷新，所以要防抖
        //this.$refs.scroll.refresh();//用这个可以刷新，但是太频繁了

        //用这个也不对，因为这是在函数内部，refres是局部变量，同样会被调用很多次，会频繁创建
        //考虑怎么把这个变量保存起来？？
        /* const refresh = debounce(this.$refs.scroll.refresh, 50)
        this.ItemListener = () => {
          refresh();
        } */

        this.refresh;
        //4.写在这里！！！ 这里的话图片都加载完了哦 但是也会出现过于频繁的问题 就要用防抖了
        this.scrolldebounce();
      },
      //这是详情页顶部的navbar点击事件，点击评论 滑动到评论
      spanclick(index) {
        console.log(index);
        this.$refs.scroll.bs.scrollTo(0, -this.scrolly[index], 800);
      },

      //根据高度判断是否显示【返回顶部】图标
      //再添加一个功能：到特定高度后，将第一个TabControl显示，第二个隐藏起来
      detailscroll(position) {
        this.imgisshow = (-position.y) > 1500;
        if ((-position.y) <= this.scrolly[1])
          this.$refs.detailnavbar.currIndex = 0;
        else if ((-position.y) > this.scrolly[1] && (-position.y) < this.scrolly[2])
          this.$refs.detailnavbar.currIndex = 1;
        else if ((-position.y) > this.scrolly[2] && (-position.y) < this.scrolly[3])
          this.$refs.detailnavbar.currIndex = 2;
        else
          this.$refs.detailnavbar.currIndex = 3;
      },
      addCar() {
        //1.构件商品信息
        const ProductInfo = {};
        ProductInfo.pic = this.banners[0];
        ProductInfo.name = this.goods.title;
        ProductInfo.desc = this.goods.desc;
        ProductInfo.price = this.goods.newPrice;
        ProductInfo.iid = this.iid;
      
        //2.添加到购物车
        this.$store.dispatch('addCar',ProductInfo);


      }




    }
  }
</script>

<style scoped>
  .detail .home_bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 5;
  }

  .detaiilscroll {
    height: calc(100vh - 102px);
    z-index: 4;
    position: relative;
    background-color: white;

  }
</style>
