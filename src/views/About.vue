<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{city}} {{msg}}</h1>

    <h1 > {{msd}}</h1>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
export default {
    name:'About',
  data(){
      return{
          msd:'ddd'
      }
  },
  computed:mapState({
    city : state => state.city,
    msg : state => state.msg,
  }),

}
</script>
