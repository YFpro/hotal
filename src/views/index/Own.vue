<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
            <van-swipe-item>
                <img src="../../assets/ownbanner.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/ownbanner.png" alt="">
            </van-swipe-item>
            <van-swipe-item>  <img src="../../assets/ownbanner.png" alt=""></van-swipe-item>
            <van-swipe-item>   <img src="../../assets/ownbanner.png" alt=""></van-swipe-item>
        </van-swipe>
        <div class="car">
           <div class="left">
               <img src="" alt="">
           </div>
            <div class="right">
                <div class="user">
                    <span>登录/注册</span>
                    <span>&#xe645;</span>
                </div>
                <div class="msg"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Own"
    }
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 1919782 */
        src: url('//at.alicdn.com/t/font_1919782_5nomwjqcyvr.eot');
        src: url('//at.alicdn.com/t/font_1919782_5nomwjqcyvr.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1919782_5nomwjqcyvr.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1919782_5nomwjqcyvr.woff') format('woff'),
        url('//at.alicdn.com/t/font_1919782_5nomwjqcyvr.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1919782_5nomwjqcyvr.svg#iconfont') format('svg');
    }
    .my-swipe {
        width: 100%;
        height: 3.31rem;
        background-color: #39a9ed;
    }
    .my-swipe img{
        width: 100%;
        height: 100%;
    }
    .car{
        width: 6.37rem;
        height: 1.98rem;
        border-radius: 0.16rem;
        background: #ffffff;
        position: relative;
        left: 0.56rem;
        top: -1.32rem;
        padding: 0.4rem 0.42rem;
        box-sizing: border-box;
        box-shadow: 0 0.06rem 0.15rem 0.09rem
        rgba(240, 240, 240, 0.85);
    }
    .car > .left{
        width: 1.14rem;
        height: 1.14rem;
        background: #42b983;
        border-radius: 50%;
        overflow:hidden;
        float: left;
    }
    .car > .left img{
        width: 100%;
        height: 100%;
    }
    .car > .right{
        width: 4rem;
        height: 1.1rem;
        background: #e05c63;
        float: right;
    }
    .right .user{
        width: 4rem;
        height:0.32rem;
        background: #f3e88e;
        margin-bottom: 0.42rem;
    }
    .right .msg{
        width: 4rem;
        height:0.33rem;
        background: #f3e88e;
    }
    .user span:nth-child(1){
        font-size: 0.32rem;
    }
    .user span:nth-child(2){
        float: right;
        font-family: iconfont;
        margin-top:-0.2rem;
    }
</style>