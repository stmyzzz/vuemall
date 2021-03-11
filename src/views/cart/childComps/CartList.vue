<template>
    <div class="cart-list">
        <scroll ref="content" class="content">
            <cart-item v-for="(item,index) in cartList" :item="item" :key="index"></cart-item>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartItem from './CartListItem'
import {mapGetters} from 'vuex'
export default {
    name:'CartList',
    components: {
        Scroll,
        CartItem
    },
    computed:{
        ...mapGetters(['cartList'])
    },
    activated() {   
        this.$refs.content.refresh()
    }
    

}
</script>

<style>

</style>