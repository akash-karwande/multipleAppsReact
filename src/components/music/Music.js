import React, { useState, useEffect } from 'react';
import Artist from './Artist';
import Track from './Track';
import { connect } from 'react-redux';
import { getMusic } from '../../actions/music'

const Music = ({ artist, songs, getMusic, loading }) => {
    const [name, setName] = useState('');
    useEffect(() => {
        getMusic('guru randhawa')
    }, [getMusic, name]);
 
    return (

        <div className="music-component">
            <h2>Music Lover</h2>
            <input id="input-area" autoFocus type="text" onChange={e => setName(e.target.value)} placeholder="Search by artist" value={name} />
            <button id="button-ele" onClick={() => getMusic(name)}>Search</button>
            {loading && <h5>Loading ...</h5>}
           {artist && !loading &&  <Artist artistInfo={artist}></Artist>}
            <Track tracks={songs}></Track>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        artist: state.music.artist,
        songs: state.music.songs,
        loading: state.music.loading
    }
}

export default connect(mapStateToProps, { getMusic })(Music)
