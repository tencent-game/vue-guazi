import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const store =new Store({
    state:{
        bool:false,
        id:12,
        name:"北京",
        domain:'bj',
        car:{},
        shopping:{}
    },

    mutations:{
        setCity(state,city){
            let {name,id,bool,domain} =city
            state.id=id
            state.name=name
            state.bool=bool
            state.domain=domain
            
        },
        setCar(state,car){
            state.car=car
        },
        setShopping(state,shopping){
            state.shopping=shopping
        }
    },
    actions: {
        changeCityName({commit}, city) {
          commit('setCity', city)
        },
        changeCar({commit},car){
            commit('setCar',car)
        },
        changeShopping({commit},shopping){
            commit('setShopping',shopping)
        }
      }
})



// 

export default 
    store
    
