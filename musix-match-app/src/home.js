import logo from './logo.svg';
import musicnote from './musicnote.webp'
import './App.css';
import React, { useEffect, useState } from 'react'
import { getlyrics, readlyrics } from './redux.js/userAction'
import Header from './components/header'
import SearchBar from './components/searchBar'
import { connect, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";


const HomePage = (lyrics) => {

    const [storeLyrics, setstoreLyrics] = useState([])
    const [Search, setSearch] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {

        if (lyrics.lyrics.message != undefined) {
       
            setstoreLyrics(lyrics.lyrics.message.body.track_list)
        }

        return () => {

        }
    }, [lyrics])

    const searchBylyrics = async (x) => {

        dispatch(getlyrics(x))

    }
    const handleChange = (event) => {

        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {

        searchBylyrics(Search)
        event.preventDefault();
    }
    return (
        <div className="App">


            <Header />
            {/* <SearchBar /> */}
            <div className='mainCard'>
                <div >
                    <h2 style={{ textAlign: "center" }}>Search the lyrics of any song</h2>
                    <form onSubmit={handleSubmit}>
                        <label className='mainSearchBar'>
                            <input className='searchBar' placeholder="type your lyrics" type="text" value={Search} onChange={handleChange} />
                            <input className='button' type="submit" value="Submit" />
                        </label>

                    </form>
                </div>
                <div style={{ marginLeft: '16px', marginRight: '16px' }}>
                    <h2 style={{ textAlign: 'center' }}>Top 10 Tracks</h2>
                    {(typeof storeLyrics === undefined || storeLyrics == []) ? (
                        <h1>Loading...</h1>
                    ) :
                        storeLyrics.map((val, key) => {

                            return (<div key={key} className='glassCard' style={{ display: 'flex' }}>
                                <div className='logoBox'>

                                    <img src={musicnote} style={{ objectFit: 'contain' }} className="App-logo" alt="logo" />
                                </div>
                                <div style={{ float: 'left' }}>
                                    <p><strong>{val.track.artist_name}</strong></p>
                                    <p><strong>Track:</strong> {val.track.track_name}</p>
                                    <p><strong>Album:</strong>{val.track.album_name}</p>
                                </div>

                                <div style={{ float: 'right', marginLeft: 'auto', marginRight: '24px' }}>
                                    <Link
                                        className="btn btn-dark d-flex align-items-center justify-content-center btn-block"
                                        to={`lyrics/track/${val.track.track_id}`}
                                        state={{ artist_name: val.track.artist_name, Track: val.track.track_name, Album: val.track.album_name, hasLyrics: val.track.has_lyrics }}
                                    >

                                        <input className='button' type="button" value="View lyrics" />

                                    </Link>
                                </div>
                                {/* </div> */}
                            </div>)
                        })}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // console.log(`homePages`, state.lyrics.lyrics);
    return {
        lyrics: state.lyrics.lyrics,
    }
}

export default connect(mapStateToProps)(HomePage);