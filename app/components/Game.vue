<template>
  <div class="big-header">

    <h1>{{ $route.params.id }}</h1>

  <router-link to="2">ETAPE 2</router-link>
  </div>
</template>

<script>
import data from "../../data.json";


export default {
  data() {
    return {
      message: 'Le jeu commence',
      message1: data.levels['1'].responce[0],
      message2: 'prout'
    };
  },
  mounted: function(){
    console.log(this.$route) 
  },
  methods: {
    getStep(){
      return data.steps.find(
      step => step.id === Number(this.$route.params.id)
      )
    }
  },
  watch: {
    '$route.params.id' (to, from){
      this.step = this.getStep();
    }
  }
};
</script>
