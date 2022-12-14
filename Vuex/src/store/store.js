import Vue from "vue";
import Vuex from "vuex";
import counter from './modules/counter'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'


Vue.use(Vuex);

export const  store = new Vuex.Store({
    state : {
        value : 0
    },
    //Değer getirmek için getters
    getters,
    // Değer değiştirmek için mutation
    mutations,
    // Asenkron kullanımlar için actions
    actions,
    modules : {
        counter
    }
})