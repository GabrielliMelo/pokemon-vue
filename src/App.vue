<template>
  <div id="app">
    <h1 class="header-h1">{{ titulo }} <img :src="poke.url" /></h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      titulo: "POKEMON",
      poke: {
        url:
          "https://th.bing.com/th/id/OIP.Q-3Vql8N5_QQ9eODJvS5TAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7"
      }
    };
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
</style>
