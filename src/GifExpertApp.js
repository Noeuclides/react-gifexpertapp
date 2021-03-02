import React, { useState } from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Super campeones', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategory={ setCategories } categories={ categories }  />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                            />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
