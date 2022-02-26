import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage
})
const store=new Vuex.Store({
    state:{
        indexSearch:{
            city:'岚县',
            city1:'太原',
            address:'',
            startTime:'',
            endTime:'',
            startDay:'',
            endDay:'',
            day:'',
        },
        udata:{},
        collection:[],
        token:'',
    },
    getters:{
      ischange(state){
          return function (id) {
              return  state.collection.some(ele=>ele === id);
          }
      }
    },
    mutations:{
         setCity(state,city){
             state.indexSearch.city= city
         },
        setCity1(state,city){
             state.indexSearch.city1=city
        },
        setTime(state,payload){
             let weekArr=['Sun','Mon','Tur','Wed','Thu','Fri','Sat'];
            let {start,end,startDay,endDay,day} = payload;
            let date = new Date();
            let startTime = start? start : date.getMonth()+1+'.'+ date.getDate();
            let endTime = end? end : date.getMonth()+1+'.'+ date.getDate() +2;
             startDay = startDay===undefined? date.getDay() : startDay;
             endDay = endDay===undefined? startDay+2 : endDay;
            state.indexSearch.startTime = startTime;
            state.indexSearch.endTime = endTime;
            state.indexSearch.day = day;
            state.indexSearch.startDay = weekArr[startDay];
            state.indexSearch.endDay = weekArr[endDay];
        },
        setToken(state,payload){
             state.token=payload;
        },
        setUdata(state,payload){
             state.udata=payload;
        },
        setCollection(state,payload){
              state.collection=payload;
        },
        handleCollection(state,sid){
             let flag = state.collection.indexOf(sid);
              if(flag===-1){
                     state.collection.push(sid);
              }else {
                  state.collection.splice(flag,1);
              }
        }
    },
    actions:{

    },
    modules:{
    },
    plugins: [vuexLocal.plugin]


})
export default store;