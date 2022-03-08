
import musicnote from './musicnote.webp'
import './App.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { readlyrics } from './redux.js/userAction'
import Header from './components/header'
import { connect, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const Lyrics = (lyrics) => {

  const location = useLocation();
  const [storeLyrics, setstoreLyrics] = useState()
  const dispatch = useDispatch()
  useEffect(() => {

    fetchLyrics(location.state)

  }, [])

  useEffect(() => {

    if (lyrics.lyrics != undefined) {

      if (lyrics.lyrics.message.body.length != 0) {
        setstoreLyrics(lyrics.lyrics.message.body.lyrics.lyrics_body)
      } else {

        setstoreLyrics('')
      }

    }

  }, [lyrics])



  const fetchLyrics = async (x) => {
    dispatch(readlyrics(x))
  }

  return (
    <div className="App">


      <Header />
      <Link to="/" className="btn btn-dark btn-sm mb-4">

        <input className='button' style={{ position: 'absolute', top: 10 }} type="button" value="Go Back" />
      </Link>
      <div className='mainCard'>

        <div style={{ marginLeft: '16px', marginRight: '16px' }}>
          <h2 style={{ textAlign: 'center' }}>Tracks with lyrics</h2>
          <div className='glassCard' style={{ display: 'flex' }}>
            <div className='logoBox'>

              <img src={musicnote} style={{ objectFit: 'contain' }} className="App-logo" alt="logo" />
            </div>

            <div>
              <p><strong>{location.state.artist_name}</strong></p>
              <p><strong>Track:</strong> {location.Track}</p>
              <p><strong>Album:</strong>{location.state.Album}</p>
              {location.state.hasLyrics != 0 ? <p><strong>Lyrics:</strong>{storeLyrics}</p> : <p><strong>Lyrics:</strong>They are no Lyrics to this song sorry</p>}
            </div>
          </div>)

        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    lyrics: state.lyrics.readlyrics,
  }
}
export default connect(mapStateToProps)(Lyrics);





