<template>
    <div>
        <van-cell title="请选择日期区间" :value="date" @click="show = true" />
        <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    </div>
</template>

<script>
    export default {
        name: "Calendar",
        data(){
            return{
                date: '',
                show: true,
            }
        },
        methods: {
            onConfirm(date) {
                let [startTime, endTime] = date;
                let  start = startTime.getMonth()+1+"."+startTime.getDate(),
                     end = endTime.getMonth()+1+"."+endTime.getDate(),
                     startDay =startTime.getDay(),
                     endDay =endTime.getDay();
                let starday  =  startTime.getTime();
                let endday  =  endTime.getTime();
                let day  =  parseInt(Math.abs(endday  -  starday)/1000/60/60/24);
                this.show = false;
                this.$store.commit("setTime",{start,end,startDay,endDay,day});
                this.$router.back();

            },
        }
    }
</script>

<style scoped>

</style>