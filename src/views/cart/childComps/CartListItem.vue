<template>
  <div class="list-item">
    <check-button class="item-checked" :isChecked="item.checked" @click.native="checkClick"></check-button>
      <div class="item-img">
        <img :src="item.image" alt="">
      </div>
      <div class="item-info">
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
        <div class="info-bottom">
          <div class="item-price">${{item.price}}</div>
          <div class="item-count">x{{item.count}}</div>
        </div>
    </div>
  </div>
</template> 

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        CheckButton
    },
    data(){
        return {
            
        }
    },
    methods:{
      checkClick(){
        console.log(this.item);
        this.item.checked = !this.item.checked
        console.log(this.item.checked);
      }
    }
}
</script>

<style scoped>
.list-item{
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-checked{
  flex: 0.1;
}
.item-img{
  width: 100%;
  height: 100%;
  flex: 0.3;
}
.item-img img{
  width: 100%;
  height: 100%;
  display: block;
}
.item-info{
  padding: 5px 10px;
  color: #333;    
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-title{
  font-size: 15px;
}
.item-title{
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.item-desc{
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-desc{
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}
.info-bottom{
  display: flex;
  justify-content: space-between;
}

</style>