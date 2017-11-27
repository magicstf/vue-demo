<template>
  <div>
    <myHeader></myHeader>
    <div class="searchlist-normal">
      <ul>
        <li class="product-list" v-for="i in list">
          <div class="pro-img" >
          	<img v-bind:src="i.imageUrl" v-bind:alt="i.wareName">
          	<img src="//st.360buyimg.com/so/images/search/hot-pic.png" class="hot-pic" />
          </div>
          <div class="product-info">
          	<div class="product-name">{{i.wareName}}</div>
          	<div class="gray-icon">
          		<span v-for="tag in i.tagAttr">{{tag}}</span>
          	</div>
          	<div class="product-price">{{i.price}}</div>
          	<div class="gray-pro-info">
          		<span class="self-sell">自营</span>
          		<span>{{i.commentCount}}条评价</span>
          		<span>{{i.goodRate}}好评</span>
          	</div>
          </div>
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
import urlParams from '../utils/get-url-param.js'
	export default {
		components: { myHeader, myFooter },
		data () {
		  return {
		    list: [],
		  }
		},
		created () {
		  // this.getData()
		},
		methods: {
		  // getData () {
		  // 	var self = this;
		  // 	const params = {
		  // 		category: "",
		  // 	    key: "笔记本",
		  // 	    page:1
		  // 	};
		  //   this.$api.post('product', params, function(r){
		  //     self.list = r.data
		  //     console.log(self.list);
		  //   })
		  // }
		}
	}
</script>

