<template>
  <div>
    <v-list nav density="compact">
      <template v-for="(item, index) in menuItems" :key="index">
        <v-list-item
          v-if="!item.items"
          :to="item.url"
          :title="item.title"
          :prepend-icon="item.icon"
        ></v-list-item>
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
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1rem;
}
</style>
