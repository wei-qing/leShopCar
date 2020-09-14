<template>
  <div class="cart">
    <div class="title">购物车</div>
    <div class="cart-ct">
      <div >
        <van-swipe-cell v-for="(item,index) in cartList" :key="index">
          <van-card
            num="2"
            :price="item.price"
            desc="描述信息"
            :title="item.title"
            class="goods-card"
            :thumb="item.image"
          >
          </van-card>

          <van-checkbox v-model="checked"></van-checkbox>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="delClick(item)" />
          </template>
        </van-swipe-cell>
      </div>
    </div>

    <div class="wraper-price">
      <div>全选</div>
      <div>合计：￥ {{allprice}}</div>
      <div @click="gonotarize">去结算({{count}})</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      cartList: [],
      checked: true,
      count:Number,
    };
  },
  created() {
    this.$getlist.getCartss().then((res) => {
      console.log(res.data);
      // this.cartList = res.data.data;
      if(res.data.code==200){
        let list=res.data.data;
        console.log(list)
        if(list[list.length-1]&&list.length!=0){

        }else{
          if(list.length==0){

          }else{
            list.pop()
          }
        }
        this.cartList=list
      }
      
      console.log(this.cartList);
      this.$store.dispatch("addCarts", res.data.data);
    });
  },
  methods:{
    delClick(item){
       this.$getlist.getDelCart({
        
           carid:item.cart_id
         
       }).then((res) => {
      console.log(res);
     
    }).catch((err)=>{
      console.log(err)
    });

    this.$getlist.getCartss().then((res) => {
      console.log(res);
      this.cartList = res.data.data;
      var cartLists=this.cartList
     
        cartLists.pop()
    
      this.cartList=cartLists
      console.log(this.cartList);
    });

    },
    gonotarize(){
      this.$router.push('/gonotarize')
    }
  },
  computed:{
    allprice(){
      var tem=0
      this.cartList.forEach((ele)=>{
       tem+=ele.price
      })
      return tem
    }
  },
  mounted(){
    this.$getlist.getCartCount().then((res)=>{
      console.log(res)
      this.count=res.data.data
    })
  }
};
</script>

<style>
.cart {
  width: 100%;
  height: 1200px;
}
.title {
  width: 100%;
  height: 64px;
  font-size: 25px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
}
.cart-ct {
  width: 100%;
  height: 1000px;
  background: skyblue;
  overflow: scroll;
}
.goods-card {
  margin: 0;
}

.delete-button {
  height: 100%;
}
.wraper-price{
  width:100%;
  height: 64px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
</style>