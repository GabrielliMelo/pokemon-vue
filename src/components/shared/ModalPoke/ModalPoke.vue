<template>
  <section class="container-modal" v-show="visivel">
    <nav class="card-modal-poke" @click="visivel = !visivel">
      <span>Nome: {{ nome }}</span>
      <slot></slot>
      <img :src="url" :alt="alt" />
      <span>Altura: {{ altura }}</span>
      <span>Peso: {{ peso }}</span>
      <span>Especie: {{ especie }}</span>
    </nav>
  </section>
</template>

<script>
export default {
  props: ["nome", "altura", "especie", "peso", "url", "alt", "visivel"],
};
</script>

<style scorped>
.container-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 8, 8, 0.7);
}
.card-modal-poke {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 15%;
  height: 40%;
  box-shadow: 2px 2px 15px rgb(0, 0, 0);
  padding: 20px;
  font-size: 1.5rem;
}
</style>
