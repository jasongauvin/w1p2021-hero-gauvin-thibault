<template>
    <div class="big-header" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <h1> Avec qui pars-tu à l'aventure ?</h1>
    <h3>{{ message }}</h3>
    <div class="characters">
        <Character  v-for="character in characters" :key="character.name" :character="character" />
    </div>
    <router-link class="button" to="/home">Retour</router-link>
    <router-link class="button" to="/test/0">Play</router-link>
  </div>
</template>
<style lang="scss" scoped>
* {
    font-family: Avenir;
}
h1 {
    font-size: 24px;
    padding: 30px;
}
.characters {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50vw;
    height: 40vh;
}
</style>
<script>
import Character from './Character.vue';
import data from "../../data.json";


export default {
  data: function() {
    return {
      message: data.characters['1'].name,
      characters: [
        {
        name : "Peter",
        speciality : "saut",
        image : require('/assets/images/characters/perso1/greenbottom.gif')
      },
      {
        name : "Rocco",
        speciality : "Zbeb Zbeb",
        image : require('/assets/images/characters/perso1/greendown.gif')
      }
      ]
    }
  },
  components: {
    Character
  }
};
</script>
