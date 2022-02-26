<template>
    <div>
        <div class="bac">
        <div class="search-title">酒店搜索</div>
        <input type="text" class="search-input" placeholder="主人快来搜索你的房源吧" v-model="search.sname">
            <button class="btn" @click="searchhotal">搜索</button>
        <div class="search-bar">
            <div @click="chsidd" class="bgmask" :class="{active:order.field==='sid'}">
                <span>综合&#xe679;</span>
            </div>
            <div @click="chsprice" class="bgmask" :class="{active:order.field==='sprice'}">
                <span>价格&#xe679;</span>
            </div>
            <div @click="chscore" class="bgmask" :class="{active:order.field==='score'}">
                <span>名称&#xe679;</span>
            </div>
            <div @click="chctime" class="bgmask" :class="{active:order.field==='ctime'}">
                <span>时间&#xe679;</span>
            </div>
        </div>
        </div>
        <div class="search-list">
            <van-pull-refresh v-model="loading" @refresh="onRefresh">
                <van-list  v-model="upLoading" :finished="finished" :immediate-check="false" finished-text="没有更多了" @load="onLoad">
                    <search-item v-for="(item,index) in stayhome" :key="index" @click.native="detail(item.sid)">
                        <template v-slot:img>
                            <img :src=" IMGURL + item.sthumb" alt="" class="leftimg">
                        </template>
                        <template v-slot:title>
                            {{item.sname}}
                        </template>
                        <template v-slot:money>
                           {{item.sprice}}
                        </template>
                        <template v-slot:like-count>
                            412
                        </template>
                        <template v-slot:opinion-count>
                            3315
                        </template>
                    </search-item>
                </van-list>
            </van-pull-refresh>
        </div>
        <tabbar :index="tabbar"></tabbar>
    </div>
</template>
<script>
    import { Toast } from 'vant';
    import { PullRefresh,List} from 'vant';
    import {IMGURL} from '../../lib/base';
    import SearchItem from "./SearchItem";
    import tabbar from "../../components/tabbar/tabbar";
   import {indexlist} from "../../http";
    export default {
        name: "SearchList",
        components: {
            tabbar,
            SearchItem,
            VanPullRefresh:PullRefresh,
            VanList:List,
        },
        data(){
            return{
                tabbar:2,
                IMGURL,
                count: 0,
                loading:false,
                upLoading: false,
                finished: false,
                search:{
                    sname:''
                },
                paginate:{
                    page:0,
                    limit:7,
                },
                order:{
                    field:'sid',
                    type:'desc',
                },
                stayhome:[],
                total:0,
            }
        },
        methods:{
            detail(sid){
                 this.$router.push({name:'detail',query:{sid:sid}})
            },
            searchhotal(){
                this.paginate.page=0;
                this.stayhome=[];
                this.onLoad();
            },
            chsidd(){
                this.order.field='sid'
                this.paginate.page=0;
                this.stayhome=[];
                this.onLoad();
            },
            chsprice(){
                this.order.field='sprice';
                this.paginate.page=0;
                this.stayhome=[];
                this.onLoad();
            },
            chscore(){
                this.order.field='score';
                this.paginate.page=0;
                this.stayhome=[];
                this.onLoad();
            },
            chctime(){
                this.order.field='ctime'
                this.paginate.page=0;
                this.stayhome=[];
                this.onLoad();
            },
            onRefresh() {
                 this.paginate.page=0;
                 this.stayhome=[];
                 this.onLoad();
                 this.loading=false;
                 Toast('刷新成功');
            },
            onLoad() {
                this.paginate.page++;
                let params=Object.assign({},this.order,this.paginate,this.search);
                indexlist(params).then(res=>{
                    if(res.data){
                        !this.total && (this.total = res.total);
                       this.stayhome = this.stayhome.concat(res.data);
                       this.upLoading=false;
                       if(this.stayhome.length >=res.total){
                           this.finished=true;
                       }
                    }else {
                        Toast(res.msg);
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted() {
             this.onLoad();
        }
    }
</script>
<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 1919782 */
        src: url('//at.alicdn.com/t/font_1919782_wtv7tsg4x8b.eot');
        src: url('//at.alicdn.com/t/font_1919782_wtv7tsg4x8b.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1919782_wtv7tsg4x8b.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1919782_wtv7tsg4x8b.woff') format('woff'),
        url('//at.alicdn.com/t/font_1919782_wtv7tsg4x8b.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1919782_wtv7tsg4x8b.svg#iconfont') format('svg');
    }
    .search-list{
           margin-top: 350px;
           margin-bottom:150px;
    }
    .bac{
        width: 100%;
        height: 360px;
        background:#ffffff;
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .search-title{
        width: 656px;
        height: 100px;
        text-align: center;
        margin: auto;
        margin-top:30px;
        font-family: "苹方 粗体";
        font-weight: bold;
        color: rgba(0,0,0,0.8);
        font-size: 34px;
        line-height: 100px;
    }
    .leftimg{
        width: 192px;
        height: 188px;
    }
    .btn{
        width: 145px;
        height: 68px;
        outline: none;
        border-radius:0 30px 30px 0;
        border: none;
        font-size:26.5px;
        background:#4f5766;
        color: white;
    }
    .search-input{
        width:445px;
        height: 64px;
        margin-left: 70px;
        margin-top:30px;
        border-radius: 30px 0 0 30px;
        background: #f1f1f1;
        border: none;
    }
    ::-webkit-input-placeholder {
        color: #000000;
        font-size: 26.5px;
        position: relative;
        left:100px;
        top: 0;
        opacity: 0.3;
    }
    .search-bar{
        width: 656px;
        height: 63px;
        margin: 0 auto;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        z-index: 999;
        background: white;
    }
    .bgmask{
        display: inline-block;
        width: 134px;
        height: 63px;
        border-radius: 32px;
        text-align: center;
        font-size: 24px;
        color: #666666;
        line-height:55px;
        font-family: iconfont;
    }
    .bgmask.active{
        background: #4f5766;
        color: #ffffff;
    }
</style>