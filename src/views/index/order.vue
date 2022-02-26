<template>
    <div>
    <div class="order-box">
        <div class="top">
            <span @click="back">&lt;</span>
            <span>{{stayhome.sname}}</span>
        </div>
        <div class="roominfo">
            <div class="roomimg">
                <img :src="IMGURL + stayhome.sthumb" alt="">
            </div>
            <div class="room-otherinfo">
                <span class="roomname">{{stayhome.sname}}</span>
                <span class="roomlabel">大床·WiFi上网·免费宽带</span>
                <div class="roomtime">
                    <router-link to="/ordercalendar">
                    <span>{{order.entertime}}</span>
                    <img src="../../assets/imgs/go.png" alt="">
                    <span>{{order.leavetime}}</span>
                    <span>共{{order.night}}晚</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="order-content">
            <div class="order-content-word">入住人数</div>
                <van-stepper v-model="order.unumber" min="1" max="4" class="data1"/>
        </div>
        <div class="line1"></div>
        <div class="userinfo">
            <div class="userinfo-item">
                    <van-cell-group>
                    <van-field  class="cell" left-icon="friends-o" v-model="order.user" label="入住人" placeholder="请输入姓名" />
                    </van-cell-group>
            </div>
            <div class="userinfo-item">
                <van-cell-group>
                    <van-field   left-icon="phone-o" class="cell" v-model="order.phone" label="手机号" placeholder="请输入手机号" />
                </van-cell-group>
            </div>
            <div class="userinfo-item">
                <van-cell-group>
                    <van-field left-icon="clock-o" class="cell" v-model="order.time" label="到店时间" placeholder="请输入时间" />
                </van-cell-group>
            </div>
        </div>
        <div class="footer">
            <div class="btn1">
                <div class="btn1-btn1">
                    <img src="../../assets/imgs/room/shizi1.png" alt="" class="btn1-btn1-img" />
                </div>
                <div class="btn1-btn2">
                    <img
                            src="../../assets/imgs/room/kefudianhua.png"
                            alt=""
                            class="btn1-btn2-img"
                    />
                </div>
            </div>
            <div class="order-right">
                <span>￥</span>
                <span>{{order.sprice}}</span>
                <span @click="handleOrder">提交订单</span>
            </div>
        </div>
    </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import {Toast} from 'vant';
    import { Stepper,Field,CellGroup} from 'vant';
    import store from "../../store/store";
    import {IMGURL} from "../../lib/base";
    import tabbar from "../../components/tabbar/tabbar";
    import {orderadd} from "../../http";
    export default {
        name: "order",
        components:{
            tabbar,
           vanStepper:Stepper,
            vanField:Field,
            vanCellGroup:CellGroup,
        },
        data(){
          return{
              order:{
                  uid:0,
                  sid:0,
                  user:'',
                  leavetime:store.leavetime,
                  entertime:store.entertime,
                  phone:'',
                  time:'',
                  unumber:1,
                  sprice: '',
                  night:store.night,
                  snames:'',
              },
              stayhome:{},
              IMGURL,
          }
        },
        methods:{
            back(){
                this.$router.back();
            },
            handleOrder(){
                orderadd(this.order).then(res=>{
                   if(res.msg === '下单成功') {
                       Toast(res.msg);
                       this.$router.push({path: '/zf', query: {sprice: this.order.sprice}});
                   }else {
                       Toast(res.msg);
                   }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted() {
            this.stayhome=JSON.parse(this.$route.query.stayhome);
            this.order.sid = this.stayhome.sid;
            this.order.sprice=this.stayhome.sprice;
            this.order.uid=this.$store.state.udata.uid;
            this.order.snames= this.stayhome.sname;
        },
    }
</script>
<style scoped>
    .order-box{
        padding: 0 57px;
    }
    .cell{
        font-size: 26px;
        margin-left:5px;
        width: 90%;
    }
    .top{
        width: 100%;
        height: 35px;
        margin-top: 50px;
    }
    .top span:nth-child(1){
          display: inline-block;
          font-size: 36px;
          color: #e05c63;
    }
    .top span:nth-child(2){
        display: inline-block;
        width: 400px;
        height: 35px;
        text-align: center;
        margin-left: 100px;
        font-size: 34px;
    }
    .roominfo{
        width: 100%;
        height: 313px;
        margin-top:60px;
        box-sizing: border-box;
        box-shadow: 0 0 30px #e8e8e8;
        border-radius: 5%;
        padding: 50px 33px;
    }
    .roomimg{
        width: 205px;
        height: 205px;
        float: left;
    }
    .roomimg img{
        width: 205px;
        height: 205px;
        border-radius: 5%;
    }
    .room-otherinfo{
        padding-left: 268px;
        padding-top: 30px;
    }
    .roomname{
        display: block;
        font-family: 'PingFang-SC-Bold';
        font-size: 32px;
        color: rgba(0,0,0,.8);
    }
    .roomlabel{
        display: block;
        font-family: 'PingFang-SC-Bold';
        font-size: 22px;
        color: #999999;
        margin-top: 31px;
        letter-spacing: 2px;
    }
    .roomtime{
        margin-top: 29px;
    }
    .roomtime span{
        font-family: 'PingFang-SC-Bold';
        color: #e6868a;
    }
    .roomtime span:nth-child(1){
        font-size: 22px;
    }
    .roomtime img{
        width: 19px;
        height: 7px;
        margin-left: 20px;
    }
    .roomtime span:nth-child(3){
        font-size: 22px;
        margin-left: 20px;
    }
    .roomtime span:nth-child(4){
        display: inline-block;
        width: 81px;
        height: 30px;
        background: #f9dee0;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
        color: #e6868a;
        margin-left: 20px;
        border-radius: 15px;
    }
    .order-content {
        height: 45px;
        margin-top: 109px;
        padding: 0 40px;
    }
    .order-content .order-content-word {
        /* width: 79px; */
        height: 25px;
        font-family: PingFang-SC-Bold;
        font-size: 26px;
        line-height: 40px;
        color: #000000;
        opacity: 0.8;
        float: left;
    }
    .data1{
        width:190px;
        margin-left:350px;
    }
    .line1 {
        height: 2px;
        width: 80%;
        margin: 0 auto;
        margin-top: 54px;
        background-color: #000000;
        opacity: 0.05;
    }
    .userinfo{
        margin-top: -20px;
    }
    .userinfo-item:after{
        content: '';
        display: block;
        clear: both;
    }
    .userinfo-item{
        width: 100%;
        margin-top: 65px;
    }
    .userinfo-item span{
        font-family: PingFang-SC-Bold;
        font-size: 26px;
        color: #333333;
        letter-spacing: 1px;
    }
    .userinfo-item-left img {
        width: 21px;
        height: 23px;
    }
    .userinfo-item-left span{
        margin-left: 16px;
    }
    .userinfo-item-right span{
        margin-right: 16px;
    }
    .userinfo-item-right img{
        width: 20px;
        height: 20px;
    }
    .footer {
        height: 60px;
        margin-top:50px;
        margin-bottom:150px;
    }
    .footer:after{
        content: '';
        display: block;
        clear: both;
    }
    .btn1 {

        height: 50px;
        float: left;
        margin-top: 5px;
    }
    .btn1-btn1 {
        width: 50px;
        height: 50px;
        background-color: #e05c63;
        opacity: 0.8;
        border-radius: 50% 50%;
        float: left;
    }
    .btn1-btn1:active{
        opacity: 0.5;
    }
    .btn1-btn1-img {
        width: 40px;
        height: 40px;
        margin-left: 4px;
        margin-top: 4px;
    }
    .btn1-btn2 {
        width: 50px;
        height: 50px;
        background-color: #e05c63;
        opacity: 0.8;
        border-radius: 50% 50%;
        margin-left: 20px;
        float: left;
    }
    .btn1-btn2:active{
        opacity: 0.5;
    }
    .btn1-btn2-img {
        width: 50px;
        height: 50px;
    }
    .order-right{
        float: right;
    }
    .order-right span{
        font-family: PingFang-SC-Bold;
    }
    .order-right span:nth-child(1){
        font-size: 18px;
        color: #e05c63;
        opacity: 0.85;
    }
    .order-right span:nth-child(2){
        font-size: 30px;
        color: #e05c63;
        opacity: 0.85;
        font-weight: bold;
        margin-right: 20px;
    }
    .order-right span:nth-child(3){
        display: inline-block;
        width: 205px;
        height: 60px;
        background-image: linear-gradient(-90deg, #f16b72 0%, #e05c63 100%);
        border-radius: 30px;
        font-size: 32px;
        font-weight: bold;
        line-height: 60px;
        text-align: center;
        color: #ffffff;
    }

</style>