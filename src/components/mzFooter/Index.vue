<template>
  <footer class="footer-wrapper">
      <ul class="film-footer">
        <router-link tag="li" to="/films" class="choose-film active-current-item" active-class="a">
            <i class="iconfont icon-dianying"></i>
            <span>电影</span>
        </router-link>
        <router-link tag="li" to="/cinema" class="choose-film" active-class="a">
            <i class="iconfont icon-yingyuan"></i>
            <span>影院</span>
        </router-link>
        <router-link tag="li" to="/asd" class="choose-film" active-class="a">
            <i class="iconfont icon-pintuan"></i>
            <span>9.9拼团</span>
        </router-link>
        <router-link tag="li" to="/center" class="choose-film" active-class="a">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
        </router-link>
        <!-- <li class="choose-film active-current-item">
          <a href="#/films">
            <i class="iconfont icon-dianying"></i>
            <span>电影</span>
          </a>
        </li>
        <li class="choose-film">
          <a href="#/cinema">
            <i class="iconfont icon-yingyuan"></i>
            <span>影院</span>
          </a>
        </li>
        <li class="choose-film">
          <a href="javascript::">
            <i class="iconfont icon-pintuan"></i>
            <span>9.9拼团</span>
          </a>
        </li>
        <li class="choose-film">
          <a href="#/center">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
          </a>
        </li> -->
      </ul>
    </footer>

</template>

<style lang="less">
  html,body{
  padding-bottom: 46px;
  .footer-wrapper{
    position: fixed;
    bottom: 0;
    width: 3.75rem;
    margin: 0 auto;
    height: 46px;
    z-index: 666;
    .film-footer{
      background: #ffffff;
      width: 100%;
      display: flex;
      .choose-film{
        flex: 1;
        text-align: center;
        width: 100%;
        height: 44px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        color: #797d82;
        &.a{
          color: #ff5f16
        }
        i{
          font-size: 20px;
        }
        span{
          font-size:14px;
        }
      }
    }
  }
}
</style>
