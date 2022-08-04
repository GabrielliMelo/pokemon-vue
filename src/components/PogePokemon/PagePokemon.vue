<template>
  <div id="container">
    <header-poke></header-poke>

    <button><router-link :to="{ name: 'home' }">Voltar</router-link></button>
  </div>
</template>

<script>
import Header from "../shared/Header/Header.vue";

export default {
  components: {
    "header-poke": Header,
  },
  data() {
    return {
      poke: this.$route.params.poke,
      pokemon: {},
    };
  },
  created() {
    this.$http
      .get(`https://back-pokemon-simbiox.herokuapp.com/pokemons/${this.poke}`)
      .then((res) => res.json())
      .then(
        (pokemon) => {
          this.pokemon = pokemon;
          console.log(pokemon);
        },
        (err) => console.log(err)
      );
  },
};
</script>

<style>
#container {
  background-image: url("../../assets/place.png");
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
