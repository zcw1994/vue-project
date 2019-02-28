<template>
  <div class="main">
    <div class="cinemas-search">
      <div class="cinemas-search-input">
        <div class="input-wrap">
          <i class="search-icon iconfont icon-search"></i>
          <form action=".">
            <input type="text" placeholder="输入影城名称" class="search-input" v-model="searchCinema" @keyup="cinemaSearch">
          </form>
          <div class="clean-icon" v-if="isDelete" @click="deleteAll">
            <i class="iconfont icon-qingchu"></i>
          </div>
        </div>
        <router-link tag="div" to="/cinema" class="cancel-btn">取消</router-link>
      </div>
      <div class="cinema-init-area" v-if="isSearch">
        <div class="cinema-nearby">
          <div class="cinema-index-title">离你最近  </div>
          <ul class="cinema-index-detail">
            <li class="cinema-item-detail"
              v-for="item in shortCinemaData"
              :key="item.cinemaId"
              >
              <div class="cinema-item-text"> {{ item.name }} </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="cinemas-list-wrapper" v-else>
        <ul class="cinemas-list">
          <li class="cinema-list-item"
            v-for="item in filterCurCinema"
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
      <div class="cinema-search-result" ref="noCinema" style="display:none;">
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
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isDelete: false,
      searchCinema: '',
      isSearch: true,
      trueSearchData: null
    }
  },
  methods: {
  /* 搜索框的键盘抬起事件 */
    cinemaSearch () {
      if (this.searchCinema !== '') {
        this.isDelete = true;
      } else {
        this.isDelete = false;
      }
      if (this.filterCurCinema.length > 0) {
        this.isSearch = false;
        this.$refs.noCinema.style = 'display:none'
      } else if (this.searchCinema === '') {
        this.isSearch = true;
      } else {
        this.$refs.noCinema.style = 'display:block'
      }
    },
    /* 删除按钮的点击事件 */
    deleteAll () {
      this.searchCinema = '';
      this.isDelete = false;
      this.$refs.noCinema.style = 'display:none'
    }
  },
  computed: {
    ...mapState([
      'cinemaData'
    ]),
    shortCinemaData () {
      return this.cinemaData.slice(0, 5)
    },
    filterCinemaName () {
      return this.cinemaData.map(item => {
        return item.name
      })
    },
    filterCurCinema () {
      let curCinameName = [];
      let curCiname = [];
      if (this.searchCinema !== '') {
        for (let i = 0; i < this.filterCinemaName.length; i++) {
          if (this.filterCinemaName[i].indexOf(this.searchCinema) !== -1) {
            curCinameName.push(this.filterCinemaName[i]);
          }
        }
      }
      this.cinemaData.filter(item => {
        for (let j = 0; j < curCinameName.length; j++) {
          if (item.name.indexOf(curCinameName[j]) !== -1) {
            curCiname.push(item);
          }
        }
      })
      return curCiname;
    }
  }
}
</script>

<style lang="less">
  @import url('./idnex.less');
</style>
