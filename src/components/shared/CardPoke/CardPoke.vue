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
}

.favorito span {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 2rem;
}
</style>
