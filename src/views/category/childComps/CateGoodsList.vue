<template>
    <div class="goods-list">
            <div class="list-item" v-for="(item,index) in goodslist" :key="index">
                <a :href="item.link">
                    <div class="cate-img">
                        <img :src="item.image" alt="">
                    </div>
                    <p>{{item.title}}</p>
                </a>
            </div>
            <div class="cllc"></div>
    </div>
</template>

<script>
export default {
    props:{
        goodslist:{
            Type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style>
.goods-list{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin: 50px 10px;
}
.list-item{
    flex: 1;
}
.cate-img{
    width: 80px;
    height: 80px;
}
.cate-img img{
    width: 100%;
    height: 100%;
}
p{
    text-align: center;
    padding: 8px 0;
    font-size: 12px;
    }

</style>