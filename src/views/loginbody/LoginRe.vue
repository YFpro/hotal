<template>
    <div class="register-text-body" v-if="isShow">
        <form :model="registerData" method="post">
            <input type="text" ref="user" class="forminput user" name="phone" placeholder="手机号(必填)" v-model="registerData.phone" autocomplete="off">
            <div class="register-code">
                <input type="text" ref="code" class="forminputcode code" name="code" placeholder="验证码(必填)" v-model="code" autocomplete="off">
                <button class="codebtn" type="button">验证码</button>
            </div>
            <input type="text" ref="user" class="forminput password" name="password" placeholder="密码(必填)"  v-model="registerData.password" autocomplete="off">
            <input type="text" ref="user" class="forminput password" name="Tpassword" placeholder="确认密码(必填)" v-model="password1" autocomplete="off">
            <div class="login-text-redirect">
                <div class="login-text-link">
                    <div class="blue-circular"></div>
                    <div class="routlg">记住密码</div>
                </div>
                <div class="login-text-link">
                    <div class="blue-circular"></div>
                    <div class="routlg" @click="routlogin">已有密码,立即登录</div>
                </div>
            </div>
            <div class="radio">
                <input type="checkbox" class="input-radio" v-model="dis" @click="check">
                <label class="radio-text">我已阅读并同意《网站隐私保护条款》</label>
            </div>
            <button class="login-button" type="button" @click="handleSubmit">注册</button>
        </form>
    </div>
</template>
<script>
   import instance from "../../http/http";
   import { Toast } from 'vant';
    export default {
        name: "LoginRe",
        props:{
            isShow:{
                default:false,
            }
        },
        data(){
            return{
                registerData:{
                    phone:'',
                    password:'',
                },
                code:'',
                password1:'',
                dis:false,
            }
        },
        methods:{
            check(){
              this.dis=true;
                console.log(this.dis);
            },
            routlogin(){
                this.$router.go(0);
            },
            handleSubmit() {
                if (this.registerData.phone === ''){
                    Toast.fail('手机号不能为空');
                } else if (this.registerData.password === '') {
                    Toast.fail('密码不能为空');
                } else if (this.password1==='') {
                    Toast.fail('请确认密码');
                } else if(this.registerData.password!==this.password1){
                    Toast.fail('两次密码必须相同');
                }else if(this.dis===false){
                    Toast.fail('请勾选协议');
                }else{
                    instance.post('api/user', this.registerData).then(res => {
                        if (res.code === 200) {
                            Toast.success('注册成功,请登录');
                            this.$router.go(0);
                        }else {
                            Toast.fail(res.msg);
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                }
            }
        },
    }
</script>

<style scoped>
    .register-text-body{
        margin-top: 90px;
        width: 100%;
        padding: 0 38px;
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
    }
    .user{
        background: url("../../assets/imgs/phone.png") 44px 18px no-repeat;
        background-size:25px 45px;
        box-shadow: 0 10px 29px 14px
        rgba(232, 232, 232, 0.6);
    }
    .register-code{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 60px;
    }
    .forminputcode{
        width: 65%;
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

    }
    .code{
        background: url("../../assets/imgs/yanzhengma.png") 44px 28px no-repeat;
        background-size:26px 29px;
        box-shadow: 0 10px 29px 14px
        rgba(232, 232, 232, 0.6);
    }
    .codebtn{
        width: 185px;
        height: 55px;
        background-color: #2d3442;
        border-radius: 28px;
        opacity: 0.85;
        font-size: 26px;
        color: #e3e4e5;
        border: none;
        margin-left: 10px;
    }
    .password{
        background: url("../../assets/imgs/suo.png") 44px 28px no-repeat;
        background-size:26px 29px;
        box-shadow: 0 10px 29px 14px
        rgba(232, 232, 232, 0.6);
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
    .routlg{
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
    .radio{
        margin-top: 40px;
        display: flex;

        align-items: center;
    }
    .radio-text{
        font-size: 22px;
        color: #cacaca;
        margin-left: 25px;
    }
</style>