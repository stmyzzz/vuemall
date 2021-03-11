<template>
    <div v-if="Object.keys(rateInfo).length !==0" class="rate-info">
        <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">更多</div>
        </div>
        <div class="info-user">
            <img :src="rateInfo.user.avatar" alt="">
            <span>{{rateInfo.user.uname}}</span>
        </div>
        <div class="info-detail">
            <p>{{rateInfo.content}}</p>
            <div class="info-other">
                <span class="data">{{rateInfo.created | showDate}}</span>
                <span class="style">{{rateInfo.style}}</span>
            </div>
        </div>
        <div class="info-imgs">
            <img :src="item" alt="" v-for="(item,index) in rateInfo.images" :key="index">
        </div>
    </div>
</template>
<script>
import {FromData} from '../../../common/utils'
export default {
    props:{
        rateInfo:{
            Type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
           /*  item:this.rateInfo.created; */
        }
    },
    filters:{
    showDate: function (value) {
                return FromData(value)
            }
    }

}
</script>

<style>
.rate-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid gray;
}
.info-header{   
    height: 50px;
    line-height: 50px;
}
.header-title{
    float: left;
    font-size: 15px;
}
.header-more{
    float: right;
    font-size: 15px;
}
.info-user{
    display: flex;
    align-items: center;
}
.info-user img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.info-user span{
    font-size: 13px;
    padding-left: 5px;
}
.info-detail{
    margin-bottom: 10px;
}
.info-detail p{
    font-size: 15px;
    padding: 10px 0;
}
.info-detail .info-other{
    font-size: 10px;
}
.info-imgs img{
    width: 100%;
    height: 100%;
}
</style>