import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import './Category.css'


const Category = () => {
    return (

        // <NavLink> provides an 'active' class (unlike <Link>)
        <div className='CuisineCategories'>
            <NavLink className='CuisineCat' to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink className='CuisineCat' to={'/cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink className='CuisineCat' to={'/cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink className='CuisineCat' to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </div>

    )
}

export default Category;