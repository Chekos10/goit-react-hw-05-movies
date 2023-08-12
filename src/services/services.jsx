import axios from 'axios';
const options = {
  url:'https://api.themoviedb.org/3',
  key: 'dd883d862d7cd3ce2da3b10a6f522ee3'
}

export const TrendDayMovies = async () => {
  const {data} = await axios.get(
    `${options.url}/trending/movie/day?api_key=${options.key}`
  )
  return data;
}


export const SearchMovie = async search => {
  const { data } = await axios.get(
    `${options.url}/search/movie?api_key=${options.key}&query=${search}`,
    options
  );
  return data;
};


export const MovieDetails = async id => {
  const { data } = await axios.get(
    `${options.url}/movie/${id}?api_key=${options.key}`,
    options
  );
  return data;
};

export const getMovieCredit = async id => {
  const {data} = await axios.get(
    `${options.url}/movie/${id}/credits?api_key=${options.key}`
  )
  return data;
}

export const movieReviews = async id => {
  const {data} = await axios.get(
    `${options.url}/movie/${id}/reviews?api_key=${options.key}`
  )
  return data;
}
