import { getInfo,setInfo } from "../../utils/storage"

export default {
    namespaced: true,
    state(){
        return {
            userInfo: getInfo()
        }
    },
    mutations: {
        setUserInfo(state,obj){
            state.userInfo = obj
            setInfo(obj)
        }
    },
    actions:{
        logout(context){
            // 清除本地存储
            context.commit('setUserInfo',{})
            context.commit('cart/setCartList',[],{root:true})
        }
    },
    getters:{}
}