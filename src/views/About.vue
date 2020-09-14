<template>
  <div class="category">
    <h4 class="title">商品分类</h4>
    <div class="search">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <div class="content">
        <div class="ct-left">
          <div :class="[sellectIndex===index?'ct-left-list-active': 'ct-left-list']" v-for="(item,index) in leftList" :key="index" @click="select(item,index)">{{item.cat_name}}</div>
        </div>
        <div class="ct-right">
          <div class="ct-right-top">
            <div v-for="(item,index) in sortTitle" :key="index">{{item}}</div>
          </div>
          <div class="ce-right-content">
            <div v-for="(item,index) in shopList" :key="index">
              <img width="140" style="border-radius:10px"  :src="item.goodsLogo" alt="">
              <p>{{item.goodsName}}</p>
              {{item.goodsOldPrice}}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:"",
      leftList:[],
      sellectIndex:0,
      sortTitle:['综合','销量','新品'],
      shopList:[],
    }
  },

  methods:{
    select(item,index){
      this.sellectIndex=index;
        this.$getlist.gettwoClassify({
        params:{
          cat_id:item.cat_id
        }
      }).then((res)=>{
      this.shopList=res.data.data
      console.log(res.data.data)
    })
    }
  },

  mounted(){
this.$getlist.gettwoClassify({
        params:{
          cat_id:85
        }
      }).then((res)=>{
      this.shopList=res.data.data
      console.log(res.data.data)
    })
    this.$getlist.getoneClassify({}).then((res)=>{
      this.leftList=res.data.data
      console.log(res.data.data)
    })
    
  }

}
</script>

<style>
.category{
  width: 100%;
  height: 1200px;
  /* background: skyblue; */
}
.title{
  width: 100%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 25px;
  
}
.content{
  width: 100%;
  height: 1000px;
  /* background: pink; */
  display: inline-flex;
  justify-content: center;
}
.ct-left{
  width: 25%;
  height: 100%;
  /* background: cornsilk; */
}
.ct-left-list{
  width: 100%;
  height: 10%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
}
.ct-left-list-active{
   width: 100%;
  height: 10%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid red;
}
.ct-right{
  width: 75%;
  height: 100%;
}
.ct-right-top{
  width: 100%;
  height: 64px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 25px;
}
.ce-right-content{
  width: 100%;
  height: 90%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
}
.ce-right-content div{
  width: 49%;
  /* height: 300px; */
  /* background: skyblue; */
  margin-top: 20px;
}
</style>
