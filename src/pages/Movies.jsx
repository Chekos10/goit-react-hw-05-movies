import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchMovie } from 'services/services';
import css from '../pages/Movies.module.css'

const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchMovie = search.get('query');
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!searchMovie) {
        setIsLoading(false)
        return;
      }
      try {
        const data = await SearchMovie(searchMovie);
        if (data) {
          setMovies(data.results);
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    };
    fetchMovie();
  }, [searchMovie]);

  const handleSubmit = event => {
    event.preventDefault();
    const searching = event.target.children.search.value;
    setSearch({
      query: searching,
    });
  };

return (
    <div>
    <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search movie"
        />
        <button type="submit">Search</button>
    </form>
    {isLoading ? (
      <Loader/>
    ): (
      <ul className={css.movieList} >
        {movies.map(movie => (
        <li className={css.movieItem}  key={movie.id} >
        <Link 
            className={css.movieLink}
            state={{ from: location }}
            key={movie.id}
            to={`/Movies/${movie.id}`}>
            {movie.title}
        </Link>
        </li>
        ))}
        <Link></Link>
    </ul>
    )}
    </div>
);
};
export default Movies;