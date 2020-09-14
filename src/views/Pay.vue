<template>
  <div>
    <div class="title">确认订单</div>
    <div>
      <van-radio-group v-model="radio">
        <div>支付宝支付</div>
        <van-radio name="1">单选框 1</van-radio>
        <div>微信支付</div>
        <van-radio name="2">单选框 2</van-radio>
        <div>余额支付</div>
        <van-radio name="3">单选框 3</van-radio>
      </van-radio-group>
    </div>

    <!-- 密码输入框 -->

    <div v-show="isShow">
      <van-password-input
        :value="value"
        info="密码为 6 位数字"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
    <div class="title" @click="confirmPay">确认支付</div>
  </div>
</template>

<script>
import qs from "qs";
import md5 from "js-md5";
export default {
  data() {
    return {
      radio: "3",
      list: ["支付宝支付", "微信支付", "余额支付"],
      value: "",
      showKeyboard: true,
      isShow: false,
      code:Number,
      orderNumber:Number,
      //   value1:''
    };
  },
  // 余额支付
  watch: {
    value(newval) {
      console.log(newval);

      if (this.value.length == 6) {
        var data = {
          paypwd: newval,
        };
        data.paypwd = md5(data.paypwd);
        console.log(this.value);
        this.$getlist.getVerify(data).then((res) => {
          console.log(res);
          this.code=res.data.code
         console.log(this.code)

          if (this.code == 200) {
            let data={
                  orderNum: this.orderNumber,
                }
            this.$getlist
              .getPay(data)
              .then((res) => {
                console.log(res);
                if(res.data.code==201){
                  this.$router.push('/prosperity')
                }
              });
          }
        });
      }

       
    

    },
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    // 支付宝支付
    confirmPay() {
      console.log(this.radio)
      if(this.radio==1){
        let data={
          OutTradeNo:this.orderNumber,
          Subject :'标题吧',
          ProductCode :'QUICK_WAP_WAY',
          TotalAmount :'1399'
        }
        this.$getlist.getAlipay(
          data
        ).then((res)=>{
          console.log(res)
          this.alipay=res.data.data
          console.log(res.data.data)
          if(res.data.code==201){
            this.$router.push('/succeed')
          }
          this.$store.dispatch("alipay",res.data.data)
                 var form = res.data.data;
          const div = document.createElement("div");
          div.innerHTML = form;
          document.body.appendChild(div);
          document.forms[0].submit();
        })
      }else{
      this.isShow = true;

      }

    },
  },
  created() {


    // 创建订单
    console.log(this.ids.join(" "));
    let data = {
      price: "299",
      consignee_addr: "111,13323567878,北京市 北京市 北京市 111",
      goodsId: this.ids.join(" "),
      isFcart: 'yes',
      num: 1,
    };
    this.$getlist.getCreatePays(
      data
       ).then((res) => {
      console.log(res);
      this.orderNumber=res.data.data[0].orderNumber
      console.log(this.orderNumber)

    });
 

  },
  computed: {
    ids: function () {
      return this.$store.state.ids;
    },
  },
};
</script>

<style>
.title {
  width: 100%;
  height: 64px;
  text-align: center;
  line-height: 64px;
  border-bottom: 1px solid gray;
}
</style>