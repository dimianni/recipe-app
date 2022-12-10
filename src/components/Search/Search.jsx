import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Search.module.css'

const Search = () => {

    const [input, setInput] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/search/${input}`)
    }

    return (
    
        <form className={styles.SearchForm} onSubmit={submitHandler}>
            <input className={styles.SearchFormInput} onChange={(e) => setInput(e.target.value)} type="text" />
        </form>
    )
}

export default Search;