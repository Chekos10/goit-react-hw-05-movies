import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router';
import { MovieDetails } from 'services/services';
import { Loader } from 'components/Loader/Loader';
import { Link, NavLink } from 'react-router-dom';
import css from '../pages/MovieDetail.module.css'
const Cast = lazy(()=>import('./Cast'))
const Review = lazy(()=>import('./Review'))


const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true)
  const {movieId} = useParams()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await MovieDetails(movieId);
        if (data) {
          setMovie(data);
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    };
    fetchMovie();
  }, [movieId]);
  const back = useRef(location.state?.from ?? '/')
  const image = movie.poster_path;
  return (
    <>
      {isLoading ? (
        <Loader/>
      ):(
        <div className={css.detailsSection}>
        <div className={css.photoSection}>
        <Link className={css.backLink} to={back.current}> Go back</Link>
        {image ? (
        <img
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt={`${movie.original_title}`}
          width={'300px'}
        />
      ) : (
        <p>No photo</p>
      )}
        </div>
      <div>
        <h2 className={css.movieTitle}>{movie.original_title}</h2>
        <p> User Score {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        {movie.genres && (
          <div>
            <h3>Genres</h3>
            {movie.genres.map(genre => (
              <li className={css.genresList} key={genre.id}>{genre.name}</li>
            ))}
          </div>
        )}
      </div>
      </div>
      )}
      <div>
        <h3>Additional information</h3>
        <NavLink className={css.castLink} to='cast'>Cast</NavLink>
        <NavLink className={css.reviewLink} to='review'>Review</NavLink>
      </div>
      <Suspense>
        <Routes>
          <Route path='cast' element={<Cast/>}/>
          <Route path='review' element={<Review/>}/>
        </Routes>
      </Suspense>
    </>
  )

};
export default MovieDetail;
