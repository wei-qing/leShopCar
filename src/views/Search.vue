<template>
  <div class="search">
    <div class="title">商品搜索</div>
    <div class="input-search">
      <van-search v-model="value" show-action label="商品名" placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <div class="search-ct" v-show="isShow">
    <div style="margin-left:10%">全网热搜</div>
    <div class="hotSearch">
      <div class="hotSearch-list" v-for="(item,index) in hotList" :key="index">{{item}}</div>
    </div>
    </div>

    <div class="search-val" v-show="isfalse">

    <div style="width:49%" v-for="(item,index) in searchList" :key="index">
        <img width="100%" :src="item.goodsLogo" alt="">
        <div>{{item.goodsName}}</div>
      </div>
      
    </div>

  </div>
</template>

<script>
import {debounce} from '../untils/debounce'
export default {
  data() {
    return {
      value: "",
      hotList:[],
      isShow:true,
      isfalse:false,
      searchList:[],

    };
  },
  methods:{

       optimizeSearch(){
              this.$getlist.getSearch({
          params:{
           goodsName:this.value,
           page: 1,
           pageSize: 20,
           sortType: 'syn',
          }
          }).then((res)=>{
            console.log(res)
            if(res.data.code==200){
              this.isShow=false
              this.isfalse=true
            }else{
               this.isShow=true
              this.isfalse=false
            }
            this.searchList=res.data.data
          })
          },

      onSearch(){
        
         this.optimizeSearch()
          debounce(this.optimizeSearch,5000)
        
        
      }
  },
  mounted(){
      this.$getlist.getSearchtwo().then((res)=>{
          this.hotList=res.data.data
          console.log(res)
      })
  }
};
</script>

<style>
.search {
  width: 100%;
  height: 1200px;
}
.title {
  width: 100%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 25px;
}
.hotSearch {
  margin-left: 10%;
  width: 80%;
  height: 200px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.hotSearch-list {
  /* width: 20%; */
  margin-left: 10px;
  font-size: 25px;
  /* border: 1px solid grey; */
}
.search-val{
  width: 100%;
  /* height: 1000px; */
  background: skyblue;
  display: inline-flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
}
.search-val div{
  width: 49%;
  height: 500px;
}
</style>