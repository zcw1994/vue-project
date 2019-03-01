<template >
  <div class="filmInfo">
    <div class="detailFilm-header">
      <div class="goBack" @click="goBack">
        <img src="@/assets/back.png" alt>
      </div>
    </div>
    <div class="film-img">
      <img :src="filmData.poster" alt>
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ filmData.name }}</span>
          <span class="item">{{ filmData.filmType && filmData.filmType.name }}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{ filmData.grade && filmData.grade }}</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text">{{ filmData.category }}</div>
      <div class="film-premiere-time grey-text">{{ getDateStyle(filmData.premiereAt * 1000) }}上映</div>
      <div class="film-nation-runtime grey-text">{{ filmData.nation }} | {{ filmData.runtime }}分钟</div>
      <div class="test grey-text">{{ filmData.synopsis }}</div>
      <!-- <div class="toggle">
        <img src="">
      </div> -->
    </div>
    <div class="actors">
      <div class="actors-title-bar">
        <span class="actors-title-text">演职人员</span>
      </div>
      <div class="row-scroll-wrapper actors-list">
        <ul class="row-scroll-items-nav">
          <li v-for="(item, index) in filmActor" :key="index">
            <img :src="item.avatarAddress" alt>
            <span class="actors-name">{{ item.name }}</span>
            <span class="actors-role">{{ item.role }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="photos">
      <div class="photos-title-bar">
        <span class="photos-title-text">剧照</span>
        <span class="photos-to-all" @click="moreActor">全部({{ filmData.photos && filmData.photos.length }})
          <i class="iconfont icon-gengduo" style="font-size: 20px;"></i>
        </span>
      </div>
      <div class="row-scroll-wrapper photos-list">
        <ul>
          <li v-for="(item, index) in filmPhoto" :key="index">
            <div class="lazy-img-wrap">
              <img
                :src="item"
                alt
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <a class="" style="height: 49px; position: fixed; bottom: 0px; width: 100%;">
      <div class="goSchedule">
        选座购票
      </div
    ></a>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapState } from 'vuex';
export default {
  data () {
    return {
      isShow: false,
      filmData: {}
    };
  },
  methods: {
    getDetailData () {
      this.$http.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154808291248812303321624"}',
          'X-Host': 'mall.film-ticket.film.info'
        },
        params: {
          filmId: this.$route.params.id,
          k: '2197147'
        }
      }).then(Response => {
        // console.log(Response.data);
        let res = Response.data;
        if (res.status === 0) {
          this.filmData = res.data.film;
          this.filmTypeName = res.data.film.filmType.name;
        } else {
          console.log('网络异常，请稍后重试')
        }
      }).catch(error => {
        console.log(error.msg)
      })
    },
    /* 返回 */
    goBack () {
      this.$router.back();
    },
    getDateStyle (val) {
      return new Date(val).getFullYear() + '年' + (new Date(val).getMonth() + 1) + '月' + new Date(val).getDate() + '日'
    },
    // 得到更多的演员
    moreActor () {

    }
  },
  computed: {
    ...mapState([
      'detailFilmId'
    ]),
    /* 导演数据 */
    filmActor () {
      return this.filmData.actors;
    },
    /* 影片剧照 */
    filmPhoto () {
      return this.filmData.photos
    }
  },
  created () {
    this.getDetailData();
  }
};
</script>

<style lang="less">
@import url("./index.less");
</style>
