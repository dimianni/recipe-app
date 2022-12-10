import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([])

    const params = useParams()

    useEffect(() => {
        console.log(params.searched);
        getSearched(params.searched)
    }, [params.searched])

    async function getSearched(name) {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${name}`)
            const data = await response.json()

            console.log(data.results);

            setSearchedRecipes(data.results)

        } catch (error) {
            console.log(error.message);
        }
    }

    return (

        <div>
            {
                searchedRecipes?.map((el, i) => {
                    return (
                        <div key={i}>
                            <h4>{el.title}</h4>
                            <img src={el.image} alt={el.title} />
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default Searched;