<template>
  <div class="login">
    <div class="login-title">
      <img
        style="margin-left:100px"
        width="50%"
        height="50px"
        src="../assets/img/home/LE_logo_2.png"
        alt
      />
    </div>

    <div class="login-button">
      <van-tabs v-model="active">
        <van-tab title="登录">
          <div class="login-content">
            <van-form @submit="onSubmit">
              <div class="div1">账号</div>
              <van-field
                style="width:80%;margin-left:10%"
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <div class="div1">密码</div>
              <van-field
                style="width:80%;margin-left:10%"
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
              />
              <div class="check">
                <input type="checkbox" name id /> 记住密码
              </div>
              <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" @click="Logins">提交</van-button>
              </div>
            </van-form>
          </div>
        </van-tab>
        <van-tab title="注册">
          <van-form validate-first @failed="onFailed">
            <div class="div1">手机号码</div>
            <van-field
              style="width:80%;margin-left:10%"
              v-model="value1"
              name="pattern"
              placeholder="注册手机为找回密码的唯一凭证"
              :rules="[{ pattern, message: '请输入正确内容' }]"
            />

            <div class="div1">登录名</div>
            <van-field
              style="width:80%;margin-left:10%"
              v-model="value2"
              name="pattern"
              placeholder="中、英文均可，不超过12个字符"
              :rules="[{ userName, message: '请输入正确内容' }]"
            />

            <div class="div1">密码</div>
            <van-field
              style="width:80%;margin-left:10%"
              type="password"
              v-model="value3"
              name="pattern"
              placeholder="3-18位英文，数字，符号，区分大小写"
              :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <div style="width：100%;margin:10%">短信验证码</div>
            <van-field v-model="sms" center clearable label placeholder="  请输入短信验证码">
              <template #button>
                <van-button size="small" type="primary" @click="verification ">发送验证码</van-button>
              </template>
            </van-field>

            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit" @click="onClick">提交</van-button>
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import md5 from "js-md5";
export default {
  data() {
    return {
      active: 2,
      username: "",
      password: "",
      value1: "",
      value2: "",
      value3: "",
      pattern: /\d{6}/,
      userName: /[\u4E00-\u9FA5]/,
      sms: "",
      msgtext: "",
    };
  },
  methods: {

    onSubmit(values) {
      console.log("submit", values);
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    Logins(){
            console.log(this.msgtext);
      if (this.sms == this.msgtext) {
        let params = {
          LoginName: this.username,
          LoginPassword: this.password,
          phone: this.value1,
          isPassing:'yes',
        };
        params.LoginPassword = md5(params.LoginPassword);
        axios
          .post(
            `http://www.hj0819.top:44369/api/LoginPage/Login`,
            qs.stringify(params)
          )
          .then((res) => {
            console.log(res);
            this.$store.dispatch("addLogin",res.data.tnToken.tokenStr)
            if(res.data.code==200){
              alert('登录成功')
              this.$router.push('/home')
            }
          });
      }
    },
    onClick() {
      console.log(this.msgtext);
      if (this.sms == this.msgtext) {
        let params = {
          LoginName: this.value2,
          LoginPassword: this.value3,
          phone: this.value1,
        };
        params.LoginPassword = md5(params.LoginPassword);
        axios
          .post(
            `http://www.hj0819.top:44369/api/LoginPage/AddLogin`,
            qs.stringify(params)
          )
          .then((res) => {
            console.log(res);
          });
      }
    },

    verifyTel() {
      return this.$getlist.getphone({
        params: {
          phone: this.value1,
        },
      });
    },

    varifyUser() {
      return this.$getlist.getuserName({
        params: {
          LoginName: this.value2,
        },
      });
    },
    // },
    async verification() {
      var tel = await this.verifyTel();
      var user = await this.varifyUser();

      console.log(tel);
      console.log(user);

      if (tel.data.code == 200 && user.data.code == 404) {
        this.$getlist
          .getSMS({
            params: {
              phone: this.value1,
              codeType: 0,
            },
          })
          .then((res) => {
            this.msgtext = res.data.msg;
            console.log(this.msgtext);
          });
      }
      if (tel.data.code == 204) {
        console.log("该手机号已经被注册");
      }
      if (user.data.code == 200) {
        console.log("用户已存在");
      }
    },
  },
  mounted() {
    //   console.log(this.value1)
    //   this.$getlist.getphone({
    //      params:{
    //           phone:this.value1
    //      }
    //   }).then((res)=>{
    //       console.log(res)
    //   })
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 1200px;
  /* background: skyblue; */
}
.login-title {
  width: 100%;
  height: 64px;
}
.login-button {
  width: 100%;
  height: 64px;
  margin-top: 10px;
}
.login-content {
  width: 100%;
  /* height: 500px; */
  margin-top: 60px;
}
.div1 {
  height: 70px;
  line-height: 70px;
  margin-top: 20px;
  /* background: pink; */
  padding-left: 10%;
  font-size: 25px;
}
.check {
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding-left: 10%;
}
</style>