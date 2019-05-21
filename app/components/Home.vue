<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/characters">Choisir un personnage</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'BIENVENUE DANS NOTRE JEU'
    };
  }
};
</script>
