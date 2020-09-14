<template>
  <div class="notarize">
    <div class="title" @click="add">确认订单</div>
    <div @click="goSite">
      地址
      <div>{{this.cartSite.name}}</div>
      <div>{{this.cartSite.phone}}</div>
      <div>{{this.cartSite.province}}</div>
    </div>
    <div class="notarize-ct">
      <div class="notarize-list" v-for="(item,index) in lists" :key="index" >
            <div>{{item[1].shopName}}</div>
            <div>
                <div><img :src="item[0].goodsLogo" alt=""></div>
                <div>
                    <p>{{item[0].goodsName}}</p>
                    <p>{{item[0].goodsOldPrice}}</p>
                </div>
            </div>
      </div>
    </div>
    <div class="buttom">
      <div>应付金额：</div>
      <div>共计：</div>
      <div @click="gopay">去支付</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      lists: [],
     
    };
  },
  methods: {
    add() {
      console.log(this.ids);
    },
    goSite() {
      this.$router.push("/getsize");
    },
  gopay(){
    this.$router.push('/pay')
  }
  },
  created() {
    
    console.log(this.ids);
    //   let list = this.ids
    let i = this.ids.join(" ");
    //   this.ids = list
    console.log(i);
    this.$getlist
      .getShowCart({
        params: {
          goodsid: i,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.lists = res.data.data;
        // this.lists=res.data.data[0]
        console.log(this.lists);
      });
  },
  computed: {
    ids: function () {
      return this.$store.state.ids;
    },
     cartSite: function () {
      return this.$store.state.cartsite;
    },
  },
};
</script>

<style>
.notarize {
  width: 100%;
  height: 1200px;
}
.title {
  width: 100%;
  height: 64px;
  text-align: center;
  line-height: 64px;
  border-bottom: 1px solid gray;
}
.notarize-ct {
  width: 100%;
  height: 1000px;
  overflow: scroll;
}
.notarize-list {
  width: 100%;
  height: 400px;
  /* background: pink; */
  margin-top: 10px;
}
.buttom{
  width: 100%;
  height: 64px;
  background: skyblue;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
</style>