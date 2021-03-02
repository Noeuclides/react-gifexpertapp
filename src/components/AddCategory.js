import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategory, categories } ) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategory( cats => [ inputValue, ...cats ] );
            setInputValue( '' );    
        };
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,
}

export default AddCategory
