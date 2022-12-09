import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Popular = () => {

    const [popularRecepes, setPopularRecepes] = useState([])

    // Run 'getPopularRecepies' as soon as component gets mounted
    // We specify an empty arr as a second param to run it once on mount
    useEffect(() => {
        getPopularRecepies()
    }, [])

    async function getPopularRecepies() {

        // Retreiving data from localstorage 
        const check = localStorage.getItem('popular');

        if (check){
            // If data is in localstorage - set it for the state
            setPopularRecepes(JSON.parse(check))
        } else {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=9`)
                const data = await response.json()

                // Saving data to localstorage
                localStorage.setItem('popular', JSON.stringify(data.recipes))
                setPopularRecepes(data.recipes)

            } catch (error) {
                console.log(error.message);
            }
        }

      
    }
    
    return (
        <div>
            <h3>Popular picks</h3>
            <Splide options={{type: 'loop', perPage: 3, pagination: false}}>
                {popularRecepes?.map((rec, i) => {
                    // '?' above is optional chaining. If the object is undefined or null, it returns undefined instead of throwing an error.
                    return (
                        <SplideSlide key={i}>
                            <p>{rec.title}</p>
                            <img src={rec.image} alt={rec.title} />
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default Popular;