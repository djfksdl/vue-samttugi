import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
export default createStore({
    state() {
        return {
            apiBaseUrl: "http://localhost:9009",
            // apiBaseUrl: "http://13.125.251.10:9009",
            authUser: null,
            token: null

        };
    },
    mutations: {
        //
        setAuthUser(state, payload) {
            state.authUser = payload;
        },
        setAuthName(state, payload) {
            state.authUser.name = payload;
        },
        setToken(state, payload) {
            state.token = payload;
        },
        
    },
    plugins: [
        createPersistedState({
            paths: ['authUser', 'token']
        })
    ]

});