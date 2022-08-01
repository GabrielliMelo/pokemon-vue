<template>
  <div id="app">
    <!-- Header -->
    <h1 class="header-h1">
      {{ titulo }}
      {{ filtro }}
      <ul>
        <li v-for="menu of menuHeader">{{ menu }}</li>
      </ul>
      <img :src="poke.url" />
    </h1>
    <!--  -->
    <!-- Input -->
    <div>
      <input
        type="search"
        placeholder="Buscar Pokemon"
        class="filtro"
        @input="filtro = $event.target.value"
      />
      <button @click="buscar()">Buscar</button>
    </div>

    <!--  -->
    <!-- card pokemon -->
    <div class="container-list-pokemons">
      <div class="container-cards">
        <nav v-for="pokemon of listaComFiltro">
          <card-poke
            :nome="pokemon.name"
            :altura="pokemon.height"
            :peso="pokemon.weight"
            :especie="pokemon.species.name"
            :url="pokemon.sprites.back_default"
            :alt="pokemon.name"
          >
          </card-poke>
        </nav>
      </div>
    </div>
    <!--  -->
    <!-- Modal -->
    <modal-poke
      :nome="pokemon.name"
      :altura="pokemon.height"
      :peso="pokemon.weight"
      :especie="pokemon.name"
      :url="poke.url"
      :visivel="visivel"
    ></modal-poke>

    <!--  -->
  </div>
</template>

<script>
import CardPokemon from "./components/shared/CardPoke/CardPoke.vue";
import ModalPoke from "./components/shared/ModalPoke/ModalPoke.vue";
export default {
  components: {
    "card-poke": CardPokemon,
    "modal-poke": ModalPoke
  },
  data() {
    return {
      titulo: "POKEMON",
      menuHeader: ["", ""],
      poke: {
        url:
          "https://th.bing.com/th/id/OIP.Q-3Vql8N5_QQ9eODJvS5TAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7"
      },
      listPokemons: [],
      filtro: "",
      pokemon: {
        name: "ditto"
      },
      visivel: false
    };
  },
  created() {
    {
      if (!this.filtro) {
        this.$http
          .get(
            "https://back-pokemon-simbiox.herokuapp.com/pokemons?limit=10page=1"
          )
          .then(res => res.json())
          .then(
            pokemons => (this.listPokemons = pokemons),
            err => console.log(err)
          );
      }
    }
    {
      console.log(this.pokemon);
    }
  },
  computed: {
    listaComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.listPokemons.filter(pokemon => exp.test(pokemon.name));
      } else {
        this.visivel = false;
        return this.listPokemons;
      }
    }
  },
  methods: {
    buscar() {
      if (this.filtro) {
        this.$http
          .get(
            `https://back-pokemon-simbiox.herokuapp.com/pokemons/${this.filtro}`
          )
          .then(res => res.json())
          .then(
            pokemon => {
              this.pokemon = pokemon;
              this.visivel = true;
            },
            err => console.log(err)
          );
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Montserrat:wght@400;600;700&family=Mouse+Memoirs&family=Nunito:wght@400;600;700&family=Pacifico&family=Roboto+Condensed:ital,wght@1,700&display=swap");
body {
  font-family: "Mouse Memoirs", sans-serif;
}
.header-h1 {
  display: flex;
  font-family: "Mouse Memoirs", sans-serif;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  box-shadow: 2px 2px 15px rgb(3, 3, 3);
  color: rgb(238, 34, 34);
}

.header-h1 img {
  border-radius: 100px;
  box-shadow: 2px 2px 18px rgb(102, 0, 0);
  width: 5%;
}

/* card */

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

li {
  list-style: none;
}
</style>
