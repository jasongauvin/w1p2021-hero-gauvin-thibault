<template>
  <article>
    <h2>{{ character.name }} </h2>
    <h3> {{ character.speciality }} </h3>
    <img :src="character.image" alt="">
    <div class="test">Je choisis celui-ci</div>

  </article>
  
</template>

<style lang="scss">
article {
  h2 {
  text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 50px;
    line-height: 180%;
  }

  h3 {
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 20px;
    line-height: 180%;
  }
  .test {
    text-align: center;
    font-family: "Rubber Biscuit";
    font-weight: bold;
    color: gold;
    font-size: 20px;
    line-height: 180%;
  }
}
</style>


<script>


export default {
  props: ['character']
};
</script>
