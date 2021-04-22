
export const getGifs = async( category ) => {
    // encodeURI() es una funcion para escapar los espacios
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=izZufBa9rdd0ZcqPT7nAP5rkhykaagIQ`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            // El operador de encadenamiento opcional ?. Es por si no trae imagenes, que tire undefined en vez de error. 
            // (Documentacion)
            // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        }
    })

    // console.log('gifs: ', gifs);
    return gifs;
}