<template>
  <v-card variant="tonal">
    <font face="Trebuchet MS">
      <p class="text-right pr-3 pt-3">
        <v-btn
          v-if="editing"
          class="text-right"
          prepend-icon="mdi-pencil"
          variant="outlined"
          size="small"
          @click="editing = !editing"
        >
          Editar
        </v-btn>
      </p>

      <p class="text-h3 text-center pt-3">Síntesis<br /></p>
      <v-container>
        <form action="" disabled="editing">
          <v-table theme="light">
            <tbody class="text-justify">
              <tr class="font-weight-bold">
                <td class="w-50">
                  Nombre del programa educativo vigente (sin abreviaturas)
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Programa }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.Programa"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  En su caso, nombre(s) anterior(es) del programa educativo
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Anterior }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.Anterior"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Nivel académico</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Nivel }}
                  </div>
                  <div v-else>
                    <v-radio-group inline v-model="data.Nivel">
                      <v-radio label="T.S.U" value="T.S.U"></v-radio>
                      <v-radio label="P.A" value="PA"></v-radio>
                      <v-radio
                        label="Licenciatura"
                        value="Licenciatura"
                      ></v-radio>
                      <v-radio
                        label="Especialidad"
                        value="Especialidad"
                      ></v-radio>
                      <v-radio label="Maestría" value="Maestría"></v-radio>
                      <v-radio label="Doctorado" value="Doctorado"></v-radio>
                    </v-radio-group>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Modalidad</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Modalidad }}
                  </div>
                  <div v-else>
                    <v-radio-group inline v-model="data.Modalidad">
                      <v-radio
                        label="Escolarizada"
                        value="Escolarizada"
                      ></v-radio>
                      <v-radio label="Mixta" value="Mixta"></v-radio>
                      <v-radio
                        label="No escolarizada"
                        value="No escolarizada"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Tipo de evaluación</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.TipoEva }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.TipoEva"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Campus/Sede a evaluar</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.CampusSede }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.CampusSede"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Dependencia</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Dependencia }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.Dependencia"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Institución (sin abreviaturas)</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Institucion }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.Institucion"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Régimen</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Regimen }}
                  </div>
                  <div v-else>
                    <v-radio-group inline v-model="data.Regimen">
                      <v-radio label="Público" value="Público"></v-radio>
                      <v-radio label="Privado" value="Privado"></v-radio>
                    </v-radio-group>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Dirección postal (calle, colonia, código postal, municipio o
                  delegación, ciudad y estado)
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Direccion }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.Direccion"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Nombre del Rector</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Rector }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.Rector"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Nombre y cargo del responsable del programa educativo
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.ResponsableProg }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.ResponsableProg"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Nombre del responsable de la autoevaluación
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.ResponsableEva }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.ResponsableEva"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Fecha de aprobación del programa educativo (1)
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.FechaAprobacion }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.FechaAprobacion"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Número de registro ante la dirección general de profesiones
                  (1)
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.NoRegistroDGP }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.NoRegistroDGP"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  En su caso, número de reconocimiento de validez oficial de
                  estudios
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.NoREVOE }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.NoREVOE"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Mátricula actual de la institución</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.MatriculaInst }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.MatriculaInst"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Mátricula actual del programa educativo en la sede a evaluar
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.MatriculaSede }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.MatriculaSede"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Periodicidad para nuevo ingreso (anual, semestral, trimestral,
                  etc)
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.Periodicidad }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.Periodicidad"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Tipo de ciclo (trimestral, semestral, anual, etc)
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.TipoCiclo }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.TipoCiclo"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Número total de ciclos del plan de estudios
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.NoCiclos }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.NoCiclos"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Número de créditos obligatorios</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.CreditosOb }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.CreditosOb"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Número de créditos optativas</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.CreditosOpt }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.CreditosOpt"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Número de créditos totales</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.CreditosTotal }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.CreditosTotal"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Denominación del plan de estudios que cursan los alumnos de
                  primer ciclo
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.DenominacionPlan }}
                  </div>
                  <div v-else>
                    <v-text-field
                      v-model="data.DenominacionPlan"
                    ></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">Otros planes de estudios en operación</td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.OtrosPlanes }}
                  </div>
                  <div v-else>
                    <v-text-field v-model="data.OtrosPlanes"></v-text-field>
                  </div>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td class="w-50">
                  Mes y año de egreso de la última generación
                </td>
                <td class="w-50">
                  <div v-if="editing">
                    {{ data.UltimaGeneracion }}
                  </div>
                  <div v-else>
                    <v-text-field
                      v-model="data.UltimaGeneracion"
                    ></v-text-field>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-row v-if="!editing" flex class="pt-3 pb-3">
            <v-col class="text-right"
              ><v-btn size="x-large" color="success">Guardar</v-btn></v-col
            >
            <v-col class="text-left"
              ><v-btn
                size="x-large"
                color="red-lighten-1"
                @click="editing = !editing"
                >Cancelar</v-btn
              ></v-col
            >
          </v-row>
        </form>
      </v-container>
    </font>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    editing: true,

    data: {
      Programa: "Licenciatura en Ingeniería en Sistemas Computacionales",

      Anterior: "",

      Nivel: "Licenciatura",

      Modalidad: "Escolarizada",

      TipoEva: "Evaluación diagnóstica (pendiente)",

      CampusSede: "Campus Irapuato-Salamanca",

      Dependencia: "División de Ingenierías",

      Institucion: "Universidad de Guanajuato",

      Regimen: "Público",

      Direccion:
        "Carretera Salamanca - Valle de Santiago Km. 3.5 + 1.8; Comunidad de Palo Blanco; Salamanca, Gto.",

      Rector: "Dr Armando Gallegos Muñoz",

      ResponsableProg: "Dr. Daniel Alberto Razo Medina",

      ResponsableEva: "Mtro. Juan Ledezma",

      FechaAprobacion: "0",

      NoRegistroDGP: "0",

      NoREVOE: "0",

      MatriculaInst: "0",

      MatriculaSede: "0",

      Periodicidad: "0",

      TipoCiclo: "0",

      NoCiclos: "0",

      CreditosOb: "0",

      CreditosOpt: "0",

      CreditosTotal: "0",

      DenominacionPlan: "0",

      OtrosPlanes: "0",

      UltimaGeneracion: "0",
    },
  }),
};
</script>

<style></style>
