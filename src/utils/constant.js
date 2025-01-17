


export const Image_URL='https://image.tmdb.org/t/p/w500'


export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Authorization':import.meta.env.VITE_TMDB_KEY
    }
  };