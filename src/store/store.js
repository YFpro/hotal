import Vue from 'vue';
function formDate(data){
    let month= data.getMonth()+1;
    let data1= data.getDate();
    return `${month}.${data1}`;
}
let store =Vue.observable({
     entertime:formDate(new Date()),
     leavetime:formDate(new Date()),
     night:0,
})
export default store;