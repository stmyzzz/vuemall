<template>
  <div class="category">
    <nav-bar class="nav">
        <div  slot="center">商品分类</div>
    </nav-bar>
    <div class="category-info">
      <scroll ref="scroll" class="content">
        <cate-goods @itemClick="itemClick" :categoods="categoods"></cate-goods>
      </scroll>
      <scroll ref="scrolls" class="contents">
        <cate-goods-list :goodslist="goodslist"> </cate-goods-list>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import CateGoodsList from 'views/category/childComps/CateGoodsList'
  import CateGoods from 'views/category/childComps/CateGoods'
  import {getCategory,getCateItem} from 'network/category.js'
  export default {
    name: "Category",
    data() {
      return {
        scroll: null,
        goodslist:{},
        categoods:{}
      }
    },
    components:{
      NavBar,
      Scroll,
      CateGoodsList,
      CateGoods
    },
    // 组件创建完后调用
    mounted() {
      this.getCategory();
      this.default();
    },
    methods: {
/*       btnClick() {
        console.log('btnClick');
      },
      divClick() {
        console.log('divClick');
      } */
      getCategory(){  
        getCategory().then(res =>{
          this.categoods = res.data.category.list
          console.log(this.categoods);
        })
      },
      itemClick(index){
        const data = this.categoods[index].maitKey
        console.log("data");
        getCateItem(data).then(res =>{
          this.goodslist = res.data.list
          console.log(this.goodslist);
        })
      },
      default(){
                getCateItem('3627').then(res =>{
          this.goodslist = res.data.list
          console.log(this.goodslist);
        })
      }
    }
  }
</script>

<style scoped>
  .category{
    height: 100vh;
    width: 100%;
  }
  .nav{
    background-color: rgb(255, 66, 98);
    color: #fff;
  }
  .category-info{
    display: flex;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  .content{
    overflow: hidden;
  }
  .contents{
    flex: 1;
    overflow: hidden;
    
  }
  

</style>
