<template >
  <div>
    影片详情页
    <h1>

      传递过来的数据为 {{ $route.params.id }}
    </h1>
    <button @click="change">跳到影片页</button>
  </div>
</template>

<script>
export default {
  methods: {
    change () {
      this.$router.push({
        name: 'film',
        params: {
          name: '张飒',
          age: 18
        }
      })
    }
  },
  created () {
    console.log(this.$route.params.id);
  }
}
</script>
