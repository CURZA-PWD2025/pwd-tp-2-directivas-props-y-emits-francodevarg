<template>
  <div class="card">
    <h2>{{ movie.titulo }} ({{ movie.anio }})</h2>
    <p><strong>Géneros: </strong>
        <span v-for="(genero, index) in movie.generos" :key="index">
          {{ genero }}<span v-if="index < movie.generos.length - 1">, </span>
        </span>
    </p>
    <p><strong>Director:</strong> {{ movie.director }}</p>
    
    <img :src="movie.portada" :alt="movie.portada">
    
    <button @click="sumarLikes">
      {{ '❤️' }} {{ movie.likes }} 
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { Pelicula } from '../interfaces/Pelicula'

const props = defineProps<{ movie: Pelicula }>()
const emit = defineEmits<{
  (e: 'update_likes', id: number, newLikes: number): void
}>()


function sumarLikes() {
  const newLikes =  props.movie.likes + 1 ;
  emit('update_likes', props.movie.id, newLikes)
}
</script>
