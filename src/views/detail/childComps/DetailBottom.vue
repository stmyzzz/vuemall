<template>
    <div class="detail-bottom">
        <div class="bottom-item bottom-left">
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div @click="shoucang">
                <i class="icon shoucang" ></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bottom-item bottom-right">
            <div class="cart" @click="addCart">加入购物车</div>
            <div class="buy">立即购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailBottom',
    data(){
        return {}
    },
    methods:{
        addCart(){
            this.$emit('addCart')
        },  
        shoucang(){
            this.isShou = !this.isShou;
        }
    }
}
</script>

<style>
.detail-bottom{
    height: 48px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
}
.bottom-item{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bottom-item>div{
    flex: 1;
}
.bottom-left{
    font-size: 13px;
}
i{
    margin: 4px auto 8px;
}
.service{
    width: 17px;
    height: 17px;
    display: block;
    background: url("~assets/img/detail/service.svg") no-repeat 0 0/100%;
}
.shop{
    width: 17px;
    height: 17px;
    display: block;
    background: url("~assets/img/detail/shopping.svg") no-repeat 0 0/100%;
}
.shoucang{
    width: 17px;
    height: 17px;
    display: block;
    background: url("~assets/img/detail/shoucang.svg") no-repeat 0 0/100%;
}
.bottom-right{
    line-height: 48px;
}
.bottom-right div{
    font-size: 13px;
}
.cart{
    color: #ff5777;
    background-color: #ffe6e8;
}
.buy{
    background:linear-gradient(90deg,#ff5777,#ff468f);
    color: #fff;
}

</style>