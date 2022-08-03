<template>
  <div id="container">
    <!-- Header -->
    <header-poke></header-poke>
    <!--  -->
    <!-- Input -->
    <div class="input">
      <input
        type="search"
        placeholder="Buscar Pokemon"
        class="filtro"
        @input="filtro = $event.target.value"
      />
      <div class="filtro-name" v-if="filtro.length > 0">
        Buscar --> {{ filtro }}
      </div>
      <button @click="voltar()" v-if="filtro.length > 0">Voltar</button>
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
    <!-- modal -->
    <transition name="modal">
      <modal-poke
        :nome="pokemon.name"
        :altura="pokemon.height"
        :peso="pokemon.weight"
        :especie="pokemon.name"
        :url="poke.url"
        :visivel="visivel"
      ></modal-poke>
    </transition>

    <!--  -->

    <div class="input" v-if="filtro.length == 0">
      <button @click="prevPage()">Anterior</button>

      <button>Pagina {{ page }}</button>
      <button @click="nextPage()">Proxima</button>
    </div>
  </div>
</template>

<script>
import CardPokemon from "../shared/CardPoke/CardPoke.vue";
import ModalPoke from "../shared/ModalPoke/ModalPoke.vue";
import Header from "../shared/Header/Header.vue";

export default {
  components: {
    "card-poke": CardPokemon,
    "modal-poke": ModalPoke,
    "header-poke": Header,
  },
  data() {
    return {
      titulo: "POKEMON",
      menuHeader: ["", ""],
      poke: {
        url: "https://th.bing.com/th/id/OIP.Q-3Vql8N5_QQ9eODJvS5TAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",
      },
      listPokemons: [],
      filtro: "",
      pokemon: {
        name: "ditto",
      },
      visivel: false,
      page: 1,
    };
  },
  created() {
    {
      if (!this.filtro) {
        this.paginacaoPokemons(this.page);
      }
    }
  },
  computed: {
    listaComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.listPokemons.filter((pokemon) => exp.test(pokemon.name));
      } else {
        this.visivel = false;
        return this.listPokemons;
      }
    },
  },
  methods: {
    buscar() {
      if (this.filtro) {
        this.$http
          .get(
            `https://back-pokemon-simbiox.herokuapp.com/pokemons/${this.filtro}`
          )
          .then((res) => res.json())
          .then(
            (pokemon) => {
              this.pokemon = pokemon;
              this.visivel = true;
            },
            (err) => console.log(err)
          );
      }
    },
    paginacaoPokemons(pagina) {
      if (!this.filtro) {
        this.$http
          .get(
            `https://back-pokemon-simbiox.herokuapp.com/pokemons?limit=10&page=${pagina}`
          )
          .then((res) => res.json())
          .then(
            (pokemons) => (this.listPokemons = pokemons),

            (err) => console.log(err)
          );
      }
    },
    nextPage() {
      this.page += 1;
      this.paginacaoPokemons(this.page);
    },
    prevPage() {
      if (this.page === 1) {
        return;
      }
      this.page -= 1;
      this.paginacaoPokemons(this.page);
    },
    voltar() {
      this.filtro = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Montserrat:wght@400;600;700&family=Mouse+Memoirs&family=Nunito:wght@400;600;700&family=Pacifico&family=Roboto+Condensed:ital,wght@1,700&display=swap");
body {
  font-family: "Mouse Memoirs", sans-serif;
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
.input {
  text-align: center;
  padding: 50px;
}
button {
  padding: 10px;
}
.filtro {
  padding: 10px;
}
.filtro-name {
  padding: 30px;
  font-size: 3.9rem;
  color: rgb(255, 0, 0);
}
</style>
