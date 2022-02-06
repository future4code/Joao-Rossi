import axios from 'axios';

export default async function getAllPlaylists() {
    try {
        const config = {
            headers: {
                Authorization: 'joao-filippe-marzo',
            },
        };

        const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, config);
        const data = response.data.result
        console.log(data)        
    } catch (error) {
        console.log(error)
    }
}
