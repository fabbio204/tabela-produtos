import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        totalTv: 10, // Quantidade total de TVs,
        isLarryFeliz: true,
        isJennyFeliz: true
    },

    getters: {
        funcionariosFelizes: state => state.isLarryFeliz && state.isJennyFeliz
    },

    mutations: {
        // Jenny
        removerTvs(state, quantidade) {
            state.totalTv -= quantidade;
        }
    },

    actions: {
        // Larry
        removeTv(context, quantidade) {
            // Se tiver TVs o suficiente, remove as TVs
            if(context.state.totalTv >= quantidade) {
                // Pede à Jenny para remover as TVs
                context.commit('removerTvs', quantidade);
            }
        }
    }
});