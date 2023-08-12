<template>
    <v-app>
        <Entrada v-if="!isLoggedIn" />
        <div v-else>
            <v-main fluid>
                <v-row no-gutters>
                    <v-col>
                        <v-container fluid><router-view /></v-container>
                    </v-col>
                </v-row>
            </v-main>
            <v-footer>
                <Footer />
            </v-footer>
        </div>
    </v-app>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import Footer from "/src/components/Footer.vue";
import Entrada from "/src/components/Entrada.vue";  // Asegúrate de que la ruta sea correcta

const store = useStore();
const isLoggedIn = computed(() => store.state.auth.loggedIn);

onMounted(() => {
    store.dispatch('auth/checkAuthStatus');
});
</script>
  