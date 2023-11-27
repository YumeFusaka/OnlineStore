import { getInfo,setInfo } from "./storage"

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
    actions:{},
    getters:{}
}