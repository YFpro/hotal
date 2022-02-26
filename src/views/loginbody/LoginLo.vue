<template>
        <div class="login-text-body" v-if="isShow">
            <form :module="registerData">
                <input type="text" ref="user" class="forminput user" name="user" placeholder="手机号(必填)" autocomplete="off" v-model="registerData.phone">
                <input type="password" ref="password" class="forminput password" name="password" placeholder="密码(必填)" autocomplete="off" v-model="registerData.password">
                <div class="login-text-redirect">
                    <div class="login-text-link">
                        <div class="blue-circular"></div>
                        <router-link to="">忘记密码</router-link>
                    </div>
                    <div class="login-text-link">
                        <div class="blue-circular"></div>
                        <router-link to="">短信验证</router-link>
                    </div>
                </div>
                <button class="login-button" type="button" @click="handlelogin">立即登录</button>
                <div class="login-problem">
                    <router-link to="">遇到问题</router-link>
                </div>
            </form>
        </div>
</template>

<script>
    import {userlogin} from "../../http";
    import { Toast } from 'vant';
    export default {
        name: "LoginLo",
        data(){
          return {
              registerData:{
                  phone:'',
                  password:'',
              },
          }
        },
        props:{
            isShow:{
                default:true
            },
        },
        methods:{
            handlelogin() {
                let redirect = this.$route.query.redirect;
                let sid =this.$route.query.sid;
                if (this.registerData.phone === '') {
                    Toast('手机号不能为空');
                }else if(this.registerData.password === ''){
                    Toast('密码不能为空')
                }else{
                    userlogin(this.registerData).then(res => {
                        if (res.code === 200) {
                            Toast(res.msg);
                            let collection= res.data.collections.split(',').map(ele=>ele*1);
                            this.$store.commit('setUdata', res.data);
                            collection && this.$store.commit('setCollection',collection);
                            this.$store.commit('setToken', res.token);
                            this.$router.replace({name:redirect,query:{sid:sid}});
                        } else {
                            Toast(res.msg);
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                }
            }
            }
    }
</script>

<style scoped>
    .login-text-body{
        margin-top: 90px;
        padding: 0 38px;
        width: 100%;
        height: 524px;
        box-sizing: border-box;
    }
    .forminput{
        width: 100%;
        height: 80px;
        border-radius: 34px;
        border: none;
        font-family: PingFang-SC-Bold;
        font-size: 31px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 4px;
        letter-spacing: 1px;
        padding: 0 10px 0 110px;
        box-sizing: border-box;
        margin-bottom: 60px;
        outline: none;
    }
    .user{
        background: url("../../assets/imgs/phone.png") 44px 18px no-repeat;
        background-size:25px 45px;
        box-shadow: 0 10px 29px 14px
        rgba(232, 232, 232, 0.6);
    }
    .password{
        background: url("../../assets/imgs/suo.png") 44px 28px no-repeat;
        background-size:26px 29px;
        box-shadow: 0 1.333vw 3.867vw 1.867vw rgba(232, 232, 232, 0.6);
        margin-bottom: 50px;
    }
    .login-text-redirect{
        margin-top: 0;
        width: 100%;
        height: auto;
        padding: 0 36px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .login-text-link{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .blue-circular{
        width: 8px;
        height: 9px;
        border-radius: 50%;
        background-color: #97f3d6;
        margin-right: 25px;
    }
    .login-text-link a{
        text-decoration: none;
        color: #a3a3a3;
        -webkit-tap-highlight-color: transparent;
        font-size: 27px;
    }
    .login-button{
        width: 100%;
        height: 80px;
        border-radius: 39px;
        background: linear-gradient(#e05c63,#f96c73);
        margin-top: 65px;
        color:white;
        font-size: 33px;
        border: none;
    }
    .login-problem{
        margin-top: 34px;
        position: relative;
    }
    .login-problem a{
        position: absolute;
        right: 40px;
        text-decoration: none;
        color: #b2b2b2;
        font-size: 27px;
    }
</style>