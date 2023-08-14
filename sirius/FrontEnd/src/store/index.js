import { createStore } from 'vuex';
import auth from './modules/auth'; // Asegúrate de que la ruta es correcta

const store = createStore({
  modules: {
    auth
  }
});

export default store;
