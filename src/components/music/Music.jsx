import React, { useState, useEffect } from 'react';
import Artist from './Artist';
import Track from './Track';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMusic } from '../../actions/music'

const Music = ({ artist, songs, getMusic, loading }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        getMusic();
    }, [getMusic]);

    const onEnter = (e) => {

        var code = (e.keyCode ? e.keyCode : e.which);
        if (code === 13) { //Enter keycode
            getMusic(e.target.value)
        }
    }
    return (

        <div className="music-component">
            <h2>Music Lover</h2>
            <input id="input-area" type="text" onKeyPress={onEnter} value={name} onChange={e => setName(e.target.value)} placeholder="Search by artist" />
            <button id="button-ele" onClick={() => getMusic(name)}>Search</button>
            {loading && <h4>Loading ...</h4>}
            {!loading && <Artist artistInfo={artist}></Artist>}
            {!loading && <Track tracks={songs}></Track>}
        </div>
    )

}

Music.prototype = {
    artist: PropTypes.array.isRequired,
    songs: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    getMusic: PropTypes.func.isRequired

}

const mapStateToProps = (state) => {
    return {
        artist: state.music.artist,
        songs: state.music.songs,
        loading: state.music.loading
    }
}

export default connect(mapStateToProps, { getMusic })(Music)
