import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendDayMovies } from 'services/services';
import css from '../pages/Home.module.css'
const Home = () => {
  const [dayMovies, setDayMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDay = async () => {
      try {
        const dataMovie = await TrendDayMovies();
        if (dataMovie) {
          setDayMovie(dataMovie.results);
          console.log(dataMovie.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchMovieDay();
  }, []);
  
  return (
    <>
      <h2>Trending today</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.movieList}>
          {dayMovies.map(dayMovie => (
            <Link
              className={css.movieLink}
              state={{ from: location }}
              key={dayMovie.id}
              to={`/Movies/${dayMovie.id}`}
            >
              <li className={css.movie} key={dayMovie.id}>{dayMovie.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};
export default Home;
