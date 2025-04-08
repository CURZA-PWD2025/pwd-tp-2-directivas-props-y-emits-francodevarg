export interface Pelicula {
    id: number;
    titulo: string;
    anio: number;
    generos: Array<string>;
    director: string;
    portada: string;
    likes: number;
  }