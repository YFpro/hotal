<template>
  <div id="box">
    <van-loading size="24px" color="#1989fa" class="loading" v-show="showloading">拼命加载中...</van-loading>
    <van-swipe :autoplay="3000" :show-indicators=true>
      <van-swipe-item v-for="(images,index) in indexbanner" :key="index">
        <img :src='IMGURL+ images'/>
      </van-swipe-item>
    </van-swipe>
    <div class="areaSearch">
      <div class="btn">
        <a href="javascript:;" class="btn-common btn-left btn-action">
          国内
        </a>
        <a href="javascript:;" class="btn-common btn-right" @click="nonn">
          港澳台
        </a>
      </div>
      <div class="address">
        <img src="../../assets/imgs/地址icon.png" alt="">
        <span class="province" @click="setCity">{{city}}</span>
        <img src="../../assets/imgs/moreicon.png" alt="">
        <span class="area" @click="setCity1">{{city1}}</span>
        <img src="../../assets/imgs/moreicon2.png" alt="">
      </div>
      <div class="line"></div>
      <div class="staytime" @click="settime">
        <img src="../../assets/imgs/时间icon.png" alt="">
        <span>{{startTime}}</span>
        <span>{{startDay}}</span>
        <img src="../../assets/imgs/go.png" alt="">
        <span>{{endTime}}</span>
        <span>{{endDay}}</span>
        <img src="../../assets/imgs/moreicon3.png" alt="">
        <span>共{{day}}晚</span>
      </div>
      <a class="search-btn">
        <span>开始搜索</span>
      </a>
      <div class="area-bottom">
        <div class="area-botton-item">
          <img src="../../assets/imgs/信用免押金.png" alt="">
          <span>信用免押金</span>
        </div>
        <div class="area-botton-item">
          <img src="../../assets/imgs/24小时客服.png" alt="">
          <span>24小时客服</span>
        </div>
        <div class="area-botton-item">
          <img src="../../assets/imgs/尊享严格消毒.png" alt="">
          <span>尊享严格消毒</span>
        </div>
      </div>
    </div>
    <div class="label" @click="non">
      <a class="label-item" href="javascript:;">
        <img src="../../assets/imgs/摇一摇icon.png" alt="" class="label-item-img">
        <span>摇一摇</span>
      </a>
      <a class="label-item" href="javascript:;">
        <img src="../../assets/imgs/特价酒店icon.png" alt="" class="label-item-img">
        <span>特价酒店</span>
      </a>
      <a class="label-item" href="javascript:;">
        <img src="../../assets/imgs/优惠套餐icon.png" alt="" class="label-item-img">
        <span>优惠套餐</span>
      </a>
      <a class="label-item" href="javascript:;">
        <img src="../../assets/imgs/行李管家icon.png" alt="" class="label-item-img">
        <span>行李管家</span>
      </a>
    </div>
    <div class="main" v-if="category.length">
      <div class="main-item">
        <div class="title">
          <span>{{category[1].cname.substring(0,2)}}</span>
          <span>·{{category[1].cname.substring(2)}}</span>
        </div>
        <div class="main-label">
          <div class="main-label-item selected-label">
            <span class="selected"></span>
            <span class="selected-title">全部</span>
          </div>
          <div class="main-label-item">
            <span></span>
            <span class="noselected-label">豪华型</span>
          </div>
          <div class="main-label-item">
            <span></span>
            <span class="noselected-label">经济型</span>
          </div>
        </div>
        <div class="main-item-container">
          <div class="container-item" v-for="item in category[1].children" :key="item.sid">
            <div class="container-item-img">
              <router-link :to="{name:'detail',query:{sid:item.sid}}">
              <img :src='IMGURL + item.sthumb' alt="">
              </router-link>
            </div>
            <span class="hotel-title">{{item.sname}}</span>
            <div class="hotel-score">
              <img src="../../assets/imgs/星满.png" alt="" v-for="index of item.score" :key="index">
            </div>
            <div class="hotel-price">
              <span>RMB</span>
              <span>{{item.sprice}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-item">
        <div class="title">
          <span>{{category[0].cname.substring(0,2)}}</span>
          <span>·{{category[0].cname.substring(2)}}</span>
        </div>
        <div class="food-container">
          <div class="container-item" v-for="item in category[0].children" :key="item.sid">
            <div><span class="desc">{{item.sdesc}}</span>
            <div class="follow">
              <div class="follow-box">
                <img src="../../assets/imgs/+.png" alt="">
                <span>关注</span>
              </div>
              </div>
            </div>
            <router-link :to="{name:'detail',query:{sid:item.sid}}" class="item-img">
              <img :src="IMGURL + item.sthumb" alt="">
            </router-link>
            <div class="food-comment">
              <div class="food-comment-love">
                <img src="../../assets/imgs/喜欢.png" alt="">
                <span @click="like++">{{like}}</span>
              </div>
              <div class="food-comment-talk">
                <img src="../../assets/imgs/评论.png" alt="">
                <span>2532</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tabbar :index="tabbar"></tabbar>
  </div>
</template>
<script>
  import {Toast} from 'vant';
  import {IMGURL} from "../../lib/base";
  import {mapState} from "vuex";
  import {indexRead} from "../../http";
  import tabbar from "../../components/tabbar/tabbar";
  export default {
    name: "Home",
    components:{
      tabbar,
    },
    data(){
      return {
        showloading:false,
        IMGURL,
        indexbanner:[],
        category:[],
        like:200,
        tabbar:1
      }
    },
    computed:mapState({
      startTime:state=>state.indexSearch.startTime,
      endTime:state=>state.indexSearch.endTime,
      city:state=>state.indexSearch.city,
      city1: state=>state.indexSearch.city1,
      startDay:state=>state.indexSearch.startDay,
      endDay:state=>state.indexSearch.endDay,
      day:state=>state.indexSearch.day,
    }),
    methods:{
      non(){
         Toast('亲,请给我们一点时间哦');
      },
      nonn(){
        Toast('亲,期待我们后续开发哦');
      },
      setCity(){
        this.$router.push('/province');
      },
      setCity1(){
        this.$router.push('/province1');
      },
      settime(){
        this.$router.push('/calendar');
      },
      initData(){
        indexRead().then(res=>{
          this.showloading=false;
          this.indexbanner= res.data.indexbanner.sbanner.split(',');
          this.category=res.data.category;
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    mounted() {
      this.showloading=true;
      this.initData();
    }
  }
</script>
<style scoped>
  #box{
    position: relative;
  }
  .loading{
    text-align: center;
  }
  .van-swipe img{
    width: 750px;
    height: 479px;
  }
  /*搜索区域开始*/
  .areaSearch{
    height: 458px;
    width: 638px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px #999;
    position: absolute;
    top: 287px;
    left: 0;
    right: 0;
    margin: auto;
    padding-top: 24px;
  }
  .btn{
    height: 66px;
    width: 574px;
    margin: 0 auto;
  }
  .btn-common{
    display: inline-block;
    width: 287px;
    height: 100%;
    background-color: #fceeef;
    color: rgba(0,0,0,.2);
    font-family: "苹方 粗体";
    font-size: 32px;
    text-align: center;
    line-height: 66px;
  }
  .btn-left{
    border-radius: 10px 0 0 10px;
  }
  .btn-right{
    border-radius: 0 10px 10px 0;
  }
  .btn-action{
    background-color: #e05c63;
    color: #ffffff;
  }
  .address{
    width: 574px;
    margin: 0 auto;
    height: 40px;
    margin-top: 38px;
  }
  .address img:nth-child(1){
    width: 29px;
    height: 37px;
    margin-left: 10px;
  }
  .address span{
    display: inline-block;
    font-family: "苹方 粗体";
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
  }
  .address .province{
    color: rgba(0,0,0,.8);
    margin-left: 38px;
  }
  .address img:nth-child(3){
    width: 13px;
    height: 7px;
    margin-left: 20px;
  }
  .address .area{
    color: rgba(0,0,0,.8);
    margin-left: 40px;
  }
  .address img:nth-child(5){
    width: 29px;
    height: 7px;
    margin-left: 120px;
  }
  .areaSearch .line{
    width: 560px;
    height: 3px;
    background-color: #dedede;
    margin: 0 auto;
    margin-top: 40px;
  }
  .staytime{
    width: 574px;
    height: 30px;
    margin: 0 auto;
    margin-top: 45px;
  }
  .staytime img:nth-child(1){
    width: 30px;
    height: 30px;
    margin-left: 17px;
  }
  .staytime span{
    font-family: "苹方 粗体";
    /*font-weight: bold;*/
    display: inline-block;
  }
  .staytime span:nth-child(2){
    color: #e05c63;
    font-size: 36px;
    margin-left: 10px;
  }
  .staytime span:nth-child(3){
    color: rgba(0,0,0,.3);
    font-size: 22px;
    margin-left: 5px;
    font-weight: bold;
  }
  .staytime img:nth-child(4){
    width: 21px;
    height: 9px;
    margin-left: 15px;
  }
  .staytime span:nth-child(5){
    color: #e05c63;
    font-size: 36px;
    margin-left:10px;
  }
  .staytime span:nth-child(6){
    color: rgba(0,0,0,.3);
    font-size: 22px;
    margin-left: 5px;
    font-weight: bold;
  }
  .staytime img:nth-child(7){
    width: 20px;
    height: 10px;
    margin-left: 20px;
  }
  .staytime span:nth-child(8){
    color: rgba(0,0,0,.5);
    font-size: 26px;
    font-weight: bold;
    margin-left: 10px;
  }
  .search-btn{
    display: block;
    background-image: linear-gradient(to right, #4f5766, #687387);
    width: 436px;
    height: 60px;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 30px;
    text-align: center;
    color: #fff;
    font-size: 26px;
    font-family: "苹方 粗体";
    line-height: 60px;
    letter-spacing: 3px;
  }
  .area-bottom{
    margin-top: 24px;
    width: 560px;
    height: 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .area-botton-item img{
    width: 16px;
    height: 16px;
  }
  .area-botton-item span{
    font-size: 12px;
    color: rgba(0,0,0,.3);
    font-family: "苹方 粗体";
    margin-left: 5px;
  }
  /*搜索区域结束*/
  /*标签区*/
  .label{
    height: 148px;
    margin-top: 338px;
    display: flex;
    justify-content: space-around;
  }
  .label-item{
    display: block;
    width: 110px;
    text-align: center;
  }
  .label-item-img{
    width: 100px;
    height: 100px;
  }
  .label-item > span{
    font-family: "苹方 粗体";
    font-size: 26px;
    color: #666666;
  }
  /*标签区*/
  /*内容区域*/
  .main{
    width: 641px;
    margin: 0 auto;
    margin-top:50px;
    margin-bottom:230px;
  }
  .main-item{
    margin-top: 50px;
  }
  .main-item > .title{
    font-family: "苹方 粗体";
    font-size: 36px;
    letter-spacing: 5px;
    font-weight: bold;
  }
  .main-item > .title > span:nth-child(1){
    color: #666;
  }
  .main-item > .title > span:nth-child(2){
    color: #e05463;
  }
  .main-label{
    margin-top: 56px;
    height: 50px;
  }
  .main-label-item{
    display: inline-block;
    margin-right: 50px;
  }
  .main-label > .selected-label{
    width: 120px;
    height: 100%;
    background: #4f5766;
    border-radius: 25px;
    display: inline-block;
    padding-top: 5px;
  }
  .main-label-item > .selected{
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #97f3d6;
    margin-left: 17px;
  }
  .main-label-item > span:nth-child(2){
    color: #7f7f7f;
    font-family: "苹方 粗体";
    font-size: 26px;
    margin-left: 14px;
  }
  .main-label-item > .selected-title{
    color: #fafafa !important;
  }
  .main-item-container{
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-flow: wrap;
    margin-top: 75px;
  }
  .main-item-container > .container-item{
    width: 305px;
    height: 513px;
  }
  .main-item-container .container-item-img{
    width: 305px;
    height: 305px;
    border-radius: 10px;
  }
  .container-item-img img{
    width: 305px;
    height: 305px;
  }
  .main-item-container .hotel-title{
    display: block;
    font-size: 32px;
    font-family: "苹方 粗体";
    font-weight: bold;
    color: #666;
    margin-top: 26px;
  }
  .main-item-container .hotel-score{
    margin-top: 16px;
  }
  .main-item-container .hotel-score img{
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
  .main-item-container .hotel-price{
    margin-top: 20px;
  }
  .main-item-container .hotel-price span{
    color: #e05c63;
    font-family: "苹方 粗体";
  }
  .main-item-container .hotel-price span:nth-child(1){
    font-size: 16px;
  }
  .main-item-container .hotel-price span:nth-child(2){
    font-size: 32px;
    font-weight: bold;
  }
  .food-container{
    margin-top: 24px;
  }
  .food-container .container-item{
    margin-top:35px;
  }
  .food-container .desc{
    display: inline-block;
    font-family: "苹方 粗体";
    font-size: 26px;
    color: rgba(0,0,0,.5);
    font-weight: bold;
  }
  .food-container .follow{
    display: inline-block;
    float: right;
    width: 109px;
    height: 42px;
    background: #f57285;
    border-radius: 21px;
  }
  .food-container .follow .follow-box{
    width: 89px;
    margin: 0 auto;
  }
  .food-container .follow img{
    width: 13px;
    height: 13px;
    margin-left: 12px;
  }
  .food-container .follow span{
    color: #fff;
    font-size: 24px;
    font-family: "苹方 粗体";
    display: inline-block;
    margin-left: 10px;
  }
  .food-container .item-img{
    display: block;
    height: 256px;
    width: 640px;
    border-radius: 10px;
    margin-top: 57px;
  }
  .food-container .item-img img{
    height: 256px;
    width: 640px;
  }
  .food-container .food-comment{
    float: right;
    margin-top: 24px;
  }
  .food-container .food-comment-love,.food-comment-talk{
    display: inline-block;
    margin-left: 30px;
  }
  .food-container .food-comment img{
    height: 20px;
    width: 21px;
    margin-right: 10px;
  }
  .food-container .food-comment span{
    color: #f15361;
    font-size: 24px;
    font-family: "苹方 粗体";
  }
</style>