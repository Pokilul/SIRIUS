<template>
  <v-app>
    <NavBar />
    <v-footer app><Footer /></v-footer>
    <NavDrawer />
    <v-main class="w-100 mx-auto my-auto pa-auto pt-0">
      <v-container><router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavDrawer from "/src/components/NavDrawer.vue";
import NavBar from "/src/components/NavBar.vue";
import Footer from "/src/components/Footer.vue";
</script>
