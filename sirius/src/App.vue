<template>
  <v-app>
    <v-row class="pb-14"> <NavBar /></v-row>
    <v-main fluid>
      <v-row no-gutters>
        <v-col cols="4" xs="3" sm="3" md="4" lg="4" xl="4">
          <v-container fluid><NavDrawer /></v-container
        ></v-col>
        <v-col cols="8" xs="9" sm="9" md="8" lg="8" xl="8">
          <v-container class="mt-n16 ml-0 mr-0 pl-0 pr-auto" fluid
            ><router-view
          /></v-container>
        </v-col>
      </v-row>
    </v-main>
    <v-footer app><Footer /></v-footer>
  </v-app>
</template>

<script setup>
import NavDrawer from "/src/components/NavDrawer.vue";
import NavBar from "/src/components/NavBar.vue";
import Footer from "/src/components/Footer.vue";
</script>
