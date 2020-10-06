<template>
  <div>
    <van-nav-bar title="登录" left-arrow style="height:44px">
      <template #left>
        <i class="iconfont leftarrow" @click="backHandler">&#xe601;</i>
      </template>
    </van-nav-bar>
    <a href="https://sta.guazi.com/we_client/downloadApp.html#detail" class="login-banner">
      <img src="https://sta.guazistatic.com/c2c_uc/pic6@3x.117ead0a798bdaeeecc22929bbe59eb8.png" alt="" class="banner-img">
    </a>
    <van-form @submit="onSubmit" style="margin:0.25rem">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        style="margin-bottom:0.16rem;padding:0"
      />
      <van-field
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        style="padding:0"
        >
        <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin-top:0.25rem;width:3.27rem;padding:0" @click="loginHandler">
        <van-button square block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar,Form,Field,Button} from "vant";
Vue.use(Field);
Vue.use(Button);
Vue.use(Form);
Vue.use(NavBar);
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    backHandler(){
        history.back();
    },
    loginHandler(){
        this.$router.push("/usercenter");
    }
  }
};
</script>

<style lang="stylus" scoped>
.leftarrow 
  margin-left -0.08rem
  font-size 0.2rem
.login-banner
  width 100%
  height 1.5rem
  .banner-img
   width 100%
   height 1.5rem
</style>
