<template>
    <div>
        <div v-for="item in provincekeys" :key="item">
            <van-cell class="city" v-for="(city,index) in province[item]" :key="index"  :title="item" :value="city.city" @click="handlecity(city.city)"/>
        </div>
    </div>
</template>
<script>
    import city from '../../lib/city.json'
    export default {
        name: "province",
        data(){
            return{
                province:{},
            }
        },
        computed:{
          provincekeys(){
              let arr =[];
              if(JSON.stringify(this.province)!='{}') {
                  arr = Object.keys(this.province).sort();
              }
              return arr;
          }
        },
        methods:{
            initprovince(){
                city.province.forEach(ele=>{
                  let first= ele.en.charAt(0).toUpperCase();
                  if(!this.province[first]){
                      this.$set(this.province,first,[]);
                  }
                  this.province[first].push(ele);
                })
            },
            handlecity(city){
                this.$store.commit("setCity1",city);
                this.$router.back();
            }
        },
        mounted() {
          this.initprovince();
        }
    }
</script>

<style scoped>
.city{
    font-size: 0.32rem;
}
</style>