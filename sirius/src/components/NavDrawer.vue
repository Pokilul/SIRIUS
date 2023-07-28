<template>
  <v-card class="mx-auto" variant="tonal">
    <v-list nav>
      <v-list-item title="Autodiagnóstico SLISC" prepend-icon="mdi-collage" />
      <hr />
      <!-- CATEGORÍA 1 -->
      <v-list-group fluid>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-folder"
            title="1. Fundamentos y condiciones de operación"
            @click.stop
          ></v-list-item>
        </template>
        <!-- CATEGORÍA 1.1 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="1.1. Propósitos del programa, misión y visión"
              @click.stop
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in adminItems"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 1.2 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="1.2 Fundamentos de la necesidad del programa"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in adminItems2"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
      </v-list-group>
      <hr />
      <!-- CATEGORÍA 2 -->
      <v-list-group fluid>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-folder"
            title="2. Currículum específico y genérico"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in crudItems"
          :key="i"
          :title="item.title"
          :prepend-icon="item.icon"
          :value="item.title"
          @click.stop
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isOpenCategory1: true,
    isOpenCategory2: true,
    adminItems: [
      {
        title: "1.1.1. Misión y visión del programa",
        icon: "mdi-file-outline",
      },
      {
        title: "1.1.2. Fundamentos de la necesidad del programa",
        icon: "mdi-file-outline",
      },
      {
        title: "1.1.3. Plan de desarrollo del programa",
        icon: "mdi-file-outline",
      },
      {
        title: "1.1.4. Perfil de ingreso",
        icon: "mdi-file-outline",
      },
      {
        title: "1.1.5. Perfil de egreso",
        icon: "mdi-file-outline",
      },
      {
        title: "Fortalezas",
        icon: "mdi-file-outline",
      },
      {
        title: "Oportunidades de mejora",
        icon: "mdi-file-outline",
      },
    ],
    adminItems2: [
      { title: "asdasd", icon: "mdi-account-multiple-outline" },
      { title: "Settinasdadags", icon: "mdi-cog-outline" },
    ],
    crudItems: [
      { title: "Create", icon: "mdi-plus-outline" },
      { title: "Read", icon: "mdi-file-outline" },
      { title: "Update", icon: "mdi-update" },
      { title: "Delete", icon: "mdi-delete" },
    ],
  }),
};
</script>
