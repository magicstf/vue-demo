<template>
  <div>
    <div class="searchlist-normal">
      <div class="top-bg">
        <h1>小白导购管理后台</h1>
      </div>
        <form class="login-form" @submit.prevent="login">
          <p class="username">账&nbsp;&nbsp;&nbsp;号：<input v-model="username" type="text" name="username" id="username"></p>
          <p class="pwd">密&nbsp;&nbsp;&nbsp;码：<input v-model="password" type="password" name="pwd" id="pwd"></p>
          <input class="login-btn" type="submit" value="登   陆">
        </form>
    </div>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
import cookie from '../utils/cookie.js'

	export default {
		components: { myHeader, myFooter },
		data () {
		  return {
		    username: "admin",
        password: "admin",
		  }
		},
		created () {
		  // this.getData()
		},
		methods: {
      login: function(){
        var self = this;
        const params = {
          username: self.username,
          password: self.password
        }
        if(!this.username){
          alert("用户名不能为空！");
          return;
        }
        if(!this.password){
          alert("密码不能为空！");
          return;
        }
        this.$api.get('/admin/login',params, function(result){
          //将登陆成功的状态放入cookie
          cookie.setCookie("login",result.data,1);

          console.log(result);
          //设置登录成功后跳转的路由地址
          self.$router.push({path:'/'});
        })
      }
		}
	}
</script>
<style type="text/css">
  html,body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  .searchlist-normal {
    position: relative;
  }
  .top-bg {
    width: 100%;
    height: 260px;
    background:rgba(255, 102, 4, 1); 
    position: relative;
  }
  h1 {
    margin-left: 50%;
    display: inline-block;
    text-align: center;
    font-size: 28px;
    color: white;
    font-weight: normal;
    position: absolute;
    transform: translate(-50%,0);
    top: 8rem;

  }
  .login-form {
    position: absolute;
    margin-left: 50%;
    left: -290px;
    top: 215px;
    width: 580px;
    height: 330px;
    padding: 50px 100px;
    background: #fff;
    background-color: rgb(255,255,255,1);
    box-sizing: border-box;
    border: 1px solid rgba(211,211,211,1);
  }
  .username,.pwd {
    font-family: '微软雅黑 Regular', '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }
  .username input,.pwd input{
    width: 310px;
    height: 36px;
    border: 1px solid rgba(215, 215, 215, 1);
  }
  .login-btn {
    width: 142px;
    height: 40px;
    font-size: 18px;
    background-color: rgba(240,124,46,1);
    border-radius: 2px;
    border:none;
    font-size: 18px;
    color: #fff;
    position: absolute;
    margin-left: 50%;
    left: -71px;
    bottom:80px;
  }
</style>