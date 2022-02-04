import axios, { Axios } from 'axios';
import { BASE_URL } from '../constants/urls';

export default async function getAllPlaylists() {
    try {
        const config = {
            method: 'get',
            url: `${BASE_URL}/playlists`,
            headers: {
                Authorization: 'joao-filippe-marzo',
            },
        };

        const response = await Axios(config);
        
    } catch (error) {
        console.log(error)
    }
}
