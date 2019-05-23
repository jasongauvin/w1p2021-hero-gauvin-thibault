<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/characters">Choisir un personnage</router-link>
    <router-link class="button" :to="'/game/' + getStep()">Reprendre</router-link>

  </div>
</template>

<style lang="scss" scoped>
  .items {
    height: 10px ;
    width: 10px;
    background-color: black;
  }
</style>


<script>
import step from "../services/stepService.js";
import data from "../../data.json";


export default {
  data() {
    return {
      message: "Home page",
      image: data.home.image, 

    };
  },
  methods: {
    getStep() {
      return step.get();
    }
  }
};
</script>
