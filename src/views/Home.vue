<template>
  <div class="container">
    <!-- <el-backtop target=".container">
      <div class="toTop">Top</div>
    </el-backtop> -->
    <div class="home">
      <div class="home-title">
        <img
          style="margin-left:100px"
          width="50%"
          height="50px"
          src="../assets/img/home/LE_logo_2.png"
          alt
        />
      </div>
      <div class="search">
        <van-search v-model="value" placeholder="请输入搜索关键词" @click="goSearch" />
      </div>
      <div class="wraper">
        <div class="banner">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
              <img width="100%" height="230px" :src="item.slide_show_imgUrl" alt />
            </van-swipe-item>
          </van-swipe>
        </div>

        <div class="middle-list">
          <div v-for="(item,index) in list" :key="index">
            <div>
              <img width="60px" :src="item.sp_home_ico" alt />
            </div>
            <div
              style="width:80%;height:30px;line-height:30px;text-align:center;font-size:16px"
            >{{item.sp_home_title}}</div>
          </div>
        </div>

        <div class="category">
          <div class="category-title">
            <div
              @click="onClik(index)"
              :class="[selectIndex===index?'active':'category-title-item']"
              v-for="(item,index) in categorytitle"
              :key="index"
            >{{item.title}}</div>
          </div>
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <div class="category-list">
                <div class="category-list-item" v-for="(item,index) in categorylists" :key="index" @click="goDetaile(item)">
                  <div>
                    <img width="100%" height="180px" v-lazy="item.goodsLogo" alt />
                  </div>
                  <div class="car1">{{item.goodsName}}</div>
                  <div class="car1">{{item.goodsOldPrice}}</div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import {throttle} from '../untils/debounce'
export default {
  name: "Home",
  components: {
  
  },
  data() {
    return {
      value: "",
      banner: [],
      list: [],
      categorylists: [],
      categorytitle: [{ title: "流行" }, { title: "新款" }, { title: "精选" }],
      selectIndex: 0,
      type: ["syn", "new", "sell"],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {

    onLoad(){
      this.$getlist
        .getcategorylist({
          params: {
            sortType: this.type[index],
            page: 1,
          },
        })
        .then((res) => {
          this.categorylists = res.data.data;
          console.log(res);
        });
    },

     onClik(index) {
      this.selectIndex = index;
      console.log(index);
      // this.$getlist
      //   .getcategorylist({
      //     params: {
      //       sortType: this.type[index],
      //       page: 1,
      //     },
      //   })
      //   .then((res) => {
      //     this.categorylists = res.data.data;
      //     console.log(res);
      //   });
      this.onLoad()
      throttle(this.onLoad,2000)
    },

    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.categorylists = [];
          this.refreshing = false;
        }

        this.categorylists.push(...this.categorylists);

        this.loading = false;

        if (this.categorylists.length >= 60) {
          this.finished = true;
        }
      }, 1000);
    },

    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    goDetaile(item){
      console.log(item)
      this.$router.push({
        path:"/detaile",
        query:{
          id:item.goodsId
        }
      })
    },
    goSearch(){
      this.$router.push('/search')
    }

   
  },
  mounted() {
    this.$getlist.gethomelist().then((res) => {
      this.list = res.data.data[0];
      this.banner = res.data.data[1];
      console.log(res.data.data);
    });

    this.$getlist.getcategorylist({}).then((res) => {
      this.categorylists = res.data.data;
      console.log(res);
    });
  },
};
</script>

<style>
.home {
  width: 100%;
  height: 95vh;
  /* background: skyblue; */
}
.wraper {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.container {
  width: 100%;
  height: 95vh;
  overflow-x: hidden;
}
.toTop {
  padding: 10px;
  box-shadow: 0px 0px 5px black;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 260px;/ */
  text-align: center;
  /* background-color: #39a9ed; */
}
.middle-list {
  width: 100%;
  height: 320px;
  /* background: pink; */
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.middle-list div {
  width: 20%;
  height: 50%;
  margin-top: 10px;
}
.category-title {
  width: 100%;
  height: 64px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  font-size: 22px;
  position: sticky;
  top: 0;
  background: white;
}
.category-title-item {
  height: 64px;
  line-height: 64px;
  color: black;
}
.active {
  height: 64px;
  line-height: 64px;
  border-bottom: 2px solid red;
}
.category-list {
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.category-list-item {
  width: 47%;
  height: 450px;
  /* background: skyblue; */
  margin-left: 1%;
  margin-top: 10px;
}
.car1 {
  margin-top: 10px;
}
</style>
