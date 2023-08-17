import axios from 'axios';

const state = {
    loggedIn: false,
    user: null,
    token: null,
    level: null
};

const mutations = {
    SET_LOGGED_IN(state, value) {
        state.loggedIn = value;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_LEVEL(state, level) {
        state.level = level;
    }
};

const actions = {
    async logIn({ commit }, { Usuario, Password }) { //Aún no esta implementado, la implementación esta directamente en el Entrada.vue
        try {
            const response = await axios.post('/api/auth/login', {
                Usuario: Usuario,
                Password: Password
            });

            if (response.data && response.data.body.token && response.data.body.level) {
                const token = response.data.body.token;
                const level = response.data.body.level;
                localStorage.setItem('authToken', token);
                localStorage.setItem('authLevel', level);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                axios.defaults.headers.common['authLevel'] = level;
                commit('SET_LOGGED_IN', true);
                commit('SET_USER', response.data.user);
                commit('SET_TOKEN', token);
                commit('SET_LEVEL', level);
            } else {
                throw new Error('Error during login.');
            }
        } catch (error) {
            console.error("There was an error logging in:", error);
        }
    },

    logOut({ commit }) {  //Este tampoco
        localStorage.removeItem('authToken');
        localStorage.removeItem('authLevel');
        delete axios.defaults.headers.common['Authorization'];
        delete axios.defaults.headers.common['authLevel'];
        commit('SET_LOGGED_IN', false);
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
        commit('SET_LEVEL', null);
    },
    checkAuthStatus({ commit }) {
        const token = localStorage.getItem('authToken');
        const level = localStorage.getItem('authLevel');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.defaults.headers.common['authLevel'] = level;
            if (level === '1') {
                commit('SET_USER', 'Admin');
            } else if (level === '2') {
                commit('SET_USER', 'Revisor');
            } else if (level === '3') {
                commit('SET_USER', 'Coordinador');
            } else if (level === '4') {
                commit('SET_USER', 'Usuario');
            }
            commit('SET_LOGGED_IN', true);
            commit('SET_TOKEN', token);
            commit('SET_LEVEL', level);
        } else {
            commit('SET_LOGGED_IN', false);
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
            commit('SET_LEVEL', null);
        }
    }
};

const getters = {
    isLoggedIn: (state) => state.loggedIn,
    currentUser: (state) => state.user,
    authToken: (state) => state.token,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};