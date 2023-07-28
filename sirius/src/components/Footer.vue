<template>
  <div class="bg-blue d-flex w-100 align-center px-4">
    <strong>SIRIUS</strong>
    <v-spacer></v-spacer>
    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-4"
      :icon="icon"
      variant="plain"
      size="small"
    ></v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin"],
  }),
};
</script>

<style></style>
