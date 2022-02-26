<template>
    <div>
        <tabbar :index=4></tabbar>
        <div class="header">
        <div class="top">
         全部订单
        </div>
        <div class="nav">
            <span  class="bar" @click="all" :class="{active:where.typeorder ===0}">全部</span>
            <span  class="bar" @click="wait" :class="{active:where.typeorder===1}">待出行</span>
            <span  class="bar" @click="wzf" :class="{active:where.typeorder===2}">待付款</span>
            <span  class="bar" @click="exit" :class="{active:where.typeorder===3}">退款单</span>
        </div>
        </div>
        <div class="back">
       <div class="con" v-for="(item,index) in orderdata" :key="index">
           <img src="../../assets/1.png" alt="">酒店
           <div class="right">{{arr[item.status]}}</div>
           <p class="jiage" >{{item.snames}}</p>
           <p class="rmb-r">￥{{item.sprice}}</p>
           <p>{{item.time}}</p>
           <p>{{item.night}}晚 1间 豪华大床房</p>
           <div class="line"></div>
           <a href="">去点评</a>
           <a href="">再次预定</a>
       </div>
        </div>
    </div>
</template>
<script>
    import tabbar from "../../components/tabbar/tabbar";
    import {initOrder} from "../../http";
    import {Toast} from "vant";
    export default {
        name: "alldindan",
        data(){
            return{
                index:1,
                where:{
                    typeorder:0,
                    uid:this.$store.state.udata.uid,
                },
                orderdata:[],
                arr:['','待出行','待付款'],
            }
        },
        components:{
            tabbar
        },
        methods:{
            initTyporder(orderid){
                this.where.typeorder=orderid;
                this.initOrders();
            },
            all(){
                this.where.typeorder=0;
                this.orderdata=[];
                this.initOrders();
            },
            wzf(){
                this.where.typeorder=2;
                this.orderdata=[];
                this.initOrders();
            },
            wait(){
                this.where.typeorder=1;
                this.orderdata=[];
                this.initOrders();
            },
            exit(){
                this.where.typeorder=3;
                this.orderdata=[];
                this.initOrders();
            },
            initOrders() {
                initOrder(this.where).then(res=>{
                    if(res.data){
                        this.orderdata = res.data;
                    }else {
                       Toast(res.msg);
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted() {
             let orderid= this.$route.query.order;
             this.initTyporder(orderid);
        }
    }
</script>

<style scoped>
.top{
    width: 1.38rem;
    height: 0.32rem;
    font-size: 0.34rem;
    text-align: center;
    margin: auto;
    margin-top:0.3rem;
    font-weight: bold;
}
.back{
    height: auto;
    min-height:10rem;
    margin-top: 2rem;
    background: #eef0f0;
    margin-bottom: 1.3rem;
}
.nav{
    margin-top: 0.5rem;
    margin-left: 1rem;
    font-size: 0.26rem;
}
   .nav .bar{
       display: block;
       width: 1.34rem;
       height: 0.43rem;
       text-align: center;
       float: left;
       border-radius: 0.32rem;
       padding: 0.1rem 0;
       color: black;
   }
   .nav .bar.active{
       background: #505762;
       color: white;
       font-size: 0.3rem;
   }
    .con{
        width: 6rem;
        height: 2.75rem;
        border-radius: 0.1rem;
        background: #ffffff;
        margin: auto;
        margin-top: 0.5rem;
        padding: 0.3rem;
        font-size: 0.2rem;
    }
    .header{
        position: fixed;
        top: 0;
        width: 100%;
        height:1.95rem;
        background:#ffffff;
        z-index: 999;
    }
    .con img{
        width: 0.25rem;
        height:0.12rem;
        margin-right: 0.1rem;
    }
    .con .right{
        width: 2.73rem;
        height: 0.27rem;
        float: right;
        font-size: 0.2rem;
        text-align: right;
        color: #e05c63;
    }
    .con p{
        font-size: 0.26rem;
        margin-top: 0.32rem;
    }
    .jiage{
        width: 60%;
    }
    .con .rmb-r{
        float: right;
        margin-top:-0.32rem;
        font-size: 0.26rem
    }
    .con p:nth-child(6){
        margin-top: -0.02rem;
        font-size: 0.2rem;
        opacity: 0.3;
    }
.con p:nth-child(5){
    font-size: 0.2rem;
    opacity: 0.3;
}
    .line{
        width: 5.67rem;
        height: 0.01rem;
        background: #000000;
        margin: auto;
        opacity: 0.08;
        margin-top: 0.26rem;
    }
    .con a{
        display: block;
        width: 1.23rem;
        height: 0.36rem;
        background: #e05c63;
        text-align: center;
        float: right;
        font-size: 0.2rem;
        color: #000000;
        border-radius: 0.18rem;
        margin-top: 0.26rem;
        opacity: 0.4;
    }
</style>