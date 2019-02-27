<template>

  <div id="tabs-wrapper" ref="filmTabs">
    <div class="tabs" >
      <ul class="tabs-nav">
        <li  @click="go('nowPlaying')" :class="{'tabs-active': filmType === 'nowPlaying'}"

        >
          <span>正在热映</span>
        </li>
        <li  @click="go('comingSoon')"
          :class="{'tabs-active': filmType === 'comingSoon'}"
          >
          <span>即将上映</span>
        </li>
        <div class="tab-ink-wrapper" :style="[{width: '50%'},{transform: filmType === 'nowPlaying' ? 'translate3d(0%,0,0)' : 'translate3d(100%,0,0)'}]" >
          <span class="tab-ink" style="width: 50px;">
          </span>
        </div>
      </ul>

    </div>
  </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {

  methods: {
    ...mapMutations([
      'chgFilmType'
    ]),
    go (name) {
      this.chgFilmType(name);
      this.$router.replace('/films/' + name)
    },
    currentChange (index) {
      // console.log(index);
      this.showNum = index;
      if (this.showNum === 0) {
        this.$refs.move.style = 'transform: translate3d(0%, 0px, 0px)'
      } else if (this.showNum === 1) {
        this.$refs.move.style = 'transform: translate3d(100%, 0px, 0px)'
      }
    },
    handleTabScroll () {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= this.$store.state.tabsTop) {
        this.$nextTick(() => {
          this.$refs.filmTabs.style = 'position: fixed; top: 0.44rem'
        })
      } else {
        this.$nextTick(() => {
          this.$refs.filmTabs.style = 'position: relative'
        })
      }
    }
  },
  computed: {
    ...mapState([
      'filmType'
    ])
  },
  mounted () {
    this.$store.state.tabsTop = this.$refs.filmTabs.offsetTop;
    window.addEventListener('scroll', this.handleTabScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleTabScroll)
  }
}
</script>

<style lang="less">
  /* 热映区 */
#tabs-wrapper{
  width: 100%;
  background: #ffffff;
  z-index: 3000;
  .tabs{
    position: relative;
    height: 49px;
    width: 100%;
    .tabs-nav{
      display: flex;
      width: 100%;
      height: 49px;
      justify-content: center;
      align-content: center;
      li{
        width: 50%;
        height: 49px;
        line-height: 49px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
      // 选中 tab 的高亮 选择
      .tabs-active{
          color: #ff5f16;
        }
      /* 下划线样式 */
      .tab-ink-wrapper{
        margin: auto;
        position: absolute;
        top: 45px;
        left: 0;
        width: 50%;
        transition: all .2s;
        .tab-ink{
          border-bottom: 2px solid #ff5f16;
          border-radius: 20px;
          display: block;
          margin: auto;
        }
      }
    }
  }
}
</style>
