const API_KEY = '2d0f0c1eeb76f4b119f8423f595d4b9d'
const API_URL = 'https://api.themoviedb.org/3/'

/*
  Em alta (top rated)
  Só na Netflix
  Comédia 35
  Filmes de terror 27
  Animação irreverente para adultos 35
  Filmes de ficção científica 878
*/

const basicFetch = async (endpoint) => {

  const req = await fetch(`${API_URL}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'top-rated',
        title: 'Em alta',
        items: await basicFetch(`trending/all/week?api_key=${API_KEY}&language=pt-br`)
      },
      {
        slug: 'originals',
        title: 'Só na Netflix',
        items: await basicFetch(`discover/tv?with_networks=213&api_key=${API_KEY}&language=pt-br`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`discover/movie?with_genres=35&api_key=${API_KEY}&language=pt-br`)
      },
      {
        slug: 'horror',
        title: 'Filmes de terror',
        items: await basicFetch(`discover/movie?with_genres=27&api_key=${API_KEY}&language=pt-br`)
      },
      {
        slug: 'adult-animation',
        title: 'Animação irreverente para adultos',
        items: await basicFetch(`discover/movie?with_keywords=161919&api_key=${API_KEY}&language=pt-br`)
      },
      {
        slug: 'scifi',
        title: 'Filmes de ficção científica',
        items: await basicFetch(`discover/movie?with_genres=878&api_key=${API_KEY}&language=pt-br`)
      }
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {}

    if(movieId) {
      switch(type){
          case 'movie':
            info = await basicFetch (`movie/${movieId}?language=pt-br&api_key=${API_KEY}`)
          break;
          case 'tv':
            info = await basicFetch (`tv/${movieId}?language=pt-br&api_key=${API_KEY}`)
          break;
    }
    } 
    return info;
    
  }
}