import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import './Vegeterian.scss'

const Vegeterian = () => {

    const [vegRecepes, setVegRecepes] = useState([])

    useEffect(() => {
        getVegRecipes()
    }, [])

    async function getVegRecipes() {

        const check = localStorage.getItem('vegeterian')

        if (check) {
            setVegRecepes(JSON.parse(check))
        } else {
            try {

                const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=9&tags=vegetarian`)
                const data = await response.json()

                localStorage.setItem('vegeterian', JSON.stringify(data.recipes))
                setVegRecepes(data.recipes);

            } catch (error) {
                console.log(error.message);
            }
        }
    }


    return (
        <div className='Vegeterian'>
            <h3>Vegeterian</h3>
            <Splide options={{ type: 'loop', perPage: 3, pagination: false }}>
                {
                    vegRecepes?.map((rec, i) => {
                        return (
                            <SplideSlide>
                                <Link key={i} to={`/recipe/${rec.id}`}>
                                    <p>{rec.title}</p>
                                    <img src={rec.image} alt={rec.title} />
                                </Link>
                            </SplideSlide>
                        )
                    })

                }
            </Splide>
        </div>

    )
}

export default Vegeterian;