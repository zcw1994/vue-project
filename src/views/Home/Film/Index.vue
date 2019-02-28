<template>
  <div class="filmHeader">
    <!-- 头部 -->
    <router-link class="iconJt" to="/city"> <span> {{ curCityName }} </span>
      <i class="iconfont icon-xiajiantou"></i>
    </router-link>
    <div class="film-header" v-if="isHide">
      <router-link tag="div" to="/city" class="header-left">
        <span> {{ curCityName }} </span>
        <i class="iconfont icon-xiajiantou"></i>
      </router-link>
      <div class="header-title">
        电影
      </div>
      <a to="/search" class="header-right">

      </a>
    </div>
    <mz-banner></mz-banner>
    <mz-tabs></mz-tabs>
    <transition
      appear
      mode="out-in"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import mzBanner from '@/components/mzBanner/Index'
import mzTabs from '@/components/mzTabs/Index'
export default {
  data () {
    return {
      isHide: false
    }
  },
  computed: {
    curCityName () {
      return this.$store.state.curCityName;
    }
  },
  components: {
    mzBanner,
    mzTabs
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= this.$store.state.tabsTop) {
        this.isHide = true;
      } else {
        this.isHide = false;
      }
    }
  }
}
</script>

<style lang="less">
.filmHeader{
  position: relative;
  .film-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    display: flex;
    /* 头部左侧 */
    .header-left{
      width: 15%;
      display: flex;
      margin-left: 15px;
      align-content: center;
      justify-content: center;

      i{
        font-size: 10px;
      }
      span{
        display: inline-block;
        max-width: 30px;
        overflow: hidden;
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 5px;
      }
    }
    /* 头部中间 */
    .header-title{
      flex: 1;
      text-align: center;
      color: #191a1b;
      font-size: 18px
    }
    /* 头部右侧 */
    .header-right{
      float: right;
      display: block;
      width: 15%;
      margin-right: 15px;
      text-align: center;

    }
  }

    /* 地点地位 */
  .iconJt{
  display: flex;
  position: absolute;
  top: 20px;
  left: 10px;
  height: 30px;
  width: 50px;
  background: rgba(0,0,0,.2);
  color: #ffffff;
  line-height: 30px;
  z-index: 9999;
  border-radius: 15px;
  padding: 0 5px;
  text-align: center;
  span{
    display: inline-block;
    width: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  i{
    font-size: 10px
  }
  }
}
</style>
