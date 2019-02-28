<template>
  <transition
    appear
    mode="out-in"
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutDown">
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
