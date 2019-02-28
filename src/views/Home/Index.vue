// 一级路由
<template>
  <div>
    <transition
      appear
      mode="out-in"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/mzFooter/Index'

export default {
  components: {
    Footer
  }
}

</script>
