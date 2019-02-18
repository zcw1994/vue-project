<template>
  <div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/mzFooter/Index'

export default {
  components: {
    Footer
  }
}
</script>
