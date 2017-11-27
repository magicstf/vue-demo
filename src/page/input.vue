<template>
  <div>
    <myHeader></myHeader>
    <div class="input">
    	<span v-if="loginType === 'username'">
    	    <label>Username</label>
    	    <input placeholder="Enter your username" key="username-input">
    	</span>
    	<span v-else>
    	    <label>Email</label>
    	    <input placeholder="Enter your email address" key="email-input">
    	</span>
    	<button v-on:click="test">切换</button>
    </div>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
	export default {
		components: { myHeader, myFooter },
		data () {
		  return {
		    list: [],
		    loginType: 'username'
		  }
		},
		created () {
		  this.getData()
		},
		methods: {
			test: function(){
				if (this.loginType != 'username') {
					return this.loginType = 'username'
				}else {
					return this.loginType = 'email'
				}
			}
		}
	}
</script>
