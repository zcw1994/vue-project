<template>
  <div>
    <div class="swiper-container header-play">
      <div class="swiper-wrapper">
        <a href="javascript:;" class="swiper-slide" v-for="item in bannerList" :key="item.bannerId">
          <img :src="item.imgUrl" >
        </a>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      bannerList: [],
      cityName: sessionStorage.getItem('cityName')
    }
  },
  methods: {
    initSwiter () {
      /* eslint-disable  */ // 暂时禁用对下面代码的 eslint 的验证
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 环形循环
      autoplay:{
        delay:1000,
      },

      // 分页器
      pagination: {
        el: '.swiper-pagination'
      }

    });
    /* eslint-enable */ // 开启对下面代码的 eslint 的验证
    }
  },
  created () {
    // 调用 axios 的 get 方法  调用nodejs项目 中数据库给的的接口数据
    axios.get('/api/gateway?type=2&cityId=440100&k=4680080', {
      headers: {
        // 需要配置 请求头 (网站需要一些特定的请求头才能访问)
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154808291248812303321624"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then((res) => {
      console.log(res);
      let data = res.data;
      if (data.status === 0) {
        this.bannerList = data.data
      } else {

      }

      // 数据更新之后，在更新实例swiper 方法
      this.$nextTick(() => {
        this.initSwiter();
      })
    }).catch(error => {
      console.log(error.msg)
    })
  }
}
</script>

<style lang="less">

/* banner轮播 */
.header-play{
  width: 100%;
  height: 210px;

  .swiper-wrapper {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .swiper-pagination-bullets{

    text-align: right;

    .swiper-pagination-bullet{
      margin: 0 3px;
    }
  }
}

</style>
