<template>
  <div>
    <!-- 头部 -->
    <router-link class="iconJt" to="/city"> <span> {{ curCityName }} </span>
      <i class="iconfont icon-xiajiantou"></i>
    </router-link>
    <mz-banner></mz-banner>
    <mz-tabs></mz-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import mzBanner from '@/components/mzBanner/Index'
import mzTabs from '@/components/mzTabs/Index'
export default {
  computed: {
    curCityName () {
      return this.$store.state.curCityName;
    }
  },
  components: {
    mzBanner,
    mzTabs
  }
}
</script>

<style lang="less">
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
</style>
