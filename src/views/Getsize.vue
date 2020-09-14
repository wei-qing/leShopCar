<template>
  <div>
      <div class="title">获取收货地址</div> <div @click="goadd">新增</div>
      <div class="list" v-for="(item,index) in list" :key="index">
          <input type="checkbox" name="" id="" @click="getsite(item)">
          <div>{{item.name}}</div>
          <div>{{item.phone}}</div>
          <div>{{item.province}}</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
        }
    },
methods:{
goadd(){
    this.$router.push('/site')
},
getsite(item){
    console.log(item)
this.$router.push({
    path:'/gonotarize',
    query:{
        items:item
    }
})
this.$store.dispatch("CartSite",item)
}
},
mounted(){
    this.$getlist.getGetSite({
        params:{

        }
    }).then((res)=>{
        console.log(res.data.data)
        this.list=res.data.data
        
    })
}
}
</script>

<style>
.title{
    width: 100%;
    height: 64px;
    text-align: center;
    align-items: center;
}
.list{
    width: 100%;
    height: 100px;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
}
</style>