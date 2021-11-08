<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <tabela :dados="json" />
    <customer/>
  </div>
</template>

<script>
import Customer from './components/Customer.vue';
import Tabela from "./components/Tabela.vue";

export default {
  name: "App",
  components: {
    Tabela,
    Customer,
  },
  data: function () {
    return {
      json: [
        { produto: "Notebook", mes: "01/2021", quantidade: 15 },
        { produto: "Notebook", mes: "02/2021", quantidade: 16 },
        { produto: "Celular", mes: "01/2021", quantidade: 16 },
        { produto: "Celular", mes: "02/2021", quantidade: 30 },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
