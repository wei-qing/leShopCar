<template>
  <div>
      <div v-html="this.succeed">
    
      </div>
  </div>
</template>

<script>
export default {
computed:{
    succeed:function(){
        return this.$store.state.alipays
    }
}
}
</script>

<style>

</style>