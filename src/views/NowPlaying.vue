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
      console.log(res);
      let data = res.data;
      this.bannerList = data.data;
    })
  }
}
</script>
