import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://back-pokemon-simbiox.herokuapp.com";

Vue.use(VeeValidate, {
  locale: "pt_BR",
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
