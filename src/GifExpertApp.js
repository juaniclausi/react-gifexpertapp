import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //Hook useState nombre de la constante, funcion, datos iniciales
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //   // setCategories( ['El chavo', ...categories]);
    //   setCategories( cats => [ ...cats, 'El Chavo']);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}


