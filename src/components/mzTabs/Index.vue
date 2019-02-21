<template>

  <div id="tabs-wrapper">
    <div class="tabs" ref="box">
      <ul class="tabs-nav">
        <router-link to="/films/nowPlaying" tag="li"  active-class="tabs-active">
          <span>正在热映</span>
        </router-link>
        <router-link to="/films/comingSoon" tag="li" active-class="tabs-active">
          <span>即将上映</span>
        </router-link>
        <div class="tab-ink-wrapper" style="transform: translate3d(0%, 0px, 0px)">
          <span class="tab-ink" style="width: 50px;">
          </span>
        </div>
      </ul>

    </div>
  </div>

</template>

<script>
export default {

  mounted () {
    console.log(this.$refs.box.offsetTop)
  }

}
</script>

<style lang="less">
  /* 热映区 */
#tabs-wrapper{
  width: 100%;
  background: #ffffff;
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
        &.tabs-active{
          color: #ff5f16;
        }
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
