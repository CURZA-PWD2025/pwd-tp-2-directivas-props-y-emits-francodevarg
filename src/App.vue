<template>
  <h1>Lista de Películas</h1>
  <CardComponent
    v-for="movie in movies"
    :key="movie.id"
    :movie="movie"
    @update_likes="updateLikes"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import peliculas  from './resource/movies'
import type { Pelicula } from './interfaces/Pelicula'
import CardComponent from './components/CardComponent.vue'

const movies = ref<Pelicula[]>(peliculas)

function updateLikes(id: number, newLikes: number) {
  const movie = movies.value.find(m => m.id === id)
  if (movie) movie.likes = newLikes
}
</script>
