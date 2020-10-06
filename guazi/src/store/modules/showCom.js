export default ({
    namespaced: true,
    state: {
       show:true
    },
    mutations: {
        setInfo(state, info) {         
            state.show=info
        }
    },
    actions: {
        changeShow({ commit }, info) {
            console.log(info);
            commit('setInfo', info)
        }
    },

})