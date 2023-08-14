<template>
  <div>
    <v-list nav density="compact">
      <template v-for="(item, index) in menuItems" :key="index">
        <!-- Representa un ítem sin hijos -->
        <v-list-item
          v-if="!item.items"
          :to="item.url"
          :title="item.title"
          :prepend-icon="item.icon"
        ></v-list-item>

        <!-- Representa un ítem con hijos -->
        <v-list-group v-else fluid @click.prevent>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              v-if="item.url"
              :prepend-icon="item.icon"
              @click.stop
            >
              <router-link v-if="item.url" :to="item.url" class="menu-link">
                {{ item.title }}
              </router-link>
            </v-list-item>
            <v-list-item
              v-bind="props"
              v-else
              :to="item.url"
              :title="item.title"
              :prepend-icon="item.icon"
              @click.stop
            >
            </v-list-item>
          </template>
          <!-- Representa la lista de hijos (recursividad) -->
          <Menu :menuItems="item.items" />
        </v-list-group>

        <v-divider></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.menu-link {
  color: black;
  font-weight: regular;
}
</style>
