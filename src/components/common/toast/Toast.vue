<template>
    <div class="toast" v-show="isShow">
        {{msg}}
    </div>
</template>

<script>
export default {
    name:'toast',
    data(){
        return {
            msg:'',
        }
    }

}
</script>

<style scoped>
    
</style>