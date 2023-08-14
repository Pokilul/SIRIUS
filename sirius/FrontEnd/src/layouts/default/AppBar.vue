<template>
  <div @mouseover="showDrawer">
    <v-app-bar app height="160">
      <v-container>
        <v-img
          class="width-auto"
          aspect-ratio="4/3"
          height="128"
          :src="escudoImage"
        />
      </v-container>
    </v-app-bar>
  </div>
  <v-navigation-drawer
    class="bg-grey-lighten-2 mt-5"
    app
    width="450"
    floating
    v-model="drawer"
    @mouseleave="hideDrawer"
  >
    <Menu :menuItems="menuData" />
  </v-navigation-drawer>
</template>

<script>
import escudo from "@/assets/images/escudo-png.png";
import Menu from "@/components/Menu";
import { menuData } from "@/components/menuData.js";

export default {
  components: {
    Menu,
  },
  data() {
    return {
      escudoImage: escudo,
      menuData: menuData,
      drawer: false,
    };
  },
  methods: {
    showDrawer() {
      this.drawer = true;
    },
    hideDrawer() {
      this.drawer = false;
    },
  },
};
</script>

<style></style>
