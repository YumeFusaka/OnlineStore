export default{
  methods:{
    loginConfirm(){
      if(!this.$store.getters.token){
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        })
        .then(()=>{
          //如果希望跳转到登录=>登录后能跳转回来,需要在跳转去带参数(当前的路径地址)
          this.$router.replace({
            path: '/login',
            query:{
              backUrl: this.$route.fullPath
            }
          })
        })
        .catch(()=>{})
        return false
      }
      return true
    }
  }
}