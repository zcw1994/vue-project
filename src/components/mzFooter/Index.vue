<template>
  <footer class="footer-wrapper">
      <ul class="film-footer">
        <li class="choose-film active-current-item">
          <router-link to='/films' active-class="a">
            <i class="iconfont icon-dianying"></i>
            <span>电影</span>
          </router-link>
        </li>
        <li class="choose-film">
          <router-link to='/cinema' active-class="a">
            <i class="iconfont icon-yingyuan"></i>
            <span>影院</span>
          </router-link>
        </li>
        <!-- <li class="choose-film">
          <router-link to='/center'>
            <i class="iconfont icon-pintuan"></i>
            <span>9.9拼团</span>
          </router-link>
        </li> -->
        <li class="choose-film">
          <router-link to='/center' active-class="a">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
          </router-link>
        </li>
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
  padding-bottom: 44px;
  .footer-wrapper{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 44px;
    .film-footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      background: #ffffff;
      .choose-film{
        flex: 1;
        text-align: center;
         a{
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
}
</style>
