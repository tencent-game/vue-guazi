import Vue from "vue";
import Vuex from "vuex";
import cityInfo from "./modules/cityInfo.js";
import showCom from './modules/showCom.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        cityInfo,
        showCom
    },
    state:{},
    mutations:{},
    actions:{},
    getters:{}
});
