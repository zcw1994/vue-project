<template>
  <div>
    <!-- 影院头部 -->
    <header id="header-wrapper">
      <div class="header">
        <router-link tag="div" to="/city" class="header-left">
          <span> {{ curCityName }} </span>
          <i class="iconfont icon-xiajiantou"></i>
        </router-link>
        <div class="header-title">
          影院
        </div>
        <router-link to="/search" class="header-right">
          <i class="iconfont icon-search"></i>
        </router-link>
      </div>
    </header>
    <!-- 影院地址选择 -->
    <div id="cinemas-tag-wrapper">
      <div class="cinemas-tag">
        <label>
          全城
          <i class="iconfont icon-xiajiantou"></i>
        </label>
        <label>
          最近去过
          <i class="iconfont icon-xiajiantou"></i>
        </label>
      </div>
    </div>
    <!-- 影院详情列表 -->
    <div id="cinemas-list-wrapper">
      <ul class="cinemas-list">
        <li class="cinema-list-item"
          v-for="item in cinemaList"
          :key="item.cinemaId"
          >
          <a href="javascript:;">
            <div class="cinema-ifo-lf">
              <span class="cinema-name"> {{ item.name }} </span>
              <span class="cinema-address"> {{ item.address }} </span>
            </div>
            <div class="cinema-ifo-rf">
              <div class="films-lowPrice">
                <span class="rf-lowprice">
                  <i class="iconfont icon-jiage"></i>
                  <span class="interge"> {{ item.lowPrice/100 }} </span>
                </span>
                <span class="upon">起</span>
              </div>
              <span class="cinema-gpsAddress">
                距离未知
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
  data () {
    return {
      cinemaList: []
    }
  },
  methods: {
    getCiemaData () {
      axios.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154808291248812303321624"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        },
        params: {
          cityId: this.$store.state.curCityId,
          k: '2462978'
        }
      }).then(res => {
        console.log(res.data);
        let data = res.data;
        if (data.status === 0) {
          this.cinemaList = data.data.cinemas;
        } else {
          alert('网络有误，请稍后重试');
        }
      }).catch(error => {
        console.log(error.msg);
      })
    }
  },
  computed: {
    ...mapState([
      'curCityName',
      'curCityId'
    ])
  },
  created () {
    this.getCiemaData();
  }
}
</script>

<style lang="less">

/* 影院头部 */
#header-wrapper{
  background: #ffffff;
  height: 44px;
  position: fixed;
  top: 0;
  width: 3.75rem;
  margin: 0 auto;
  z-index: 1000;

  .header{
    background: #ffffff;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
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
    /* 头部右侧 */
    .header-right{
      float: right;
      display: block;
      width: 15%;
      margin-right: 15px;
      text-align: center;

      i{
        font-size: 18px
      }
    }
    /* 头部中间 */
    .header-title{
      flex: 1;
      text-align: center;
      color: #191a1b;
      font-size: 18px
    }
  }
}

/* 影院地址选择 */
#cinemas-tag-wrapper{
  height: 50px;
  width: 3.75rem;
  background: #ffffff;
  margin: 0 auto;
  position: fixed;
  top: 44px;
  z-index: 1000;

  .cinemas-tag{
    text-align: center;
    display: flex;
    label{
      width: 50%;
      height: 50px;
      line-height: 50px;
      color: #191a1b;
      font-size: 14px;
      i{
        font-size: 10px;
        margin-left: 4px
      }
    }
  }
}
/* 影院详情列表 */
#cinemas-list-wrapper{
  background: #ffffff;
  padding-top: 94px;

  .cinema-list-item{
    height: 45px;
    position: relative;
    padding: 15px;

    a{
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .cinema-ifo-lf{
        display: flex;
        flex-flow: column;
        padding-right: 15px;
        width: 80%;
        span{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cinema-name{
          color: #191a1b;
          font-size: 16px;
        }
        .cinema-address{
          color: #797d82;
          font-size: 12px;
          margin-top: 5px;
        }
      }
      .cinema-ifo-rf{
        flex: 1;
        text-align: center;
        .rf-lowprice{
          font-size: 14px;
          color: #ff5f16;
          i{
            font-size: 12px;
          }
        }
        .upon{
          font-size: 10px;
          color: #ff5f16;
        }
        .cinema-gpsAddress{
          display: block;
          font-size: 12px;
          color: #797d82;
          margin-top: 5px;
        }
      }

    }
  }
}

</style>
