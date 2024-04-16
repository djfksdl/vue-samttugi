import { createStore } from 'vuex';
export default createStore({
    state() {
        return {
            apiBaseUrl: "http://localhost:9009",
            // apiBaseUrl: "http://13.125.251.10:9009",
        };
    },
    mutations: {


    },
    plugins: [
    ]
});