<template>
  <div class="card">
    <h2>{{ movie.titulo }} ({{ movie.anio }})</h2>
    <p><strong>Géneros: </strong>
        <span v-for="(genero, index) in movie.generos" :key="index">
          {{ genero }}<span v-if="index < movie.generos.length - 1">, </span>
        </span>
    </p>
    <p><strong>Director:</strong> {{ movie.director }}</p>
    
    <img :src="movie.portada" :alt="movie.titulo">
    
  </div>
</template>

<script lang="ts" setup>
import type { Pelicula } from '../interfaces/Pelicula'

const props = defineProps<{ movie: Pelicula }>()

</script>
