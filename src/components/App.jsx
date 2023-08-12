import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from '../components/App.module.css'
const Home = lazy(()=>import('pages/Home'))
const Movies = lazy(()=>import('pages/Movies'))
const MovieDetail = lazy(()=>import('pages/MovieDetail'))

export const App = () => {
return (
    <>
    <header>
        <nav className={css.nav}>
            <NavLink className={css.home} to='/'>Home</NavLink>
            <NavLink className={css.movies} to='/Movies'>Movies</NavLink>
        </nav> 
    </header>
    <main>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/Movies/:movieId/*' element={<MovieDetail/>}/>
        </Routes>
    </Suspense>
    </main>
    </>
);
};

/* <Route path="*" element={<NotFound />} /> */
