<template>
  <div id="container">
    <header-poke></header-poke>
    <div class="container-pokemon">
      <div class="info-poke">
        <ul class="header-table table">
          <li>Nome</li>
          <li>Imagem</li>
          <li>Altura</li>
          <li>Peso</li>
          <li>Especie</li>
        </ul>
        <ul class="table-line table">
          <li>{{ pokemon.name }}</li>
          <li><img :src="pokemon.sprites.back_default" /></li>
          <li>{{ pokemon.height }}m</li>
          <li>{{ pokemon.weight }}kg</li>
          <li>{{ pokemon.species.name }}</li>
        </ul>
      </div>
    </div>
    <button>
      <router-link :to="{ name: 'home' }">Pagina principal</router-link>
    </button>
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

.info-poke {
  width: 50%;
}

.container-pokemon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.table {
  display: flex;
  justify-content: space-between;
  background: rgba(27, 228, 218, 0.8);
  padding: 10px 15px;
}
.table li {
  min-width: 10%;
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.table-line {
}
</style>
