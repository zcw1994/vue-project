// 一级路由
<template>
  <div class="layout-body">
    <div class="body-header">
      <div class="bodyHeader-left">
        <router-link to="/">
          <i class="iconfont icon-cuowu"></i>
        </router-link>
      </div>
      <div class="bodyHeader-right">
        <span class="bodyTitle">当前城市 -{{ curCityName }}</span>
      </div>
    </div>
    <div class="bodySearch">
      <input type="text" placeholder="输入城市名或拼音" class="searchInput" @click="focus" @keyup="seachCity" v-model="searchCotent">
      <i class="search-icon iconfont icon-search"></i>
      <i class="fault-icon iconfont icon-qingchu" v-if="isDelete" @click="deleteAll"></i>
      <div class="cancelsearch" ref="showItem" @click="noneItem">取消</div>
    </div>
    <div class="main-cityList">
      <ul class="main-indexList">
        <div class="reccommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在的城市</div>
            <ul class="city-index-detail clearfix">
              <li class="city-item-gprs">
                <div class="city-item-text">定位失败 </div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail clearfix">
              <li class="city-item-gprs"
                v-for="(item, index) in filterHotCity"
                :key="index"
                @click="changeCity(item)"
                >
                <div class="city-item-text"> {{ item.name }} </div>
              </li>
            </ul>
          </div>
        </div>
        <li
          class="main-indexsection"
          v-for="(item, index) in filterCityData"
          :key="index"
          :id="item.py"
          :ref="item.py"
        >
          <p class="main-indexsection-index">{{item.py}}</p>
          <ul>
            <li class="city-item-detail-white" v-for="city in item.list" :key="city.cityId" :cityId="city.cityId">
              <div class="city-item-text" @click="changeCity(city)">{{ city.name }}</div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="mint-indexlist-nav">
        <ul class="mint-indexlist-navlist">
          <li
            class="mint-indexlist-navitem"
            v-for="(item, index) in filterLetters"
            :key="index"
            @click="submitPy(item)"
          >{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="city-search-result" ref="searchCityList" style="">
      <div class="city-search-result-list" v-if="isShow">
        <ul>
          <li
            v-for="(item, index) in filterCurrectCity"
            :key="index"
            @click="changeCity(item)"
            >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="empty-result" v-else>
        <img src="@/assets/unfind.png" alt="">
        <p>没有找到匹配的城市</p></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data () {
    return {
      searchCotent: '',
      isShow: false,
      isDelete: false
    }
  },
  computed: {
    // 辅助函数
    ...mapState(['cityData', 'curCityName']),
    // ...mapState('ma', {
    //   'maName': (state) => state.name
    // }),
    ...mapGetters(['filterCityData', 'filterLetters', 'filterHotCity']),
    // maName () {
    //   return this.$store.state.ma.name;
    // }
    filterCityPy () {
      let cityPy = [];
      this.filterCityData.filter(item => {
        item.list.filter(itemLIst => {
          cityPy.push(itemLIst.pinyin);
        })
      });
      return cityPy;
    },
    filterSearchCity () {
      let seachCityName = [];
      this.filterCityData.filter(item => {
        item.list.filter(itemLIst => {
          seachCityName.push(itemLIst.name);
        })
      });
      return seachCityName;
    },
    filterCurrectCity () {
      let curCityPy = [];
      let curCityName = [];
      if (this.searchCotent !== '') {
        for (let i = 0; i < this.filterCityPy.length; i++) {
          if (this.filterCityPy[i].indexOf(this.searchCotent) !== -1) {
            curCityPy.push(this.filterCityPy[i]);
          }
        }
        for (let j = 0; j < this.filterSearchCity.length; j++) {
          if (this.filterSearchCity[j].indexOf(this.searchCotent) !== -1) {
            curCityName.push(this.filterSearchCity[j]);
          }
        }
      }
      this.filterCityData.filter(item => {
        item.list.filter(cityItem => {
          for (let j = 0; j < curCityPy.length; j++) {
            if (cityItem.pinyin.indexOf(curCityPy[j]) !== -1) {
              curCityName.push(cityItem);
            }
          }
        })
      })
      return curCityName;
    }
  },
  methods: {
    // mapMUtation这个辅助函数 定义好，会给组件一个方法，方法名即为 定义好的 mutation
    ...mapMutations([
      'chgCityName',
      'chgCityData'
    ]),
    ...mapActions([
      'getCityData'
    ]),
    /**
     * 页面右侧的字母导航点击
     * @param {String} py 点击的首字母
     * @return undefine
     */
    submitPy (py) {
      // 1.获得匹配 py 字母的元素的offsetTop  高度
      // console.log(document.getElementById(py));
      // this.$refs[py]
      document.documentElement.scrollTop = document.getElementById(
        py
      ).offsetTop;
    },
    changeCity (city) {
      // this.$store.commit('chgCityName', city);
      this.chgCityName(city);
      this.$router.back();
    },
    /* 搜索框点击事件（获取焦点事件） */
    focus () {
      this.$refs.showItem.style = 'display: inline-block'
    },
    /* 取消按钮的点击事件 */
    noneItem () {
      this.$refs.showItem.style = 'display: none';
      this.$refs.searchCityList.style = 'display: none'
    },
    /* 搜索框的键盘按下事件 */
    seachCity () {
      this.$refs.searchCityList.style = 'display: block';
      if (this.searchCotent !== '') {
        this.isDelete = true;
      } else {
        this.isDelete = false;
      };
      this.$nextTick(() => {
        // console.log(this.filterCurrectCity)
        if (this.filterCurrectCity.length > 0) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      })
    },
    // 删除icon 的点击事件
    deleteAll () {
      this.searchCotent = '';
      this.isDelete = false;
    }
  },
  created () {
    // this.getCityData();
    // this.$store.dispatch('getCityData');
    console.log(this.filterCurrectCity)
    this.getCityData();
  }

}
</script>

<style lang="less">
@import url("./index.less");
</style>
