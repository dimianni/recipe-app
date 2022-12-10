import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])

    let params = useParams()

    useEffect(() => {
        getCuisine(params.cuisineType)
    }, [params.cuisineType])

    async function getCuisine(name) {
        
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&cuisine=${name}`)
            const data = await response.json()
            setCuisine(data.results);
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <>
            <h4> <b>Cuisine</b> </h4>
            {cuisine?.map((el, i) => {
                return (
                    <Link to={`/recipe/${el.id}`}>
                        <div key={i}>
                            {el.title}
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default Cuisine;