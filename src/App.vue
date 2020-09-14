<template>
  <div id="app">
 
    <router-view/>
    <routers v-if="this.$route.meta.isShow" />
  </div>
</template>

<script>
import routers from "./components/routers"
export default {
  components:{
    routers
  }
}
</script>

<style lang="scss">
 *{
   margin: 0;
   padding: 0;
 }
</style>
