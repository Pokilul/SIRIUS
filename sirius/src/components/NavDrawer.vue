<template>
  <v-card variant="tonal">
    <v-list nav density="compact">
      <router-link class="router" to="/">
        <v-list-item title="Autodiagnóstico SLISC" prepend-icon="mdi-collage" />
      </router-link>
      <router-link class="router" to="/sintesis">
        <v-list-item
          title="Identificación del programa"
          prepend-icon="mdi-file"
      /></router-link>
      <v-divider></v-divider>
      <!-- Identificación del Programa -->
      <!-- CATEGORÍA 1 -->
      <v-list-group fluid>
        <template v-slot:activator="{ props }"> </template>
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
        <!-- CATEGORÍA 2.3 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="2.3. Modelo educativo y plan de estudios"
              @click.stop
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_2_3"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 2.4 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="2.4. Actividades para la formacion integral"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_2_4"
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
        <!-- CATEGORÍA 3.5 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="3.5. Proceso de ingreso al programa"
              @click.stop
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_3_5"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 3.6 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="3.6. Trayectoria escolar"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_3_6"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 3.7 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="3.7. Egreso del programa"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_3_7"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 3.8 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="3.8. Resultados de los estudiantes"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_3_8"
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
        <!-- CATEGORÍA 4.9 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="4.9. Personal académico"
              @click.stop
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_4_9"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 4.10 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="4.10. Infraestructura académica (énfasis en la específica del programa)"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_4_10"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 4.11 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="4.11. Infraestructura física"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_4_11"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 4.12 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="4.12. Servicios de apoyo"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_4_12"
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
              v-for="(item, i) in getItemsBeforeFortalezas(cat_1_1)"
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
              v-for="(item, i) in getItemsBeforeFortalezas(cat_1_2)"
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
        <!-- CATEGORÍA 2.3 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="2.3. Modelo educativo y plan de estudios"
              @click.stop
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_2_3)"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 2.4 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="2.4. Actividades para la formacion integral"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_2_4)"
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
        <!-- CATEGORÍA 3.5 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="3.5. Proceso de ingreso al programa"
              @click.stop
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_3_5)"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 3.6 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="3.6. Trayectoria escolar"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in cat_3_6"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 3.7 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="3.7. Egreso del programa"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_3_7)"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 3.8 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="3.8. Resultados de los estudiantes"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_3_8)"
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
        <!-- CATEGORÍA 4.9 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="4.9. Personal académico"
              @click.stop
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_4_9)"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 4.10 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="4.10. Infraestructura académica (énfasis en la específica del programa)"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_4_10)"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 4.11 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="4.11. Infraestructura física"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_4_11)"
              :key="i"
              :title="item.title"
              :prepend-icon="item.icon"
              :value="item.title"
              @click.stop
            ></v-list-item>
          </div>
        </v-list-group>
        <!-- CATEGORÍA 4.12 -->
        <v-list-group class="pl-3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-folder-outline"
              title="4.12. Servicios de apoyo"
            ></v-list-item>
          </template>
          <div class="ml-n12">
            <v-list-item
              v-for="(item, i) in getItemsBeforeFortalezas(cat_4_12)"
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
      { title: "1.1.4. Perfil de ingreso", icon: "mdi-file-outline" },
      { title: "1.1.5. Perfil de egreso", icon: "mdi-file-outline" },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_1_2: [
      {
        title: "1.2.1 Registro oficial del programa",
        icon: "mdi-file-outline",
      },
      {
        title: "1.2.2 Marco normativo institucional",
        icon: "mdi-file-outline",
      },
      {
        title: "1.2.3 Matricula total y de primer ingreso",
        icon: "mdi-file-outline",
      },
      {
        title: "1.2.4 Presupuesto/Recursos del programa",
        icon: "mdi-file-outline",
      },
      {
        title: "1.2.5 Estructura organizacional para operar el programa",
        icon: "mdi-file-outline",
      },
      { title: "1.2.6 Integridad", icon: "mdi-file-outline" },
      { title: "1.2.7 Ambiente Académico", icon: "mdi-file-outline" },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_2_3: [
      { title: "2.3.1 Modelo educativo", icon: "mdi-file-outline" },
      { title: "2.3.2 Plan de estudios", icon: "mdi-file-outline" },
      { title: "2.3.3 Mapa curricular", icon: "mdi-file-outline" },
      {
        title: "2.3.4 Asignaturas o unidades de aprendizaje",
        icon: "mdi-file-outline",
      },
      {
        title:
          "2.3.5 Tecnología educativa y de la información para el aprendizaje",
        icon: "mdi-file-outline",
      },
    ],

    cat_2_4: [
      {
        title: "2.4.1 Cursos o actividades para la formación integral",
        icon: "mdi-file-outline",
      },
      { title: "2.4.2 Enseñanza de otras lenguas", icon: "mdi-file-outline" },
      {
        title: "2.4.3 Certificaciones externas de los estudiantes",
        icon: "mdi-file-outline",
      },
    ],

    cat_3_5: [
      {
        title:
          "3.5.1 Estrategias de difusión, promoción y orientación del programa",
        icon: "mdi-file-outline",
      },
      {
        title: "3.5.2 Procedimiento de ingreso de los aspirantes al programa",
        icon: "mdi-file-outline",
      },
      {
        title:
          "3.5.3 Actividades de bienvenida e inducción para estudiantes de nuevo ingreso",
        icon: "mdi-file-outline",
      },
      {
        title:
          "3.5.4 Programas de regularización, acciones de nivelación o apoyo",
        icon: "mdi-file-outline",
      },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_3_6: [
      {
        title:
          "3.6.1 Control del desempeño de los estudiantes dentro del programa",
        icon: "mdi-file-outline",
      },
      {
        title: "3.6.2 Movilidad e intercambio de estudiantes",
        icon: "mdi-file-outline",
      },
      { title: "3.6.3 Servicios de tutoría", icon: "mdi-file-outline" },
      {
        title:
          "3.6.4 Servicios de orientación y asesoría en apoyo al aprendizaje",
        icon: "mdi-file-outline",
      },
      {
        title:
          "3.6.5 Prácticas Profesionales, estancias y visitas en el sector productivo",
        icon: "mdi-file-outline",
      },
      {
        title: "3.6.6 Reconocimiento a los estudiantes de alto desempeño",
        icon: "mdi-file-outline",
      },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_3_7: [
      {
        title: "3.7.1 Programa de titulación u obtención de grado",
        icon: "mdi-file-outline",
      },
      { title: "3.7.2 Eficiencia terminal", icon: "mdi-file-outline" },
      {
        title: "3.7.3 Eficiencia en la titulación y obtención de grado",
        icon: "mdi-file-outline",
      },
      { title: "3.7.4 Servicio social", icon: "mdi-file-outline" },
      {
        title: "3.7.5 Vinculación egresado-institución",
        icon: "mdi-file-outline",
      },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_3_8: [
      {
        title:
          "3.8.1 Resultados en examenes de egreso externos a la institución",
        icon: "mdi-file-outline",
      },
      {
        title: "3.8.2 Nivel de dominio de otras lenguas",
        icon: "mdi-file-outline",
      },
      {
        title:
          "3.8.3 Participación de estudiantes en concursos, competencias, exhibiciones y presentaciones, nacionales o internacionales",
        icon: "mdi-file-outline",
      },
      { title: "3.8.4 Desempeño de los egresados", icon: "mdi-file-outline" },
      {
        title: "3.8.5 Empeabilidad / Opinión de los empleadores",
        icon: "mdi-file-outline",
      },
      {
        title: "3.8.6 Cumplimiento del perfil de egreso",
        icon: "mdi-file-outline",
      },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_4_9: [
      {
        title: "4.9.1 Composición actual del cuerpo docente",
        icon: "mdi-file-outline",
      },
      {
        title:
          "4.9.2 Mecanismo de ingreso, promoción y permanencia al programa como docente",
        icon: "mdi-file-outline",
      },
      {
        title: "4.9.3 Superación disciplina y habilitación académica",
        icon: "mdi-file-outline",
      },
      { title: "4.9.4 Movilidad de profesores", icon: "mdi-file-outline" },
      {
        title: "4.9.5 Evaluación y reconocimiento del personal académico",
        icon: "mdi-file-outline",
      },
      {
        title: "4.9.6 Producción académica para el programa",
        icon: "mdi-file-outline",
      },
      {
        title: "4.9.7 Formas de organización para el trabajo académico",
        icon: "mdi-file-outline",
      },
      {
        title:
          "4.9.8 Líneas de generación, aplicación del conocimiento, y su transferencia al programa",
        icon: "mdi-file-outline",
      },
      {
        title: "4.9.9 Articulación de la investigación con la docencia",
        icon: "mdi-file-outline",
      },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_4_10: [
      {
        title: "4.10.1 Aulas y espacios para la docencia y su equipamiento",
        icon: "mdi-file-outline",
      },
      {
        title:
          "4.10.2 Laboratorios y talleres específicos para la realización de prácticas y su equipamiento",
        icon: "mdi-file-outline",
      },
      {
        title: "4.10.3 Otras instalaciones fuera de la sede",
        icon: "mdi-file-outline",
      },
      { title: "4.10.4 Biblioteca", icon: "mdi-file-outline" },
      {
        title: "4.10.5 Espacios destinados para profesores",
        icon: "mdi-file-outline",
      },
      {
        title: "4.10.6 Espacios para encuentros académicos y/o culturales",
        icon: "mdi-file-outline",
      },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_4_11: [
      {
        title:
          "4.11.1 Infraestructura física del lugar donde se imparte el programa",
        icon: "mdi-file-outline",
      },
      {
        title: "4.11.2 Agua potable y servicios sanitarios",
        icon: "mdi-file-outline",
      },
      {
        title: "4.11.3 Conservación y mantenimiento de instalaciones y equipo",
        icon: "mdi-file-outline",
      },
      {
        title: "4.11.4 Seguridad de personas y bienes",
        icon: "mdi-file-outline",
      },
      {
        title: "4.11.5 Áreas de deporte, recreación y convivencia",
        icon: "mdi-file-outline",
      },
      { title: "4.11.6 Conectividad", icon: "mdi-file-outline" },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],

    cat_4_12: [
      { title: "4.12.1 Administración escolar", icon: "mdi-file-outline" },
      {
        title: "4.12.2 Servicios de bienestar estudiantil",
        icon: "mdi-file-outline",
      },
      {
        title: "4.12.3 Becas y apoyos estudiantiles",
        icon: "mdi-file-outline",
      },
      {
        title: "4.12.4 Orientación para el tránsito a la vida profesional",
        icon: "mdi-file-outline",
      },
      { title: "4.12.5 Servicio de transporte", icon: "mdi-file-outline" },
      { title: "4.12.6 Servicio de cafetería", icon: "mdi-file-outline" },
      { title: "Fortalezas", icon: "mdi-file-outline" },
      { title: "Oportunidades de mejora", icon: "mdi-file-outline" },
    ],
  }),

  methods: {
    getItemsBeforeFortalezas(categoryData) {
      const index = categoryData.findIndex(
        (item) => item.title === "Fortalezas"
      );
      return index !== -1 ? categoryData.slice(0, index) : categoryData;
    },
  },
};
</script>

<style scoped>
.router {
  text-decoration: none;
  color: inherit;
}
</style>
