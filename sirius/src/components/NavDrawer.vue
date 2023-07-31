<template>
  <v-navigation-drawer
    class="pt-4 pl-3 pr-3 mx-auto w-auto"
    theme="white"
    floating
  >
    <v-card variant="tonal">
      <v-list nav density="compact">
        <v-list-item title="Autodiagnóstico SLISC" prepend-icon="mdi-collage" />
        <v-divider></v-divider>
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
                v-for="(item, i) in cat_1_1"
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
                v-for="(item, i) in cat_1_2"
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
        <hr />
        <!-- CATEGORÍA 3 -->
        <v-list-group fluid>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder"
              title="3. Tránsito de los estudiantes por el programa"
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
                v-for="(item, i) in cat_1_1"
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
                v-for="(item, i) in cat_1_2"
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
        <!-- CATEGORÍA 4 -->
        <v-list-group fluid>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder"
              title="4. Personal académico, infraestructura y servicio"
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
                v-for="(item, i) in cat_1_1"
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
                v-for="(item, i) in cat_1_2"
                :key="i"
                :title="item.title"
                :prepend-icon="item.icon"
                :value="item.title"
                @click.stop
              ></v-list-item>
            </div>
          </v-list-group>
        </v-list-group>
      </v-list>
      <hr />
      <!-- SEPARACIÓN DE RECOMENDACIONES Y DE AUTODIAGNÓSTICO-->
      <v-list nav density="compact">
        <v-list-item
          title="Recomendaciones SLICE-CIEES"
          prepend-icon="mdi-collage"
        />
        <v-divider></v-divider>
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
                v-for="(item, i) in cat_1_1"
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
                v-for="(item, i) in cat_1_2"
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
        <hr />
        <!-- CATEGORÍA 3 -->
        <v-list-group fluid>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder"
              title="3. Tránsito de los estudiantes por el programa"
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
                v-for="(item, i) in cat_1_1"
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
                v-for="(item, i) in cat_1_2"
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
        <!-- CATEGORÍA 4 -->
        <v-list-group fluid>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder"
              title="4. Personal académico, infraestructura y servicio"
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
                v-for="(item, i) in cat_1_1"
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
                v-for="(item, i) in cat_1_2"
                :key="i"
                :title="item.title"
                :prepend-icon="item.icon"
                :value="item.title"
                @click.stop
              ></v-list-item>
            </div>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    cat_1_1: [
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
    cat_1_2: [
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
