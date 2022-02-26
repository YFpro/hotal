<template>
    <div>
        <van-cell title="请选择日期区间" :value="date" @click="show = true" />
        <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    </div>
</template>

<script>
    import store from "../../store/store";
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
                store.entertime = startTime.getMonth()+1+"."+startTime.getDate();
                store.leavetime = endTime.getMonth()+1+"."+endTime.getDate();
                let starday  =  startTime.getTime();
                let endday  =  endTime.getTime();
                store.night =  parseInt(Math.abs(endday  -  starday)/1000/60/60/24);
                this.show = false;
                this.$router.back();

            },
        }
    }
</script>

<style scoped>

</style>