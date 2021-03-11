<template>
    <div class="check-button">
        <img v-if="isChecked === true" src="~assets/img/cart/select_avtive.svg" alt="">
        <img v-else src="~assets/img/cart/select.svg" alt="">
    </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{ 
      isChecked:{
        type:Boolean,
        default(){
          return false
        }
      }    
  },
  methods:{
  }
}
</script>

<style>
.check-button{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px; 

}
.div1{
    border:4px solid #ff5777;  
}
.check-button img{
  display: block;
  width: 25px;
  height: 25px;
}
.check{
  background-color: pink;
  
}

</style>