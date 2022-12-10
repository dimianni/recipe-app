import React from 'react'
import Home from './pages/Home'
import Cuisine from './pages/Cuisine'
import Searched from './pages/Searched'
import Recipe from './pages/Recipe'
import {Routes, Route} from 'react-router-dom'

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:cuisineType' element={<Cuisine />} />
            <Route path='/search/:searched' element={<Searched />} />
            <Route path='/recipe/:name' element={<Recipe />} />
        </Routes>
    )
}

export default Pages;