import axios from 'axios'

export async function getUserLyrics(data) {
    try {
        let passLyrics = {lyrics:data}
        const response = await axios.post(`http://localhost:8080/api/v1`,passLyrics);
        return response.data  
    } catch (error) {
        console.log(error);
        console.log(`in catch`);
        return []
    }
}

export async function readLyrics(data) {
    try {
        let passLyrics = {lyrics:data}
        const response = await axios.post(`http://localhost:8080/api/v1/lyrics`,passLyrics);
        return response.data  
    } catch (error) {
        console.log(error);
        console.log(`in catch`);
        return []
    }
}