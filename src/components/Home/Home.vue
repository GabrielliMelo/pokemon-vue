<template>
  <div class="container">
    <input
      type="search"
      placeholder="Buscar Pokemon"
      class="filtro"
      @input="filtro = $event.target.value"
    />
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      titulo: "POKEMONS",
      filtro: "",
      mensagem: ""
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove(foto) {
      this.service.apaga(foto._id).then(
        () => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = "Foto removida com sucesso";
        },
        err => {
          console.log(err);
          this.mensagem = "Não foi possível remover a foto";
        }
      );
    }
  },

  created() {
    this.service = new FotoService(this.$resource);

    this.service.lista().then(
      fotos => (this.fotos = fotos),
      err => (this.mensagem = err.message)
    );
  }
};
</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
