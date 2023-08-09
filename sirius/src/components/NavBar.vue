<template>
<v-app-bar height="128" class="pa-3" elevation="3">
    <v-btn icon @mouseenter="$emit('openDrawer')" @click="$emit('toggleDrawer')">
        <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-container>
        <v-row no-gutters>
            <v-img class="mx-auto my-auto width-auto" border="0" aspect-ratio="4/3" height="128" src="../assets/images/escudo-png.png" />
        </v-row>
    </v-container>
</v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
