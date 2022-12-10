import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {


    const [recipe, setRecipe] = useState([])

    const params = useParams()

    useEffect(() => {
        getRecipe(params.name)
    }, [params.name])

    async function getRecipe(id) {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`)
            const data = await response.json()
            setRecipe(data)
        } catch (error) {
            console.log(error.message);
        }
    }


    return (

        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
        </div>

    )


}

export default Recipe;