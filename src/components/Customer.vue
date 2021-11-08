<template>
    <div class="customer">
        <h1>Eu sou um cliente (componente)</h1>
        <p>Eu estou vendo {{totalCount}} TVs!</p>
        <p v-show="!totalCount">Não consegui comprar nada, acabaram as TVs</p>
        <p v-show="happyStaff">A equipe parece feliz</p>

        <input type="text" v-model="quantidade"  name="quantidade" />
        <button :disabled="!totalCount" type="button" @click="comprarTv">Comprar TV</button>
    </div>
</template>

<script>
export default {
    name: 'Customer',
    data(){
        return {
            quantidade: 1
        }
    },
    computed: {
        totalCount: function(){
            return this.$store.state.totalTv;
        },

        happyStaff() {
            return this.$store.getters.funcionariosFelizes;
        }
    },
    methods: {
        comprarTv() {
            // Chama a ação de remover TV do Store
            this.$store.dispatch('removeTv', this.quantidade);
        }
    }
}
</script>