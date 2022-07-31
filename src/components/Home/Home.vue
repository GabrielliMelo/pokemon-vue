<template>
  <div class="container">
    <!-- Header -->
    <h1 class="header-h1">
      {{ titulo }}
      <ul>
        <li v-for="menu of menuHeader">{{ menu }}</li>
      </ul>
      <img :src="poke.url" />
    </h1>
    <!--  -->
    <!-- Input -->
    <input
      type="search"
      placeholder="Buscar Pokemon"
      class="filtro"
      @input="filtro = $event.target.value"
    />
    <!--  -->
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Montserrat:wght@400;600;700&family=Mouse+Memoirs&family=Nunito:wght@400;600;700&family=Pacifico&family=Roboto+Condensed:ital,wght@1,700&display=swap");

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
