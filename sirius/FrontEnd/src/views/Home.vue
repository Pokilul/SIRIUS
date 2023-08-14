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
              class="w-75"
              min-width="700"
              transition="dialog-bottom-transition"
              v-model="dialog"
              persistent
            >
              <v-card>
                <form action="">
                  <v-card-title class="mt-5 mx-5 mb-5">
                    <v-container
                      class="rounded bg-blue-lighten-2 text-white font-weight-bold"
                    >
                      <h1 class="mt-0 mb-0">
                        <v-icon
                          class="pb-1 mr-n1"
                          icon="mdi-pencil-outline"
                          size="x-small"
                        />
                        Editar portada
                      </h1></v-container
                    >
                  </v-card-title>
                  <v-card-text class="font-weight-bold">
                    <v-container>
                      <v-table theme="light">
                        <tbody class="">
                          <tr>
                            <td class="w-25"><p>Rector del Campus</p></td>
                            <td clas="w-75">
                              <v-text-field
                                class="text-field"
                                label="Nombre del rector del campus"
                                v-model="portada.Rector"
                              ></v-text-field>
                            </td>
                          </tr>
                          <tr>
                            <td>Secretario académico de Campus</td>
                            <td>
                              <v-text-field
                                class="text-field"
                                label="Nombre del secretario académico del Campus"
                                v-model="portada.Rector"
                              ></v-text-field>
                            </td>
                          </tr>
                          <tr>
                            <td>Director de División</td>
                            <td>
                              <v-text-field
                                class="text-field"
                                label="Nombre del director de la división"
                                v-model="portada.Rector"
                              ></v-text-field>
                            </td>
                          </tr>
                          <tr>
                            <td>Email Director de División</td>
                            <td>
                              <v-text-field
                                class="text-field"
                                label="Correo electrónico del director de la división"
                                v-model="portada.Rector"
                              ></v-text-field>
                            </td>
                          </tr>
                          <tr>
                            <td>Coordinador de Prog. Educativo</td>
                            <td>
                              <v-text-field
                                class="text-field"
                                label="Nombre del coordinador del prog. educativo"
                                v-model="portada.Rector"
                              ></v-text-field>
                            </td>
                          </tr>
                          <tr>
                            <td>Email Coordinador del Prog. Educativo</td>
                            <td>
                              <v-text-field
                                class="text-field"
                                label="Correo electrónico del coordinador del prog. educativo"
                                v-model="portada.Rector"
                              ></v-text-field>
                            </td>
                          </tr>
                          <tr>
                            <td>Fecha de elaboración</td>
                            <td>
                              <v-text-field
                                class="text-field"
                                label="Fecha de elaboración"
                                v-model="portada.Rector"
                              ></v-text-field>
                            </td>
                          </tr>
                          <tr>
                            <td>Fecha de corte</td>
                            <td>
                              <v-text-field
                                class="mt-2"
                                label="Fecha de corte"
                                v-model="portada.Rector"
                              ></v-text-field>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-container>
                  </v-card-text>
                  <v-container class="text-center ma-0 mt-n12" fluid>
                    <v-btn
                      variant="text"
                      size="large"
                      color="info"
                      @click="dialog = !dialog"
                      >Actualizar</v-btn
                    >
                  </v-container>
                </form>
              </v-card>
            </v-dialog>
          </template>
          <p class="text-h3">
            <font face="Trebuchet MS" color="#B9A233"
              >Universidad de Guanajuato</font
            ><br />
          </p>
          <p class="text-h4">
            <font face="Trebuchet MS" color="#B9A233"
              >Campus Irapuato-Salamanca</font
            >
          </p>
          <p>
            <font class="text-h5" face="Trebuchet MS" color="#B9A233"
              >División de Ingenierías</font
            >
          </p>
          <br />
          <p>
            <font
              class="text-h5 font-weight-bold"
              face="Trebuchet MS"
              color="#000000"
              >[ INSERTAR NOMBRE CARRERA AQUÍ ]</font
            >
          </p>
          <br />
          <p>
            <font
              class="text-h6 font-weight-black"
              face="Trebuchet MS"
              color="#000000"
              >[ INSERTAR NOMBRE AQUÍ ]</font
            >
          </p>
          <p>
            <font
              class="text-h6 font-weight-bold"
              face="Trebuchet MS"
              color="#000000"
              >Rector del campus</font
            >
          </p>

          <p>
            <font
              class="text-h6 font-weight-black"
              face="Trebuchet MS"
              color="#000000"
              >[ INSERTAR NOMBRE AQUÍ ]</font
            >
          </p>
          <p>
            <font
              class="text-h6 font-weight-bold"
              face="Trebuchet MS"
              color="#000000"
              >Secretario académico</font
            >
          </p>

          <p>
            <font
              class="text-h6 font-weight-black"
              face="Trebuchet MS"
              color="#000000"
              >[ INSERTAR NOMBRE AQUÍ ]</font
            >
          </p>
          <p>
            <font
              class="text-h6 font-weight-bold"
              face="Trebuchet MS"
              color="#000000"
              >Director de división</font
            >
          </p>
          <p>
            <font class="font-weight-bold" face="Trebuchet MS" color="#000000"
              >Carretera Salamanca - Valle de Santiago Km. 3.5 + 1.8; Comunidad
              de Palo Blanco; Salamanca, Gto.</font
            >
          </p>
          <p>
            <font class="font-weight-bold" face="Trebuchet MS" color="#000000"
              >Tel: Conmutador: 464 647 99 40 extensiones 2310 y 2304 <br />Fax:
              Extensión 2311 e-mail: [ INSERTAR AQUÍ ]</font
            >
          </p>
          <br />
          <p>
            <font
              class="text-h6 font-weight-black"
              face="Trebuchet MS"
              color="#000000"
              >[ INSERTAR NOMBRE AQUÍ ]</font
            >
          </p>
          <p>
            <font
              class="text-h6 font-weight-bold"
              face="Trebuchet MS"
              color="#000000"
              >Coordinador del programa educativo</font
            >
          </p>
          <p>
            <font class="font-weight-bold" face="Trebuchet MS" color="#000000"
              >Carretera Salamanca - Valle de Santiago Km. 3.5 + 1.8; Comunidad
              de Palo Blanco; Salamanca, Gto.</font
            >
          </p>
          <p>
            <font class="font-weight-bold" face="Trebuchet MS" color="#000000"
              >Tel: Conmutador: 464 647 99 40 extensiones 2310 y 2304 <br />Fax:
              Extensión 2311 e-mail: [ INSERTAR AQUÍ ]</font
            >
          </p>
          <br />
          <p class="text-left">
            <font class="font-weight-bold" face="Trebuchet MS" color="#000000"
              >Fecha de elaboración: [ INSERTAR AQUÍ ]<br />
              Fecha de corte de la información: [ INSERTAR AQUÍ ]</font
            >
          </p>
        </v-col></v-row
      ></v-container
    >
  </v-card>
</template>

<script>
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
    Rector: "",
  }),
};
</script>

<style></style>
