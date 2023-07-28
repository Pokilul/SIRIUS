<template>
  <v-app>
    <v-app-bar><NavBar /></v-app-bar>
    <v-navigation-drawer
      class="mx-auto my-auto w-25 pa-3"
      theme="white"
      floating
      ><NavDrawer
    /></v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <!--<v-footer app><Footer /></v-footer>-->
    <div>
      <v-footer><Footer /></v-footer>
    </div>
  </v-app>
</template>

<script setup>
import NavDrawer from "/src/components/NavDrawer.vue";
import NavBar from "/src/components/NavBar.vue";
import Footer from "/src/components/Footer.vue";
</script>
