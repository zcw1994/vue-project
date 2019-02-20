<template>
  <div>
    <mz-banner></mz-banner>
    <mz-tabs></mz-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import mzBanner from '../components/mzBanner/Index'
import mzTabs from '../components/mzTabs/Index'
export default {
  components: {
    mzBanner,
    mzTabs
  }
}
</script>
