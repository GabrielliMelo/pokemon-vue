<template>
  <nav class="card-poke" @dblclick="visivel = !visivel">
    <span class="favorito"
      >Nome: {{ nome }} <span v-show="visivel">&#128149;</span>
    </span>
    <slot></slot>
    <img :src="url" :alt="alt" />
    <span>Altura: {{ altura }}</span>
    <span>Peso: {{ peso }}</span>
    <span>Especie: {{ especie }}</span>
    <router-link :to="{ name: 'pokemon', params: { poke: nome } }"
      >informações</router-link
    >
  </nav>
</template>

<script>
export default {
  props: ["nome", "altura", "especie", "peso", "url", "alt"],
  data() {
    return {
      visivel: false,
    };
  },
};
</script>

<style scorped>
.card-poke {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 220px;
  box-shadow: 2px 2px 15px rgb(0, 0, 0);
  padding: 20px;
  font-size: 1.3rem;
  position: relative;
  background: rgba(115, 200, 233, 0.85);
}

.card-poke img {
  width: 120px;
}

.favorito span {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 2rem;
}
a {
  color: rgb(196, 23, 129);
}
</style>
