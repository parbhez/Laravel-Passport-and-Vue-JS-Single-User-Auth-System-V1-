import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';
// Create a new store instance.
const store = createStore({
    state: {
        token: localStorage.getItem('accessToken') || null,
    },

    getters: {
        loggedIn(state) {
            return state.token !== null;
        }
    },

    actions: {
        register(contex, formdata) {
            return new Promise((resolve, reject) => {
                axios.post('/register', {
                        name: formdata.name,
                        email: formdata.email,
                        password: formdata.password
                    })
                    .then((response) => {
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        },

        login(contex, credential) {
            return new Promise((resolve, reject) => {
                axios.post('/login', {
                        email: credential.email,
                        password: credential.password
                    })
                    .then((response) => {
                        localStorage.setItem('accessToken', response.data.data.access_token);
                        contex.commit('setToken', response.data.data.access_token);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        },

        logout(contex) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + contex.state.token;
            return new Promise((resolve, reject) => {
                axios.post('/logout')
                    .then((response) => {
                        localStorage.removeItem('accessToken');
                        contex.commit('removeToken');
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        }
    },

    mutations: {
        setToken(state, data) {
            state.token = data;
        },
        removeToken(state) {
            state.token = null;
        }
    }
})

export default store;