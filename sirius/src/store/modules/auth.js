import axios from 'axios';

const state = {
    loggedIn: false,
    user: null,
    token: null
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
    }
};

const actions = {
    async logIn({ commit }, { username, password }) {
        try {
            const response = await axios.post('/api/auth/login', {
                username: username,
                password: password
            });

            if (response.data && response.data.token) {
                const token = response.data.token;
                localStorage.setItem('authToken', token); // Guardar el token en localStorage
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Establecer el token en las cabeceras de axios por defecto
                commit('SET_LOGGED_IN', true);
                commit('SET_USER', response.data.user);
                commit('SET_TOKEN', token);
            } else {
                throw new Error('Error during login.');
            }
        } catch (error) {
            console.error("There was an error logging in:", error);
            // Manejo adicional de errores, quizás quieras mostrar un mensaje al usuario
        }
    },

    logOut({ commit }) {
        localStorage.removeItem('authToken');  // Eliminar el token de localStorage
        delete axios.defaults.headers.common['Authorization']; // Quitar el token de las cabeceras por defecto de axios
        commit('SET_LOGGED_IN', false);
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
    },

    checkAuthStatus({ commit }) {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            commit('SET_LOGGED_IN', true);
            commit('SET_TOKEN', token);
            // Aquí podrías hacer una solicitud para obtener los detalles del usuario si es necesario
        } else {
            commit('SET_LOGGED_IN', false);
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
        }
    }
};

const getters = {
    isLoggedIn: (state) => state.loggedIn,
    currentUser: (state) => state.user,
    authToken: (state) => state.token
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
