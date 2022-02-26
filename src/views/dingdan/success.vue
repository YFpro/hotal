<template>
    <div>
        <div class="top">
            <span class="back" @click="bac">&lt;</span>
            <router-link to="/" class="finsed">完成</router-link>
        </div>
        <img src="../../assets/success.png" alt="" class="successlogo">
        <div class="sprice">
            ￥{{this.$route.query.sprice}}
        </div>
        <div class="text">支付成功</div>
        <div class="con">
            <router-link to="" class="list">分享好友</router-link>
            <router-link to="" class="list">查看订单</router-link>
        </div>
        <div class="juan">
            <div class="top">
                <img src="../../assets/juan1.png" alt="">
                <span>Discount</span>
                <p>早餐代金福利卡券</p>
                <span>￥100.00</span>
            </div>
            <div class="time">
                <span>2020.04.25  -  2020.05.30</span>
            </div>
        </div>
        <div class="fenlei">
            <span>为您 </span>
            <span>· 精选</span>
        </div>
        <div class="jinxuan">
            <div class="jiu">
                <img src="../../assets/jiu1.png" alt="">
                <p>Louis Lafite</p>
                <p>￥120</p>
            </div>
            <div class="jiu">
                <img src="../../assets/jiu2.png" alt="">
                <p>Louis Lafite</p>
                <p>￥120</p>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import tabbar from "../../components/tabbar/tabbar";
    export default {
        name: "success",
        components:{
            tabbar
        },
        methods:{
            bac(){
                this.$router.back();
            }
        }
    }
</script>
<style scoped>
.top .back{
    margin-left: 0.5rem;
    font-size: 0.34rem;
    color: #e05c63;
    font-weight: bold;
}
.top .finsed{
        margin-left:5.5rem;
        font-size: 0.34rem;
        color: #e05c63;
    }
    .successlogo{
        width: 2rem;
        height: 1rem;
        margin-top: 1.18rem;
        margin-left: 2.65rem;
    }
    .sprice{
        width: 100%;
        height:0.42rem;
        text-align: center;
        margin-top: 0.54rem;
        letter-spacing: 1px;
        font-size: 0.5rem;
    }
    .text{
        width: 1.2rem;
        height: 0.29rem;
        margin: auto;
        text-align: center;
        font-size: 0.3rem;
        margin-top: 0.3rem;
    }
    .con{
        width: 5.4rem;
        height: 0.62rem;
        margin: auto;
        margin-top: 0.64rem;
        display: flex;
        justify-content: space-between;
    }
    .con .list{
        width: 2rem;
        height: 100%;
        border-radius: 0.31rem;
        text-align: center;
        font-size: 0.26rem;
        padding: 0.12rem 0;
        box-sizing: border-box;
    }
    .con .list:nth-child(1){
        background: #e05c63;
        color: white;
    }
    .con .list:nth-child(2){
        border: solid 1px #e05c63;
        color: #e05c63;
    }
    .juan{
        width: 6.37rem;
        height:2.3rem;
        background:#ffffff;
        margin: auto;
        margin-top: 0.96rem;
        border-radius: 0.1rem;
        box-shadow: 0 1px 65px 7px
        rgba(231, 230, 230, 0.7);
        overflow: hidden;
    }
    .juan .top{
        width: 6.37rem;
        height: 1.64rem;
        background-image: linear-gradient(-90deg,
        #e05c63 0%,
        #ee646b 60%,
        #fc6c73 100%);
    }
    .top img{
        width: 0.9rem;
        height: 0.8rem;
        margin-top: 0.63rem;
        margin-left: 0.36rem;
    }
    .top span{
        display: inline-block;
    }
    .top span:nth-child(2){
        width: 1.04rem;
        height: 0.2rem;
        font-size: 0.26rem;
        color: white;
        position: relative;
        left: 0.24rem;
        top: -0.55rem;
    }
    .top p{
        width: 2.56rem;
        height: 0.28rem;
        font-size: 0.32rem;
        color: white;
        margin-left:1.5rem;
        margin-top: -0.6rem;
    }
    .top span:nth-child(4){
        font-size: 0.32rem;
        color: white;
        position: relative;
        left: 4.5rem;
        top: -0.45rem;
        text-align: center;
    }
    .time span{
        display: inline-block;
        font-size: 0.22rem;
        color: #e05c63;
        margin-left: 3.58rem;
        margin-top: 0.15rem;
    }
    .fenlei{
        width: 100%;
        height: 0.4rem;
        padding: 0 0.57rem;
        box-sizing: border-box;
        margin-top: 1rem;
        font-size: 0.36rem;
        font-family: "苹方 粗体";
        letter-spacing: 0.01rem;
    }
    .fenlei span:nth-child(1){
        color:#000000;
    }
    .fenlei span:nth-child(2){
        color: #e05c63;
    }
    .jinxuan{
        width: 100%;
        padding: 0 0.57rem;
        box-sizing: border-box;
        margin-top: 0.56rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .jinxuan .jiu{
        width:2.43rem;
        height: 3.8rem;
    }
    .jiu img{
        width:100%;
        height: 3.10rem;
    }
    .jiu p{
        text-align: left;
    }
    .jiu p:nth-child(2){
        font-size: 0.26rem;
    }
    .jiu p:nth-child(3){
        font-size: 0.16rem;
    }
</style>