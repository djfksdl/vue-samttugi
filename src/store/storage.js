import { createStore } from 'vuex';
export default createStore({
    state() {
        return {
            apiBaseUrl: "http://localhost:9000",
            // apiBaseUrl: "http://13.125.251.10:9001",
        };
    },
    mutations: {


    },
    plugins: [
    ]
});