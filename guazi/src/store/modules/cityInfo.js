export default ({
    namespaced: true,
    state: {
        city:{
            domain: "bj",
            geo_id: 12,
            geo_type: 1,
            gps: "116.407413,39.904214",
            id: 12,
            name: "北京",
            pinyin: "beijing",
            type: 1
        }
    },
    mutations: {
        setCity(state, city) {
            state.city= city;
        }
    },
    actions: {
        changeCityName({ commit }, city) {
            commit('setCity', city)
        }
    },

})