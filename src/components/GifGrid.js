import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // renombro data:images como images
    const { data:images, loading } = useFetchGifs( category );

    console.log('state: ', loading);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }      

            <div className="card-grid">
                {
                    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                    // images.map(({id, title}) => ( // en vez de poner img y despues pasar img.id e img.title
                    // <li key={ id }> { title } </li>
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        // Manda las propiedades del objeto img una a una, es como si mandáramos 
                        // id, title, url de forma independiente, y no el objeto img en si.
                        // (Documentacion)
                        // https://developer.mozilla.org/es/docs/conflicting/Web/JavaScript/Reference/Operators/Spread_syntax
                        />
                    ))

                }
            </div>
        </>
    )
}
