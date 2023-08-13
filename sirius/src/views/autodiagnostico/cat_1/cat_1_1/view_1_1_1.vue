<template>
  <v-card variant="tonal">
    <font face="Trebuchet MS">
      <p class="text-h3 text-center pt-3">
        1.1.1 Misión y visión del programa<br />
      </p>
      <v-container>
        <!-- ROW PARA INDICADORES -->
        <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2">
          <v-col class="text-white font-weight-bold" cols="6"
            ><h2>Indicador (aspecto a evaluar)</h2></v-col
          ><v-col class="text-right text-white" cols="6"
            ><v-btn
              class="text-right"
              prepend-icon="mdi-pencil"
              variant="tonal"
              color="light-blue-ligthen"
              elevation="1"
            >
              Editar
            </v-btn></v-col
          ></v-row
        >
        <v-row class="ml-0 mr-0 mt-5 mb-3"><v-col>CONTENIDO</v-col></v-row>
        <!-- ROW PARA DESCRIPCIÓN -->
        <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2">
          <v-col class="text-white font-weight-bold" cols="6"
            ><h2>Descripción del estado del indicador</h2></v-col
          >
          <v-col class="text-right text-white" cols="3">hola</v-col
          ><v-col class="text-right text-white" cols="3"
            ><v-btn
              class="text-right"
              prepend-icon="mdi-pencil"
              variant="tonal"
              color="light-blue-ligthen"
              elevation="1"
            >
              Editar
            </v-btn></v-col
          ></v-row
        >
        <v-row class="ml-0 mr-0 mt-5 mb-3"><v-col>CONTENIDO</v-col></v-row>
        <!-- ROW PARA REFERENCIAS -->
        <v-row class="ml-0 mr-0 mt-3 mb-3 rounded bg-blue-lighten-2">
          <v-col class="text-white font-weight-bold" cols="6"
            ><h2>Referencias</h2></v-col
          >
          <v-col class="text-right text-white" cols="6"
            ><v-btn
              class="text-right"
              prepend-icon="mdi-pencil"
              variant="tonal"
              color="light-blue-ligthen"
              elevation="1"
            >
              Editar
            </v-btn></v-col
          ></v-row
        >
        <v-row class="ml-0 mr-0 mt-5 mb-3"><v-col>CONTENIDO</v-col></v-row>
      </v-container>
    </font>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    data: {},
  }),
};
</script>

<style></style>
