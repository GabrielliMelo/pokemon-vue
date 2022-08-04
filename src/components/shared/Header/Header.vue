<template>
  <h1 class="header-h1">
    {{ titulo }}
    <ul>
      <li v-for="menu of menuHeader">{{ menu }}</li>
    </ul>
    <img :src="poke.url" />
  </h1>
</template>

<script>
export default {
  data() {
    return {
      titulo: "POKEMON",
      menuHeader: ["", ""],
      poke: {
        url: "https://th.bing.com/th/id/OIP.Q-3Vql8N5_QQ9eODJvS5TAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",
      },
    };
  },
};
</script>

<style>
.header-h1 {
  display: flex;
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 3.5rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 10px 50px;
  box-shadow: 3px 3px 10px rgb(0, 0, 0);
  color: rgb(238, 34, 34);
}

.header-h1 img {
  border-radius: 100px;
  box-shadow: 2px 2px 18px rgb(102, 0, 0);
  width: 5%;
}
</style>
