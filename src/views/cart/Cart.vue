<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
      <cart-list></cart-list>    
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from 'views/cart/childComps/CartList';
import CartBottom from 'views/cart/childComps/CartBottom'
import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottom,

    },
    methods:{
      
    },
    computed:{
      ...mapGetters({
        length: 'cartlength'
      })
    }
  }
</script>

<style scoped>
#cart{
  height: calc(100vh - 49px);
  position: relative;
}
.nav-bar{
  background-color: rgb(248, 69, 99);
  color: #fff;
  font-weight: 700;
}
.content{
  height: calc(100vh - 99px);
  overflow: hidden;
}
</style>
