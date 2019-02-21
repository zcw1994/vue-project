<template>
  <div>
    <div class="swiper-container header-play">
      <div class="swiper-wrapper">
        <a href="javascript:;" class="swiper-slide" v-for="item in bannerList" :key="item._id">
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
    axios.get('http://localhost:3000/banner/search', {
      params: {
        pageSize: 10
      }
    }).then((res) => {
      // console.log(res);
      let data = res.data;

      this.bannerList = data.data

      // 数据更新之后，在更新实例swiper 方法
      this.$nextTick(() => {
        this.initSwiter();
      })
    })
  },

  // 需要在挂载文件后才能实例化swiper
  mounted () {
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
