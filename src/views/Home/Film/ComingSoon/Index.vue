<template>
  <div class="film-lists">
      <ul>
        <li class="nowFilmShow" v-for="item in bannerList" :key="item.filmId" @click="toDetail(item)">
          <a href="javascript:;" class="filmItem">
            <div class="filmImg">
              <img :src="item.poster" alt="">
            </div>
            <div class="filmDetail">
              <div class="filmName">
                <span class="nowFlimName">{{item.name}}</span>
                <span class="filmType">{{ item.filmType.name }} </span>
              </div>
              <div class="filmGrade">

              </div>
              <div class="filmActors">
                主演：{{ item.actors ? item.actors.map(itemList => itemList.name).join(' ') : '暂无主演' }}
              </div>
              <div class="filmPlace">
                上映日期：{{   getDateStyle(item.premiereAt *1000)  }}
              </div>
            </div>
            <div class="doFilm">
              <object><a href="javascript:;" class="buyFilm">购票</a></object>
            </div>
          </a>
        </li>
      </ul>
      <div class="more-films" v-if="pageNum >= pages"> 别点了，我也是有底线的 </div>
    <button class="more-films" @click="loadMore" v-else >点击加载更多 ▽ </button>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      bannerList: [],
      pageNum: 1,
      pageSize: 10,
      maxPage: '',
      total: ''
    }
  },
  methods: {
    getFutureData () {
      this.$http.get('https://m.maizuo.com/gateway', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154808291248812303321624"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        params: {
          cityId: 440100,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 2,
          k: 2386867
        }
      }).then(res => {
        // console.log(res.data);
        let data = res.data;
        // console.log(data);
        if (data.status === 0) {
          this.bannerList = this.bannerList.concat(data.data.films);
          this.total = data.data.total;
        } else {
          console.log('网络有误，请稍后重试');
        }
      }).catch(error => {
        console.log(error.msg);
      })
    },
    loadMore () {
      this.pageNum++;
      this.getFutureData();
    },
    // 修改时间搓 所得到的的时间格式
    getDateStyle (val) {
      return new Date(val).getFullYear() + '年' + (new Date(val).getMonth() + 1) + '月' + new Date(val).getDate() + '日'
    },
    // 跳转详情页操作
    toDetail (film) {
      this.chgFilmId(film.filmId);
      this.$router.push('/detail/' + film.filmId)
    },
    ...mapMutations([
      'chgFilmId'
    ])
  },
  computed: {
    // 计算总共有几页数据
    pages () {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  created () {
    this.getFutureData();
  }
}
</script>

<style lang="less">
  /* 影片展示区 */
/* li标签 */
.nowFilmShow{
  display: block;
  padding: 15px 15px 15px 0px;
  border-bottom: 1px solid #cccccc;
  /* 大a标签 */
  .filmItem{
    display: flex;
    position: relative;
    height: 94px;
    align-items: center;
    /* 影片图 */
    .filmImg{
      float: left;
      width: 66px;
      height: 94px;
      img{
        width: 66px;
        height: 94px;
      }
    }
    /* 影片详细 */
    .filmDetail{
      flex: 1;
      margin: 0 10px;
      height: 82px;
      .filmName{
        height: 22px;
        line-height: 22px;
        .nowFlimName{
          display: inline-block;
          font-size: 16px;
          color: #191a1b;
        }
        .filmType{
          display: inline-block;
          font-size: 10px;
          height: 14px;
          line-height: 14px;
          background: #d2d6dc;
          color: #ffffff;
          padding: 0 2px;
          border-radius: 2px;
          margin-left: 5px;
        }
      }
      .filmGrade{
        height: 20px;
        box-sizing: border-box;
        .zcw-label{
          display: inline-block;
          height: 16px;
          width: 70px;
          font-size: 13px;
          color: #797d82;
        }
        .labelGrade{
          font-size: 14px;
          color: #ffb232;
        }
      }
      .filmActors{
        height: 20px;
        width: 210px;
        line-height: 20px;
        color: #797d82;
        font-size: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .filmPlace{
        height: 19px;
        line-height: 19px;
        color: #797d82;
        font-size: 13px;
      }
    }
    /* 影片操作区 */
    .doFilm{
      float: right;
      /* 购买按钮 */
      .buyFilm{
        display: inline-block;
        width: 40px;
        height: 25px;
        line-height: 25px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border: 1px solid #ff5f16;
        border-radius: 4px;
      }
    }
  }
}
/* 加载更多按钮 */
.more-films{
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 16px;
  color: #191a1b;
  background: #f4f4f4;
  text-align: center;
}

</style>
