<template>
  <div class="film-lists">
    <ul>
      <li class="nowFilmShow" v-for="item in bannerList" :key="item._id">
        <a href="javascript:;" class="filmItem">
          <div class="filmImg">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="filmDetail">
            <div class="filmName">
              <span class="nowFlimName">{{item.name}}</span>
              <span class="filmType">{{item.type}}</span>
            </div>
            <div class="filmGrade">
              <span class="zcw-label">观众评分</span><span class="labelGrade">{{item.grade}}</span>
            </div>
            <div class="filmActors">
              主演：{{item.actors}}
            </div>
            <div class="filmPlace">
              {{item.place}} | {{item.time}}
            </div>
          </div>
          <div class="doFilm">

            <object><a href="javascript:;" class="buyFilm">购票</a></object>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      bannerList: []
    }
  },
  created () {
    axios.get('http://localhost:3000/films/search').then(res => {
      // console.log(res);
      let data = res.data;
      this.bannerList = data.data;
    })
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
.buyFilm:hover{
  background: #ff5f16;
  color: #ffffff;
}

</style>
