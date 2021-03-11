import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    cartList:[]
}

const store = new Vuex.Store({
    state,
    mutations:{
        addCart(state,payload){
            payload.count = 1;
            payload.checked  = true;
            state.cartList.push(payload);
            console.log(state.cartList);
        },
        addCount(state,payload){
            payload.count++;
        }
    },
    actions:{
        appCart(context,payload){
            let oldProduct = context.state.cartList.find(item => item.iid == payload.iid);
            if(oldProduct){
                context.commit('addCount',oldProduct)
            }else{
                context.commit('addCart',payload)
            }
        }
    },
    getters:{
        cartlength(state){
            return state.cartList.length
        },
        cartList(state){
            return state.cartList
        }
    }
})

export default store
