import Vue from 'vue'
import Vuex from 'vuex'
// import getlist from '../network/index'
import createisitate from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:{},
    cartList:[],
    ids:[],
    cartsite:"",
    alipays:'',
  },
  mutations: {
    addLogin(state,item){
      state.token=item
    },
    addCarts(state,item){
      state.cartList=item
      state.ids=[]
      state.cartList.forEach((ele)=>{
        state.ids.push(ele.cart_id)
      })
      console.log(state.ids)
      console.log(state.cartList)
    },
    CartSite(state,item){
      state.cartsite=item
    },
    alipay(state,item){
      state.alipays=item
    }
  },
  actions: {
    addLogin(context,item){
      context.commit("addLogin",item)
    },
    addCarts(context,item){
      
      
    
       context.commit('addCarts',item)
        console.log(item);
        console.log(111)
      
    },
    CartSite(context,item){
      context.commit("CartSite",item)
    },
    alipay(context,item){
      context.commit('alipay',item)
    }
  },
  modules: {
  },
  plugins:[createisitate({
        storage:window.localStorage
      })]
})
