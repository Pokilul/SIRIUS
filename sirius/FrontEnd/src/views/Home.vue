<template>
  <v-card class="h-auto mt-5 ml-3 mr-3" variant="tonal">
    <v-container
      ><v-row
        ><v-col cols="3" sm="12" md="3" centered
          ><v-img
            class="mx-auto my-auto width-auto"
            border="0"
            aspect-ratio="4/3"
            max-height="214"
            src="../assets/images/escudo-png.png" /></v-col
        ><v-col class="pa-3 text-center">
          <p class="text-right">
            <v-btn
              v-if="canEdit"
              class="text-right"
              prepend-icon="mdi-pencil"
              variant="outlined"
              size="small"
              @click="dialog = !dialog"
            >
              Editar
            </v-btn>
          </p>
          <template>
            <v-dialog
              max-width="90%"
              class="w-75"
              transition="dialog-bottom-transition"
              v-model="dialog"
              persistent
            >
              <v-card>
                <form @submit.prevent="updatePortada">
                  <v-card-title class="mt-5 mx-5 mb-5">
                    <v-container
                      class="rounded bg-blue-lighten-2 text-white font-weight-bold"
                      fluid
                    >
                      <h1 class="mt-0 mb-0">
                        <v-icon
                          fluid
                          class="pb-1 mr-n1"
                          icon="mdi-pencil-outline"
                          size="x-small"
                        />
                        Editar Portada
                      </h1></v-container
                    >
                  </v-card-title>
                  <v-card-text class="font-weight-bold">
                    <v-container>
                      <v-row v-for="field in formFields" :key="field.model">
                        <v-col cols="12" md="4">{{ field.label }}</v-col>
                        <v-col cols="12" md="8">
                          <v-text-field
                            v-model="portada[field.model]"
                            :label="field.label"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-container class="text-right ma-0 mt-n12" fluid>
                    <v-btn
                      fluid
                      prepend-icon="mdi-check-circle"
                      rounded="lg"
                      type="submit"
                      variant="tonal"
                      size="large"
                      color="info"
                      >Actualizar</v-btn
                    >
                    <span class="mx-2"></span>

                    <v-btn
                      fluid
                      prepend-icon="mdi-close"
                      rounded="lg"
                      variant="tonal"
                      size="large"
                      color="red-darken-4"
                      @click="dialog = false"
                      >Cancelar</v-btn
                    >
                  </v-container>
                </form>
              </v-card>
            </v-dialog>
          </template>
          <p class="text-h3" style="font-family: Trebuchet MS; color: #b9a233">
            Universidad de Guanajuato<br />
          </p>
          <p class="text-h4" style="font-family: Trebuchet MS; color: #b9a233">
            Campus Irapuato-Salamanca
          </p>
          <p class="text-h5" style="font-family: Trebuchet MS; color: #b9a233">
            División de Ingenierías
          </p>
          <br />
          <p class="text-h5 font-weight-bold">[ INSERTAR PROGRAMA ]</p>
          <br />
          <p
            class="text-h6 font-weight-black"
            style="font-family: Trebuchet MS; color: #000000"
          >
            {{ portada.Rector }}
          </p>
          <p
            class="text-h6 font-weight-bold"
            style="font-family: Trebuchet MS; color: #000000"
          >
            Rector del campus
          </p>

          <p
            class="text-h6 font-weight-black"
            style="font-family: Trebuchet MS; color: #000000"
          >
            {{ portada.SecAcadC }}
          </p>
          <p
            class="text-h6 font-weight-bold"
            style="font-family: Trebuchet MS; color: #000000"
          >
            Secretario académico
          </p>

          <p
            class="text-h6 font-weight-black"
            style="font-family: Trebuchet MS; color: #000000"
          >
            {{ portada.Director }}
          </p>
          <p
            class="text-h6 font-weight-bold"
            style="font-family: Trebuchet MS; color: #000000"
          >
            Director de división
          </p>
          <p class="font-weight-bold" face="Trebuchet MS" color="#000000">
            Carretera Salamanca - Valle de Santiago Km. 3.5 + 1.8; Comunidad de
            Palo Blanco; Salamanca, Gto.
          </p>
          <p class="font-weight-bold" face="Trebuchet MS" color="#000000">
            Tel: Conmutador: 464 647 99 40 extensiones 2310 y 2304 <br />Fax:
            Extensión 2311 e-mail: {{ portada.Correo_D }}
          </p>
          <br />
          <p
            class="text-h6 font-weight-black"
            style="font-family: Trebuchet MS; color: #000000"
          >
            {{ portada.Coordinador }}
          </p>
          <p
            class="text-h6 font-weight-bold"
            style="font-family: Trebuchet MS; color: #000000"
          >
            Coordinador del programa educativo
          </p>
          <p class="font-weight-bold" face="Trebuchet MS" color="#000000">
            Carretera Salamanca - Valle de Santiago Km. 3.5 + 1.8; Comunidad de
            Palo Blanco; Salamanca, Gto.
          </p>
          <p class="font-weight-bold" face="Trebuchet MS" color="#000000">
            Tel: Conmutador: 464 647 99 40 extensiones 2310 y 2304 <br />Fax:
            Extensión 2311 e-mail: {{ portada.Correo_C }}
          </p>
          <br />
          <p
            class="text-left font-weight-bold"
            style="font-family: Trebuchet MS; color: #000000"
          >
            Fecha de elaboración: {{ portada.Fecha_Elaboracion }}<br />
            Fecha de corte de la información: {{ portada.Fecha_Corte }}
          </p>
        </v-col></v-row
      ></v-container
    >
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    portada: {
      Rector: "",
      SecAcadC: "",
      Director: "",
      Correo_D: "",
      Coordinador: "",
      Correo_C: "",
      Fecha_Elaboracion: "",
      Fecha_Corte: "",
    },
    formFields: [
      { label: "Rector del Campus", model: "Rector" },
      { label: "Secretario Académico de Campus", model: "SecAcadC" },
      { label: "Director de División", model: "Director" },
      { label: "Correo del Director", model: "Correo_D" },
      { label: "Coordinador del Programa Educativo", model: "Coordinador" },
      { label: "Correo del Coordinador", model: "Correo_C" },
      { label: "Fecha de Elaboración", model: "Fecha_Elaboracion" },
      { label: "Fecha de Corte", model: "Fecha_Corte" },
    ],
  }),
  mounted() {
    this.getPortadaData();
  },
  methods: {
    async getPortadaData() {
      try {
        const { data } = await axios.get("api/portada/1");
        this.portada = data.body;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
    async updatePortada() {
      try {
        const response = await axios.post("api/portada/", {
          ID_Portada: 1,
          ...this.portada,
        });

        if ([200, 201].includes(response.status)) {
          this.dialog = false;
          this.getPortadaData();
        }
      } catch (error) {
        console.error("Error updating data", error);
      }
    },
  },
  computed: {
    ...mapState({
      userLevel: (state) => state.auth.level,
    }),
    canEdit() {
      return ["1", "2", "3"].includes(this.userLevel);
    },
  },
};
</script>

<style></style>