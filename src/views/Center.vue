<template>
  <div>
    <!-- 网页头部 -->
    <header id="myHeader-wrapper">
      <div class="myHeader">
        <img src="../assets/yhu.jpg" class="actor-like">
        <div>
          <a href="javascript:;" class="nick-name">立即登录</a>
        </div>
      </div>
    </header>
    <!-- 拼单选择 -->
    <ul class="my-order-tab">
      <li>
        <i class="iconfont icon-dingdan-copy film-dianDan"></i>
        <div>电影订单</div>
      </li>
      <li>
        <i class="iconfont icon-ziyuan pintuan-dianDan"></i>
        <div>拼团订单</div>
      </li>
    </ul>
    <!-- 用户设置 -->
    <ul class="user-choose">
      <li class="user-set">
        <a href="javascript:;">
          <img src="../assets/ka.jpg">
          <span class="use-set-lable">卖座卡</span>
          <i class="iconfont icon-gengduo use-set-i"></i>
        </a>
      </li>
      <li class="user-set">
        <a href="javascript:;">
          <img src="../assets/yue.jpg">
          <span class="use-set-lable">
            余额
            <span class="user-set-value">
              <i class="iconfont icon-jiage"></i>
              <span>0</span>
            </span>
          </span>
          <i class="iconfont icon-gengduo use-set-i"></i>
        </a>
      </li>
      <li class="user-set">
        <a href="javascript:;">
          <img src="../assets/shezhi.jpg">
          <span class="use-set-lable">设置</span>
          <i class="iconfont icon-gengduo use-set-i"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
/* 头部样式 */
#myHeader-wrapper {
  height: 160px;
  background: url("../assets/bg.6837f67.png") no-repeat;
  background-size: cover;
  .myHeader {
    height: 160px;
    background: url("../assets/bg.6837f67.png") no-repeat;
    background-size: cover;
    text-align: center;
    padding-left: 22px;
    padding-top: 64px;
    display: flex;
    align-items: center;
    color: #ffffff;
    .actor-like {
      width: 63px;
      height: 63px;
      border-radius: 35px;
      margin-right: 20px;
      border: 2px solid #ffffff;
    }
    .nick-name {
      font-size: 16px;
      color: #ffffff;
    }
  }
}
/* 订单选择 */
.my-order-tab {
  width: 100%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 80px;
  background: #ffffff;
  margin-bottom: 10px;
  align-items: center;
  li {
    width: 50%;
    div {
      margin-top: 4px;
      color: #797d82;
    }
    .film-dianDan {
      font-size: 26px;
      color: #ff5f16;
    }
    .pintuan-dianDan {
      font-size: 26px;
      color: green;
    }
  }
}
/* 用户设置 */
.user-set {
  padding: 0 19px;
  background: #ffffff;
  height: 50px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ededed;
    img {
      width: 20px;
      height: 20px;
    }
    .use-set-lable {
      margin-left: 15px;
      color: #191a1b;
      flex: 1;
      font-size: 16px;
      /* 余额 */
      .user-set-value {
        float: right;
        color: #797d82;
        font-size: 14px;
        margin-right: 6px;
        color: #797d82;
        font-size: 15px;
        i {
          font-size: 15px;
        }
      }
    }
    .use-set-i {
      font-size: 10px;
      display: inline-block;
      text-align: right;
    }
  }
}
</style>
