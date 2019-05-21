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
  font-size : 24px;
  font-weight: bold;
  }

  h3 {
    font-size: 18px;
    text-decoration: underline;
  }
  .test {
    background: blue;
    width: auto;
    height: auto;
  }
}
</style>


<script>


export default {
  props: ['character']
};
</script>
