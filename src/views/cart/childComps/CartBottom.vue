<template>
    <div class="bottom-bar">
      <div class="check-content">
        <check-button class="checked-all" :isChecked="isSeleterAll" @click.native="checkClick" ></check-button>
        <span>全选</span>
      </div>
      <div class="totalPrice">合计 {{totalPrice}}</div>
      <div class="calc" >去结算({{checkLength}})</div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
  name:'CartBottom',
  components:{
    CheckButton
  },
  methods:{
    checkClick(){
        this.isSeleterAll ? this.cartList.forEach(item => item.checked = false) : this.cartList.forEach(item => item.checked = true);
    }
  },
  computed:{
    ...mapGetters(['cartList']),
    isSeleterAll(){
      if(this.cartList.length == 0){
        return false
      }
      return !this.cartList.find(item => !item.checked)
    },
    totalPrice(){
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.cartList.filter(item => {
        return item.checked
      }).length
    }
  }

}
</script>

<style>
.bottom-bar{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  background-color: rgb(245, 223, 226);
  display: flex;
}
.bottom-bar>div{
  flex: 1;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;

}
.calc{
  text-align: center;
}

</style>