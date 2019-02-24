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
                <div class="city-item-text"> {{ item }} </div>
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
            <li class="city-item-detail-white" v-for="city in item.list" :key="city.cityId">
              <div class="city-item-text" @click="changeCity(city.name)">{{ city.name }}</div>
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
            {{ item }}
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
  // computed: {

  // cityData () {
  //   return this.$store.state.cityData;
  // },
  // curCityName () {
  //   return this.$store.state.curCityName;
  // },
  // filterCityData () {
  //   return this.$store.getters.filterCityDate
  // },
  // filterLetters () {
  //   return this.$store.getters.filterLetters
  // }

  // filterCityData () {
  //   let hash = {}; // 用来筛选 数据是否存在
  //   let i = 0; // 一个变量
  //   let res = []; // 实际 存放数据的数组

  //   this.cityData.forEach(item => {
  //     // 1.得到当前循环的首字母
  //     let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
  //     // 2 判断该首字母是否第一次出现

  //     if (hash[firstLetter]) {
  //       // 存在即已经出现过了
  //       var index = hash[firstLetter] - 1;
  //       res[index].list.push(item); // 存在了就存放到数组中该字母对象的list数组中
  //     } else {
  //       // 不存在
  //       hash[firstLetter] = ++i;// 如果不写++i,而写i++的话，第一次一个字母没出现过，走到else判断，然后这个字母的值为0，此时这个字母已经出现并存放到hash对象中，下次继续出现时，走到if判断中，hash[这个字母] = 0，还是false，又判断不存在，所以是不 ok的
  //       let obj = {};
  //       obj.py = firstLetter;// 定义一个首字母的键
  //       obj.list = [item];// 给这个对象定义一个数组，存放这个第一次出现的item数据
  //       res.push(obj)// 再将这个对象添加到数组中
  //     }
  //   });
  //   let temp = res.sort((a, b) => { // 对得到的数组进行再次排序，按照ABCD 的升序进行 ，因此sort 里面要用到 这个字母的 ASCILL值
  //     return a.py.charCodeAt() - b.py.charCodeAt();
  //   })
  //   return temp;
  // },
  // filterLetters () {
  //   return this.filterCityData.map(item => {
  //     return item.py
  //   })
  // }

  // },
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
              curCityName.push(cityItem.name);
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
    this.getCityData();
  }

}
</script>

<style lang="less">
@import url("./index.less");
</style>
