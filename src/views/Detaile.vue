<template>
  <div class="detaile">
    <div class="wraper">
      <div class="title">
        <div>返回</div>
        <div v-for="(item,index) in title" :key="index">{{item}}</div>
      </div>
      <div class="imgs">
        <img width="100%" height="300px" :src="imgs.goodsLogo" alt />
        <div>{{imgs.goodsName}}</div>
        <div style="color:red">
          ￥ {{imgs.goodsPrice}}
          <span style="color:grey;font-size:12px">{{imgs.goodsOldPrice}}</span>
        </div>
        <div class="div1">
          <div>销量 {{imgs.goodsBuyNum}}</div>
          <div>收藏 {{imgs.goodsFav}}</div>
          <div>{{imgs.goodsAre}}</div>
        </div>
        <div class="div1">
          <div v-for="(item,index) in shouhou" :key="index">
            <img style="margin-left:20px" width="20px" :src="item.icon" alt />
            <div>{{item.name}}</div>
          </div>
        </div>

        <div class="myhtml" v-html="imgs.goodsIntroduce"></div>
      </div>
    </div>
    <div class="bottom">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="goCart" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
        <van-goods-action-button type="danger" text="立即购买" @click="addCarts" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs"
export default {
  data() {
    return {
      title: ["商品", "评论", "详情", "推荐"],
      imgs: "",
      detaile: [],
      shouhou: [],
    };
  },
  mounted() {
    var id = this.$route.query.id;
    console.log(id);
    this.$getlist
      .getdetailes({
        params: {
          goodsId: id,
        },
      })
      .then((res) => {
        this.detaile = res.data.data;
        this.imgs = res.data.data[0];
        this.shouhou = res.data.data[2];
        console.log(res.data.data);
      });
  },
  methods: {
    addCart() {
      var ids = this.$route.query.id;
      let data={
            product_id: ids,
            product_amount: 1,
          }
      this.$getlist
        .getAddCarts(
         data
        )
        .then((res) => {
          console.log(res);
        });

    },
    addCarts() {
      this.$getlist
        .getCartss({
          params: {
            page: 2,
            pageSize: 20,
          },
        })
        .then((res) => {
          console.log(res);
          
        });
    },
    goCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.detaile {
  width: 100%;
  height: 1200px;
  /* background: skyblue; */
}
.title {
  width: 100%;
  height: 64px;
  font-size: 25px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.imgs {
  width: 100%;
  font-size: 30px;
}
.div1 {
  width: 100%;
  height: 64px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 22px;
}

.myhtml ::v-deep img {
  width: 100% !important;
  height: 100% !important;
}
/* .bottom {
  width: 100%;
  height: 100px;
  background: skyblue;
  margin-top: 50px;
} */
.wraper {
  width: 100%;
  height: 1200px;
  /* background: skyblue; */
  overflow: scroll;
}
</style>