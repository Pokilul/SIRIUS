import 'vuetify/styles'
import { createApp } from 'vue';
import axios from 'axios';

import App from './App.vue';
import { registerPlugins } from '@/plugins';
import store from './store';

// Configura axios
axios.defaults.baseURL = 'http://localhost:4000/';  // Ajusta con la URL base de tu backend

// Interceptor para incluir el token en las cabeceras de las solicitudes
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const app = createApp(App);
app.use(store);
registerPlugins(app);

app.mount('#app');
