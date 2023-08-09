<template>
    <!-- The main app container -->
    <v-app>
        <!-- The navigation bar component -->
        <NavBar @toggleDrawer="drawerOpen = !drawerOpen" @openDrawer="drawerOpen = true" />
        <!-- The footer component -->
        <v-footer app>
            <Footer />
        </v-footer>
        <!-- The navigation drawer component -->
        <v-navigation-drawer app width="450" :style="{ top: '150px' }" v-if="drawerOpen" @mouseleave="drawerOpen = false">
            <Menu :menuItems="menuData" />
        </v-navigation-drawer>
        <!--<NavDrawer />-->

        <!-- The main content area -->
        <v-main class="w-100 mx-auto my-auto pa-auto pt-0">
            <v-container>
                <!-- The router view component -->
                <router-view :style="{ top: '128px' }" />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import {
    ref
} from 'vue';
import NavBar from "/src/components/NavBar.vue";
import Footer from "/src/components/Footer.vue";
import Menu from "/src/components/Menu.vue";
// import NavDrawer from "/src/components/NavDrawer.vue";

// Import the menuData object from the menuData.js file
import { menuData } from "/src/components/menuData.js";

// Define a reactive variable to control the state of the navigation drawer
const drawerOpen = ref(true);

// Define a function to toggle the state of the navigation drawer
const toggleDrawer = () => {
    drawerOpen.value = !drawerOpen.value;
};
</script>
