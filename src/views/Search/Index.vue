<template>
  <div class="main">
    <div class="cinemas-search">
      <div class="cinemas-search-input">
        <div class="input-wrap">
          <i class="search-icon iconfont icon-search"></i>
          <form action=".">
            <input type="text" placeholder="输入影城名称" class="search-input">
          </form>
          <div class="clean-icon" v-if="isDelete">
            <i class="iconfont icon-qingchu"></i>
          </div>
        </div>
        <router-link tag="div" to="/cinema" class="cancel-btn">取消</router-link>
      </div>
      <div class="cinema-init-area">
        <div class="cinema-nearby">
          <div class="cinema-index-title">离你最近</div>
          <ul class="cinema-index-detail">
            <li class="cinema-item-detail">
              <div class="cinema-item-text">金逸影城天一城店</div>
            </li>
            <li class="cinema-item-detail">
              <div class="cinema-item-text">横店电影城(世贸天街店)</div>
            </li>
            <li class="cinema-item-detail">
              <div class="cinema-item-text">邢台恒大影城</div>
            </li>
            <li class="cinema-item-detail">
              <div class="cinema-item-text">华彩国际影城（宁晋店）</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="cinema-search-result" style="display:none;">
        <div class="empty-result">
          <img src="@/assets/findcinema.png" alt>
          <p>没有找到匹配的影院</p>
          <p class="empty-list-tip">提示：仅支持搜索“影院”，建议您检查输入的影院名称是否有误？</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDelete: false
    }
  }
}
</script>

<style lang="less">
  @import url('./idnex.less');
</style>
