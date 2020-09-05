import {
  debounce
} from './utils.js'

export const ItemListenerMixin = {
  data() {
    return {
      ItemListener: null,
      itemrefresh: null,
    }

  },
  mounted() {
    console.log('mixin')
    this.itemrefresh = debounce(this.$refs.scroll.refresh, 50)
    this.ItemListener = () => {
      this.itemrefresh();
    }
    this.$bus.$on('imgload', this.ItemListener)
  }
}

 import BackTop from '@/components/content/backtop/BackTop.vue'
export const BackToTopMinin = {
  data() {
    return {
      imgisshow: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    //返回顶部 native监听自定义组件
    backtotop() {
      this.$refs.scroll.bs.scrollTo(0, 0, 500);
    },
  }
}
