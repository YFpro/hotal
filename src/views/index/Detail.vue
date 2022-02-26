<template>
  <div>
    <div class="top">
    <span @click="back">&lt;</span>
    <span>{{stayhome.sname}}</span>
    <span ref="collection" @click="setcollection">&#xe611;</span>
</div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="swipe-item" v-for="(item,index) in banner1" :key="index">
          <img :src="IMGURL+item" alt="">
      </van-swipe-item>
    </van-swipe>
      <div class="class-item">
          <span>房间</span>
          <span>·设施</span>
      </div>
      <div class="container">
          <span><img src="../../assets/img/p1.png" alt="">{{stayhome.size}}㎡</span>
          <span><img src="../../assets/img/p2.png" alt="">{{stayhome.floor}}层</span>
          <span><img src="../../assets/img/p3.png" alt="">一张{{stayhome.beds}}m特大床</span>
          <span><img src="../../assets/img/p4.png" alt="">有窗</span>
          <span><img src="../../assets/img/p5.png" alt="">可住{{stayhome.man}}人</span>
          <span></span>
      </div>
      <div class="con">
         <div class="con-item">
             <div class="con-item-left">房间浴室</div>
             <span>{{stayhome.bathroom}}</span>
         </div>
          <div class="con-item">
              <div class="con-item-left">便利设施</div>
              <span>{{stayhome.house}}</span>
          </div>
          <div class="con-item">
              <div class="con-item-left">媒体科技</div>
              <span>{{stayhome.science}}</span>
          </div>
      </div>
      <div class="line"></div>
      <div class="text">
          具体房型信息以具体报价展示为准
      </div>
      <div class="bottom">
          <div class="kefu">
              <img src="../../assets/img/kefu.png" alt="">
              <span>联系商家</span>
              <span>￥{{stayhome.sprice}}</span>
              <div @click="handleorder">立即预定</div>
          </div>
      </div>
      <tabbar></tabbar>
  </div>
</template>
<script>
    import tabbar from "../../components/tabbar/tabbar";
    import {indexdetail,userCollection} from "../../http";
    import {Toast} from 'vant';
    import {IMGURL} from "../../lib/base";
    export default {
   data() {
    return {
        IMGURL,
        ud:{
            uid:0,
            sid:0,
        },
        show:false,
        stayhome:{},
        banner1:[],
    };
  },
    components:{
       tabbar
    },
    computed:{
       isshow(){
           return this.$store.getters.ischange(this.ud.sid);
       }
    },
  methods: {
       back(){
         this.$router.back();
       },
        setcollection(){
          let params=Object.assign({},this.ud);
          userCollection(params).then(res=>{
              Toast(res.msg);
              this.$store.commit('handleCollection',this.ud.sid);
          }).catch((error)=>{
              console.log(error);
          })
      },
        initData(){
         indexdetail(this.ud.sid).then(res=>{
             this.stayhome=res.data;
             this.banner1 = res.data.sbanner.split(',');
         }).catch((error)=>{
             console.log(error);
         })
       },
        initcollection(){
            if(this.isshow){
                 this.$refs.collection.style.color='red';
             }
        },
        handleorder(){
           if(this.$store.state.token){
               this.$router.push({path:'/order',query:{stayhome:JSON.stringify({sid:this.ud.sid,sname:this.stayhome.sname,sthumb:this.stayhome.sthumb,sprice:this.stayhome.sprice})}});
           }else {
               Toast('请登录');
               this.$router.push({path:'/login',query:{sid:this.ud.sid,redirect:'detail'}});
           }
      }
  },
  mounted() {
       this.ud.uid =this.$store.state.udata.uid;
       this.ud.sid = this.$route.query.sid;
       this.initcollection();
       this.initData();
  }
};
</script>
<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 1919782 */
        src: url('//at.alicdn.com/t/font_1919782_06j3ph4j7xof.eot');
        src: url('//at.alicdn.com/t/font_1919782_06j3ph4j7xof.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1919782_06j3ph4j7xof.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1919782_06j3ph4j7xof.woff') format('woff'),
        url('//at.alicdn.com/t/font_1919782_06j3ph4j7xof.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1919782_06j3ph4j7xof.svg#iconfont') format('svg');
    }
.top{
  width:100%;
  height: 0.36rem;
  padding: 0 0.57rem;
  box-sizing: border-box;
  margin-top: 0.6rem;
}
.top span{
  display: inline-block;
}
.top span:nth-child(1){
  font-size: 0.32rem;
  color: #e05c63;
}
.top span:nth-child(2){
    width: 3.4rem;
    margin-left: 1.3rem;
    text-align: center;
    font-size: 0.34rem;
}
.top span:nth-child(3){
    width: 0.35rem;
    height: 0.35rem;
    font-family: iconfont;
    font-size: 0.42rem;
    float: right;
    position: relative;
    left: 0;
    top: -0.23rem;
}
  .top img{
    width: 0.3rem;
    height: 0.28rem;
  }
.my-swipe  {
  width: 6.82rem;
  height: 3.44rem;
  border-radius: 0.1rem;
  margin: auto;
  margin-top: 0.4rem;
}
  .swipe-item img{
      width: 100%;
      height: 100%;
  }
    .class-item{
        width: 100%;
        height: 0.43rem;
        padding: 0 0.57rem;
        box-sizing: border-box;
        margin-top: 0.71rem;
    }
    .class-item span{
        font-family: "苹方 粗体";
        letter-spacing:0.05rem;
        font-weight: bold;
        font-size: 0.36rem;
    }
    .class-item span:nth-child(2){
        color: #e05c63;
    }
    .container{
        width: 100%;
        height: 0.88rem;
        margin-top: 0.47rem;
        padding: 0 0.57rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-size: 0.26rem;
    }
    .container img{
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.1rem;
    }
    .container span{
        display: inline-block;
    }
.container span:nth-child(1){
    width: 1.8rem;
    margin-bottom: 0.15rem;
}
.container span:nth-child(2){
    width: 1.2rem;
}
    .container span:nth-child(3){
        width: 2.3rem;
    }
.container span:nth-child(4){
    width: 1.8rem;
}
.container span:nth-child(5){
    width: 2.5rem;
}
.container span:nth-child(6){
    width: 1rem;
}
    .con{
        width: 100%;
        padding: 0 0.57rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 0.79rem;
    }
    .con-item{
        width:100%;
        height: 1.45rem;
    }
.con-item-left{
    width: 1.27rem;
    height: 0.36rem;
    border-radius: 0.18rem;
    float: left;
    font-size: 0.2rem;
    text-align: center;
    background: #4f5766;
    color: #f3e88e;
    margin-top: 0.06rem;
}
    .con-item span{
        display: inline-block;
        width: 4.85rem;
        height: 1.45rem;
        margin-left: 0.21rem;
        font-size: 0.26rem;
        text-align: justify;
        letter-spacing: 1px;
    }
    .line{
        width: 6.56rem;
        height: 0.02rem;
        background: #000000;
        opacity: 0.08;
        margin-top: 0.55rem;
        margin: 0 auto;
    }
    .text{
        width: 100%;
        height: 0.24rem;
        padding: 0 0.57rem;
        box-sizing: border-box;
        font-size: 0.24rem;
        margin-top: 0.5rem;
        opacity: 0.5;
    }
    .bottom{
        width: 100%;
        height: 1rem;
        padding: 0.2rem 0.56rem;
        box-sizing: border-box;
        margin-top: 0.85rem;
        background-color: #ffffff;
        margin-bottom: 1.3rem;
    }
    .kefu img{
        width: 0.5rem;
        height: 0.5rem;
        margin-top: 0.05rem;
    }
    .kefu span{
        position: relative;
        left: 0.2rem;
        top: -0.15rem;
        display:inline-block;
        width: 1rem;
        height: 0.27rem;
        font-size: 0.2rem;
        opacity: 0.3;
    }
    .kefu span:nth-child(3){
        margin-right: 0.18rem;
        font-size: 0.18rem;
        color: #e05c63;
        opacity: 0.85;
        width:2.5rem;
        text-align: right;
    }
    .kefu div{
        width: 2.05rem;
        height: 0.6rem;
        background: #e05c63;
        border-radius: 0.3rem;
        opacity: 1;
        font-size: 0.32rem;
        color: #f1f1f1;
        text-align: center;
        float: right;
        padding: 0.07rem 0.38rem;
        box-sizing: border-box;
}

</style>
