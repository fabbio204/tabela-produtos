<template>
  <table>
    <thead>
      <tr>
        <th>Produtos/Meses</th>
        <th v-for="mes in cabecalho" :key="mes">
          {{ mes }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in produtos" :key="item">
        <td>{{ item.produto }}</td>
        <td v-for="mes in cabecalho" :key="mes + '_produto'">
          {{ item[mes] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Tabela",
  props: ["dados"],
  computed: {
    cabecalho: function () {
      let meses = [];
      this.dados.forEach((x) => {
        if (!meses.includes(x.mes)) {
          meses.push(x.mes);
        }
      });

      return meses;
    },

    produtos: function () {
      let lista = [];

      for (let mes of this.cabecalho) {
        for (let item of this.dados) {
          if (item.mes == mes) {
            let novoProduto = {};
            if (lista.some((x) => x.produto == item.produto)) {
              let index = lista.findIndex((x) => x.produto == item.produto);
              lista[index][mes] = item.quantidade;
            } else {
              novoProduto.produto = item.produto;
              novoProduto[mes] = item.quantidade;
              lista.push(novoProduto);
            }
          }
        }
      }

      return lista;
    },
  },
};
</script>