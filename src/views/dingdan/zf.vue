<template>
<div>
    <div class="top">
        <span @click="bac">&lt;</span>
        <span>提交订单</span>
    </div>
    <img src="../../assets/zf.png" alt="" class="logo">
    <div class="num">
     ￥{{sprice}}
    </div>
    <div class="text">
     请确认支付金额
    </div>
    <div class="zhong">
        <ul>
            <li style="margin-top: 0">
                <div class="dian"></div>
                <div class="zffs">支付方式</div>
                <div class="tu">微信</div>
            </li>
            <li>
                <div class="dian"></div>
                <div class="zffs">订单编号</div>
                <div class="tu1">35188762593</div>
            </li>
            <li>
                <div class="dian"></div>
                <div class="zffs">订单状态</div>
                <div class="tu1">待支付</div>
            </li>
        </ul>
    </div>
    <ul class="xia">
       <li>
           <img src="../../assets/微信.png" alt="">
           <span>微信支付</span>
           <div class="but" style="background: #42b983"></div>
       </li>
       <li>
           <img src="../../assets/支付宝.png" alt="">
           <span>支付宝支付</span>
           <div class="but"></div>
       </li>
       <li>
           <img src="../../assets/银行卡.png" alt="">
           <span>银行卡支付</span>
           <div class="but"></div>
       </li>
   </ul>
    <router-link :to="{path:'/success',query:{sprice:this.sprice}}" class="rou"><div class="a" >确认支付</div></router-link>
    <tabbar></tabbar>
</div>
</template>
<script>
    import tabbar from "../../components/tabbar/tabbar";
    export default {
        name: "zf",
        data(){
            return {
                sprice: '',
            }
        },
        components:{
            tabbar
        },
        methods:{
            bac(){
                this.$router.back();
            }
        },
        mounted() {
            this.sprice = this.$route.query.sprice;
        }
    }
</script>

<style scoped>
    .rou{
        color: #ffffff;
    }
    .top{
        width: 100%;
        height: 0.42rem;
        font-size: 0.34rem;
    }
    .top span:nth-child(1){
        margin-left: 0.5rem;
        color: #e05c63;
    }
    .top span:nth-child(2){
        margin-left: 2.4rem;
    }
    .logo{
        width: 1rem;
        height: 1rem;
        margin-top: 0.86rem;
        margin-left: 3.25rem;
    }
    .num{
        width: 70%;
        height: 0.6rem;
        margin:0 auto;
        margin-top: 0.47rem;
        font-size: 0.56rem;
        text-align: center;
    }
    .text{
        width: 2rem;
        height: 0.25rem;
        text-align: center;
        font-size: 0.26rem;
        margin: auto;
        margin-top: 0.33rem;
    }
    .zhong{
        width: 5.74rem;
        height:1.44rem;
        border-radius: 0.1rem;
        background: #ffffff;
        box-shadow: 0 0.12rem 0.31rem 0.07rem
        rgba(240, 240, 240, 0.9);
        margin: auto;
        margin-top: 0.8rem;
        padding: 0.63rem 0.32rem;

    }
    .zhong li{
        width: 100%;
        height: 0.3rem;
        margin-top: 0.3rem;
    }
    .dian{
        width: 0.09rem;
        height: 0.09rem;
        background: #97f3d6;
        border-radius: 50%;
        float: left;
        margin-top: 0.1rem;
    }
.zffs{
    width: 1.06rem;
    height: 0.25rem;
    font-size: 0.26rem;
    float: left;
    margin-left:0.2rem ;
}
    .tu{
        width: 1rem;
        height: 0.3rem;
        background: #e05c63;
        border-radius: 0.15rem;
        font-size: 0.2rem;
        float: right;
        text-align: center;
        opacity: 0.8;
    }
    .tu1{
        width: 1.81rem;
        height: 0.25rem;
        font-size: 0.26rem;
        text-align: right;
        float: left;
        margin-left: 2.58rem;
    }
    .xia li{
        width: 6.38rem;
        height:0.1rem;
        margin: auto;
        border-bottom: 1px solid silver ;
        padding: 0.4rem 0;
        font-size: 0.26rem;
    }
    .xia li:nth-child(1){
        margin-top: 0.8rem;
    }
    .xia li img{
        width: 0.41rem;
        height: 0.41rem;
        margin-top:-0.15rem;
        margin-right: 0.4rem;
    }
    .xia li span{
       position: relative;
        left: 0;
        top: -0.1rem;
    }
    .but{
        width: 0.28rem;
        height: 0.28rem;
        border-radius: 50%;
        float: right;
        margin-top: -0.1rem;
        background: #e05c63;
        opacity: 0.5;
    }
    .a{
        width: 5.62rem;
        height: 0.37rem;
        background: #e05c63;
        border-radius: 0.39rem;
        margin: auto;
        margin-top: 2.5rem;
        margin-bottom:1.5rem;
        font-size: 0.32rem;
        text-align: center;
        color: white;
        padding: 0.2rem 0;
    }
</style>