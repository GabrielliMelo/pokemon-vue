<template>
  <nav class="card-poke">
    <span>Nome: {{ nome }}</span>
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
};
</script>

<style scorped>
.card-poke {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-width: 60%;
  box-shadow: 2px 2px 15px rgb(0, 0, 0);
  padding: 20px;
  font-size: 1.3rem;
}
</style>
