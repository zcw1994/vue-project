// vuex 的仓库文件

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import a from './modules/a'
import b from './modules/b'
Vue.use(Vuex);

// 创建 vuex 的实例仓库
let store = new Vuex.Store({
  // 选项对象
  // 状态(即数据) 项目中多个组件需要共享的数据
  state: {
    // 当前定位或需要切换的城市
    curCityName: '',
    // 当前 点击城市的 id
    curCityId: '440300',
    // 城市列表数据
    cityData: [],
    // tab的高度
    tabsTop: '',
    // 首页 tab 控制切换 动画的变量
    filmType: 'nowPlaying',
    // 电影的详情数据
    detailFilmId: '',
    /* 影院的数据 */
    cinemaData: []
  },
  /**
   * 是对state 中的 数据进行 二次处理 并返回相应数据的 一个属性 类似于vue 中的computed 计算属性
   * @param {Object} state 即仓库的state
    */
  getters: {
    filterCityData (state) {
      let hash = {}; // 用来筛选 数据是否存在
      let i = 0; // 一个变量
      let res = []; // 实际 存放数据的数组

      state.cityData.forEach(item => {
        // 1.得到当前循环的首字母
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
        // 2 判断该首字母是否第一次出现

        if (hash[firstLetter]) {
          // 存在即已经出现过了
          var index = hash[firstLetter] - 1;
          res[index].list.push(item); // 存在了就存放到数组中该字母对象的list数组中
        } else {
          // 不存在
          hash[firstLetter] = ++i;
          let obj = {};
          obj.py = firstLetter;// 定义一个首字母的键
          obj.list = [item];// 给这个对象定义一个数组，存放这个第一次出现的item数据
          res.push(obj)// 再将这个对象添加到数组中
        }
      });
      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      })
      return temp;
    },
    /**
     *
     * @param {Object} state
     * @param {Object} getters 仓库的getters 对象
     */
    filterLetters (state, getters) {
      return getters.filterCityData.map(item => {
        return item.py
      })
    },
    filterHotCity (state, getters) {
      let HotCityList = [];
      getters.filterCityData.filter((item) => {
        item.list.filter(itemLIst => {
          if (itemLIst.isHot) {
            HotCityList.push(itemLIst);
          }
        })
      });
      return HotCityList
    }
  },
  mutations: {
    /**
     * 修改 curCityName
     * @param {Object}  当前仓库的 state
     * @param {Object}  传递过来的参数
     */
    chgCityName (state, payload) {
      state.curCityName = payload.name;
      if (payload.cityId && payload.cityId !== '') {
        state.curCityId = payload.cityId;
      } else {
        state.curCityId = '440300';
      }
    },
    /**
     *  修改 cityData
     * @param {Object} 当前仓库的 state
     * @param {Object}  传递过来的参数 payload
     */
    chgCityData (state, payload) {
      state.cityData = payload.data.cities
    },
    chgFilmType (state, payload) {
      state.filmType = payload
    },
    /* 影片Id */
    chgFilmId (state, payload) {
      state.detailFilmId = payload
    },
    /* 影院数据更改 */
    chgCinemaData (state, payload) {
      state.cinemaData = payload;
    }
  },

  actions: {
    /* 调用百度 API, 获取当前定位的城市名称 */

    getCityName ({ commit }) {
      /* eslint-disable   */
      var myCity = new BMap.LocalCity();
      myCity.get(result => {
        commit('chgCityName', result);
      })
    },
    /* eslint-enable   */
    getCityData ({ commit, state, getters }) {
      axios.get('https://m.maizuo.com/gateway?k=3700223', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154808291248812303321624"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => {
        console.log(res.data);
        let data = res.data;
        if (data.status === 0) {
          // this.cityData = data.data.cities;
          // this.$store.commit('chgCityData', data);
          commit('chgCityData', data);
        } else {
          alert(data.msg);
        }
      });
    }
  },
  modules: {
    ma: a,
    mb: b
  }
})

export default store;
