<template>
  <div class="site">
      <div class="title">
          新增收获地址
      </div>
      <div>
          姓名：<input type="text" name="" v-model="name" id=""><br>
          联系电话：<input type="text" name="" v-model="phone" id=""><br>
          省份：<input type="text" name="" v-model="val1" id=""><br>
          地级市：<input type="text" name="" v-model="val2" id=""><br>
          县级市：<input type="text" name="" v-model="val3" id=""><br>
          街道：<input type="text" name="" v-model="val4" id="">

        <div @click="add">立即创建</div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        name:"",
        phone:'',
        val1:"",
        val2:"",
        val3:"",
        val4:"",
    }
},
methods:{
    add(){
        this.$getlist.getShopSite({
            data:{

            Name:this.name,
            Phone:this.phone,
            Province:this.val1,
            City:this.val2,
            District:this.val3,
            Address:this.val4,
            }

        }).then((res)=>{
            console.log(res)
        })
    }
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
</style>