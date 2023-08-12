import { Loader } from "components/Loader/Loader"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getMovieCredit } from "services/services"
import css from '../pages/Cast.module.css'

const Cast = () =>{
    const [movieCredits, setMovieCredits]= useState([])
    const [isLoading,setIsLoading]=useState(true)
    const {movieId} = useParams()

    useEffect(()=>{
        if(!movieId) return;
        const fetchActors = async () => {
            try{
                const {cast} = await getMovieCredit(movieId)
                setMovieCredits(cast)
            }catch(error){
                console.log(error)
                setIsLoading(false)
            }finally{
                setIsLoading(false)
            }
        }
        fetchActors()
    },[movieId])

    return (
        <>
        {isLoading ? (
            <Loader/>
        ):(
            <div className={css.cards}>
            {movieCredits.slice(0, 10).map(actor =>{
                return (
                    <div className={css.actorCard} key={actor.id}>
                        <li className={css.cardItem}>
                        <img
                            src={
                                actor.profile_path
                                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                : <p>No Photo</p>
                            }
                            alt={actor.name}
                        />
                        <div className={css.actorDetails}>
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </div>
                        </li>
                    </div>
                )
            })}
            </div>
        )}
        </>
    )
}

export default Cast;