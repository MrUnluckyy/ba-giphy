import axios from "axios";

export const getRandomGif = async () => {
    return axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
            api_key: 'BaC7RwDgyCEimoFGdOcEWLHA0uugOLwU',
        }
    }).then(resp => {
        return resp.data.data
    }).catch(err => {
        alert(err)
    })
}