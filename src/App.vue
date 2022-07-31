<template>
  <div id="app">
    <!-- Header -->
    <h1 class="header-h1">
      {{ titulo }}
      <ul>
        <li v-for="menu of menuHeader">{{ menu }}</li>
      </ul>
      <img :src="poke.url" />
    </h1>

    <!-- card pokemon -->
    <div class="container-list-pokemons">
      <div class="container-cards">
        <ul class="card-poke" v-for="poke of listPokemons">
          <li>Nome: {{ poke.name }}</li>
          <li><img :src="poke.sprites.back_default" /></li>
          <li>Altura: {{ poke.height }}</li>
          <li>Peso: {{ poke.weight }}</li>
          <li>Especie: {{ poke.species.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      titulo: "POKEMON",
      menuHeader: ["Contato", "teste"],
      poke: {
        url:
          "https://th.bing.com/th/id/OIP.Q-3Vql8N5_QQ9eODJvS5TAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7"
      },
      listPokemons: []
    };
  },
  created() {
    this.$http
      .get("https://back-pokemon-simbiox.herokuapp.com/pokemons?limit=10page=1")
      .then(res => res.json())
      .then(
        pokemons => (this.listPokemons = pokemons),
        err => console.log(err)
      );
  }
};
</script>

<style>
.header-h1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  box-shadow: 2px 2px 15px rgb(0, 0, 0);
}

.header-h1 img {
  border-radius: 100px;
  box-shadow: 2px 2px 18px rgb(255, 0, 0);
  width: 5%;
}

.container-list-pokemons {
  display: flex;
  justify-content: center;
}

.container-cards {
  display: flex;
  width: 50%;
  gap: 30px;
  flex-wrap: wrap;
}

.card-poke {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 18%;
  box-shadow: 2px 2px 15px rgb(0, 0, 0);
  padding: 20px;
}
li {
  list-style: none;
}
</style>
