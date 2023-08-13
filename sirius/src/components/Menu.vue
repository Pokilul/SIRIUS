<template>
<div>
    <v-list nav density="compact">
        <template v-for="(item, index) in menuItems" :key="index">
            <!-- Representa un ítem sin hijos -->
            <v-list-item v-if="!item.items" :to="item.url" :title="item.title" :prepend-icon="item.icon"></v-list-item>

            <!-- Representa un ítem con hijos -->
            <v-list-group v-else fluid @click.prevent>
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" :title="item.title" :prepend-icon="item.icon" @click.stop></v-list-item>
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
    name: 'Menu',
    props: {
        menuItems: {
            type: Array,
            required: true
        }
    }
};
</script>