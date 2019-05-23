<template>
  <div class="big-header" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="text">
      <h1>{{ phase.garçon.message }}</h1>
      <h1 v-if="character === 'fille'">{{ phase.fille.message }}</h1>    
      <!-- <h1>{{items.sword}}</h1> -->
      <div class="item" data-content="3"></div>
      <!-- <div class="item" v-for="answer in items"
      v-bind:key="answer.message">
      {{answer.message}}
      </div> -->


          <p class="button" v-for="answer in answers"
            v-bind:key="answer.message"
            v-on:click="itemChoice(answer.items, answer.link)">
            {{answer.message}}
          </p>        

      <!-- <router-link

        v-for="answer in answers"
        v-bind:key="answer.message"
        class="button"
        :to="answer.link"
      >{{answer.message}}
      </router-link> -->
    </div>

    <section class="charstat">
      <img src="../assets/images/coco/Bitmap.png" alt="charcter">
      <ul class="stat">
        <li>
          <img v-if="items.sword >= 1" src="../assets/images/coco/sword.png" alt="">
        </li>
        <li>
          <img src="../assets/images/coco/shield.png" alt="">
        </li>
        <li>
          <img src="../assets/images/coco/sick.png" alt="">
        </li>
        <li>
          <img src="../assets/images/coco/thief.png" alt="">
        </li>
      </ul>
    </section>

  <section class="runes">
    <ul class="rune">
      <li>
        <img src="../assets/images/coco/rune1.png" alt="">
      </li>
      <li>
        <img src="../assets/images/coco/rune2.png" alt="">
      </li>
      <li>
        <img src="../assets/images/coco/rune3.png" alt="">
      </li>
      <li>
        <img src="../assets/images/coco/rune4.png" alt="">
      </li>
    </ul>
  </section>
  <section class="money">
    <img src="../assets/images/coco/coin.png" alt="charcter">
    <p>{{items.money}}</p>
  </section>
  </div>
  
</template>

<style lang="scss" scoped>
.big-header {
  width: 940px;
  height: 940px;
  background-size: cover;
  position: relative;
}
.text{
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 700px;
  height: 400px;
  position: absolute;
  top: 500px;
  left: 940px;
  border: 20px solid goldenrod;
  h1{
    padding: 20px;
    line-height: 140%;
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 30px;
  }
  .button{
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 20px;
    padding: 30px;
    background-color: black;
    border: 5px solid goldenrod;
  }
}
  .charstat{
  background-color: black;
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 260px;
  position: absolute;
  top: 0px;
  left: 940px;
  border: 20px solid goldenrod;
}
.stat{
  width: 440px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
}
.runes{
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 450px;
  height: 200px;
  position: absolute;
  top: 300px;
  left: 940px;
  border-left: 20px solid goldenrod;
}
.rune{
  width: 440px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
}

.money{
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  height: 200px;
  position: absolute;
  top: 300px;
  left: 1390px;
  border-left: 20px solid goldenrod;
  border-right: 20px solid goldenrod;
  p{
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 50px;
  }
}
</style>


<script>

import data from "../../data.json";
import itemsService from "../services/itemsService.js";

// import Map from "../services/mappingGame.js";
import character from '../services/characterService.js';
import step from '../services/stepService.js';



export default {
  data() {
    return {
/*    map: this.createMap(),
      images: [], 
      message: game.steps[this.$route.params.id].message,
      mage: data.game[this.$route.params.id].image,*/
      phase: data.steps[this.$route.params.id],
      answers: this.characterChoice(),
      step: this.setStep(),
      character: character.get(),
      image: data.steps[this.$route.params.id].image,
      items: itemsService.getItems(),

    }
  },
  methods: {
    
    createMap() {
      setTimeout(() => {
        const map = new Map(document.querySelector('.big-header'), 5, game);
        this.images = map.create(this.$route.params.id).map(image => require(image));
      }, 200);
    },
    characterChoice() {
      let answers = data.steps[this.$route.params.id].garçon.answers //attention à GARçON
      let result = []
      let characterName = answers.name // character.get()
      answers.forEach(answer => {
      answer.perso === characterName || answer.perso === 'Tous' ? result.push(answer) : ''
      });
      console.log("answersTab",answers)

      return result
    },
    setStep() {
      step.set(this.$route.params.id)
      this.phase = this.$route.params.id
    },
    itemChoice(items, link) {
      console.log('items: ', items);
      itemsService.update(items);
      this.$router.push(link);
    }
/*     getStep(){
      return data.steps.find(
      step => step.id === parInt(this.$route.params.id)
      )
    } */
  },
  
  watch: {
    '$route.params.id' (to, from){
      this.step = this.getStep();
    }
  }
};

</script>
