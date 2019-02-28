<template>
  <transition
    appear
    mode="out-in"
    enter-active-class="animated bounceInUp"
    leave-active-class="animated bounceOutDown">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getCityName')
  }
}
</script>
