<template>
    <div class="cate-goods">
        <ul>
            <li class="left-item" :class="{leftActive:isCate === index}"  @click="itemClick(index)" v-for="(item,index) in categoods" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        categoods:{
        Type:Object,
        default(){
            return {}
        }            
        }
    },
    data(){
        return {
            isCate:0
        }
    },
    methods:{
        itemClick(index){
            this.isCate = index;
            this.$emit('itemClick',index)
        },
    }

}
</script>

<style>
.cate-goods{
    position: relative;
    left: 0;
    width: 80px;
    font-size: 14px;
}
.left-item{
    text-align: center;
    width: 100%;
    height: 42px;
    line-height: 42px;
    background-color: #f1f1f1;
}
.leftActive{
    background-color: #fff;
    border-left: 3px solid pink;
    color: pink;
    font-weight: 700;
}

</style>