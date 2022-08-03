import Home from "./components/Home/Home.vue";
import PagePokemon from "./components/PogePokemon/PagePokemon.vue";

export const routes = [
  {
    path: "/homePokemon",
    name: "home",
    component: Home,
    titulo: "Home",
    menu: true,
  },
  {
    path: "/pokemon/:poke",
    name: "pokemon",
    component: PagePokemon,
    titulo: "pokemon",
    menu: true,
  },
  { path: "*", component: Home, menu: false },
];
