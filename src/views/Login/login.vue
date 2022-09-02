<!--
 * @Author: NYY
 * @Date: 2022-08-29 10:11:17
 * @LastEditTime: 2022-09-02 09:35:32
 * @LastEditors: NYY
 * @Description: 
-->
<template>
  <el-form ref="form" :model="form" label-width="100px" status-icon :rules="rules" class="login-container">
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" label-width="80px" prop="username" class="username">
      <el-input v-model="form.username" placeholder="请输入账号" type="input" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" prop="password">
      <el-input v-model="form.password" placeholder="请输入密码" type="password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item class="login_submit">
      <el-button type="primary" @click="login" class="login_submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
// import Mock from 'mockjs'
import { getMenu } from '@/api/data'
export default{
  name:'login',
  data(){
    return{
      form:{},
      rules:{
        username:[
          {required:true,message:"请输入用户名内容",trigger:'blur'},
          {
            min:3,
            message:'用户名长度不能小于3位',
            trigger:'blur'
          }
        ],
        password:[
          {required:true,message:"请输入密码",trigger:"blur"}
        ]
      }
    }
  },
  methods:{
    login(){
      getMenu(this.form).then(res=>{
        if(res.code===20000){
          this.$store.commit('clearMenu')
          this.$store.commit('setMenu',res.data.menu)
          this.$store.commit('setToken',res.data.menu)
          this.$store.commit('addToken',this.$router)
          this.$router.push({name:'home'})
        }else{
          this.$message.warning(res.data.message)
        }
      })
      // const token = Mock.random.guid()
      // this.$store.commit('setToken',token)
      // this.$router.push({name:'home'})
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container{
  border-radius:15px;
  background-clip:padding-box;
  margin:180px auto;
  width: 350px;
  padding:35px 35px 15px 35px;
  background-color:#fff;
  border:1px solid #eaeaea;
  box-shadow:0 0 25px #cac6c6;
}
.login_title{
  margin:0px auto 40px auto;
  text-align:center;
  color:#505458;
}
.login_submit{
  margin:10px auto 0px auto;
}
</style>