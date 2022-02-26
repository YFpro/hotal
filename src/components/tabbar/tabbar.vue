<template>
        <div class="bar">
                <div><router-link to="/" class="rout" :class="[index===1?'active':'']"><span>&#xe618;</span><p>首页</p></router-link></div>
                <div><router-link to="/search" class="rout" :class="[index===2?'active':'']"><span>&#xe609;</span><p>发现</p></router-link></div>
                <div><router-link to="/own" class="rout" :class="[index===5?'active':'']"><span>&#xe60c;</span><p>我的</p></router-link></div>
        </div>
</template>
<script>
    export default {
        name: "tabbar",
            props:{
             index:{
                     type:Number,
                     default:1
             }
            }
    }
</script>
<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 1919782 */
        src: url('//at.alicdn.com/t/font_1919782_1ua6k64z0m7i.eot');
        src: url('//at.alicdn.com/t/font_1919782_1ua6k64z0m7i.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1919782_1ua6k64z0m7i.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1919782_1ua6k64z0m7i.woff') format('woff'),
        url('//at.alicdn.com/t/font_1919782_1ua6k64z0m7i.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1919782_1ua6k64z0m7i.svg#iconfont') format('svg');
    }
    .bar{
        background: #ffffff;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.3rem;
        z-index: 999;
        font-family: 'iconfont';
        display: flex;
        justify-content: space-between;
        padding: 0 0.57rem;
        box-sizing: border-box;
        box-shadow: 0 -6px 70px 6px rgba(220, 222, 223, 0.88);
    }
    .bar span{
        font-size: 0.37rem;
        margin-left: 0.04rem;
    }
    .rout{
            color:#d1d0d0;
    }
    .rout.active{
            color: #e05c63;
    }
    .bar p{
    margin-top:-0.15rem;
    font-size: 0.22rem;
    opacity: 0.85;
    }
    .bar div:nth-child(3) p{
        margin-left: 0.05rem;
    }
</style>