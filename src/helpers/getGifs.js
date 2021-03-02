export const getGifs = async ( category ) => {
    const api_key = 'uGhUW6XOe6CGwJE4vDbQAVmAEnljOh6x';
    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    const url = `${endpoint}?api_key=${api_key}&q=${ encodeURI(category) }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            image: img.images?.downsized_medium.url
        }
    })
    return gifs;
}