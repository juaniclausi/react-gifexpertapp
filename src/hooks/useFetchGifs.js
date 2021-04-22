import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Codigo que ejecuta la funcion, solo una vez, cuando el componente se renderiza por primera vez.
    useEffect(() => {
        getGifs(category)// helper
            .then(imgs => {

                console.log('imgs: ', imgs);
                setState({
                    data: imgs,
                    loading: false
                });

            });

    }, [category]); // Si la categoria cambia se vuelve a disparar la peticion HTTP. En vacio el array solo lo hace 1 vez.


    return state; // { data:[], loading: true };

}