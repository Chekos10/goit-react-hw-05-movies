import { Loader } from "components/Loader/Loader"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { movieReviews } from "services/services"
import css from '../pages/Review.module.css'


const Review = () =>{
const [reviews, setReview] = useState([])
const [isLoading,setIsLoading] = useState(true)
const {movieId} = useParams()


useEffect(()=>{
    if(!movieId) return;
    const fetchReview = async () =>{
        try{
            const {results} = await movieReviews(movieId)
            setReview(results)
            console.log(results)
        }catch(error){
            console.log(error)
            setIsLoading(false)
        }finally{
            setIsLoading(false)
        }
    }
    fetchReview()
},[movieId])
    return(
        <div className="container">
        {isLoading && <Loader/>}
        <h2>Reviews</h2>
        <ul className={css.reviewsList}>
        {reviews.length > 0 ? (
            reviews.map(review => {
                return (
                    <li className={css.reviewCard} key={review.id}>
                    <p className={css.authorName}>Author : {review.author}</p>
                    <p className={css.reviewText}>{review.content}</p>
                    </li>
                )
            })
        ):(
            <p>We don't have any reviews for this movie</p>
        )}
        </ul>
        </div>
    )
}
export default Review;