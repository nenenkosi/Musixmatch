const express = require('express')
const dotenv = require('dotenv')
const axios = require('axios');
const cors = require('cors');
const app = express();

dotenv.config()
const port = process.env.SERVER_PORT; // default port to listen
const API_Key = process.env.REACT_APP_KEY;
const API_VERSION = '1'

app.use(cors())
app.use(express.json({limit: '200mb'})) 
app.use(express.urlencoded({limit: '200mb',extended:true}))

app.post(`/api/v${API_VERSION}/`, async(req,res) =>{
    try {
        let lyrics = req.body.lyrics;
        const response = await axios.get(`https://api.musixmatch.com/ws/1.1/track.search?apikey=${API_Key}&format=json&q_lyrics=${lyrics}&quorum_factor=1`)
        res.send(response.data)
    } catch (error) {
        console.log(error);
        res.status(401)    
    }
})

app.post(`/api/v${API_VERSION}/lyrics`, async(req,res) =>{
    try {
        let lyricsId = req.body.lyrics;    
        const response = await axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=${API_Key}&format=json&q_track=${lyricsId.Track}&q_artist=${lyricsId.artist_name}`)
        res.send(response.data)
    } catch (error) {
        console.log(error);
        res.status(401)    

    }
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });