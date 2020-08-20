import React, { Component } from 'react';
import axios from 'axios';
import Artist from './Artist';
import Track from './Track';

class Music extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Guru Randhawa',
             artist: '',
             tracks: []
        }
    }

    handleInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    OnType = (event) => {
        if (event.key === "Enter") {
            this.getMusic();
        }
    }

    async getMusic(){
       try {
        const artistInfo = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${this.state.name}`);
        const artistID = artistInfo.data.artists.items[0].id;
        await this.setState({artist: artistInfo.data.artists.items[0]});
  
        const topSongs = await axios.get(`https://spotify-api-wrapper.appspot.com/artist/${artistID}/top-tracks`);
        await this.setState({tracks: topSongs.data.tracks});
       } catch (err) {
           alert("That's was not worked, try another name.");
           console.log(err)
       }
    }
    
    componentDidMount() {
     this.getMusic();
    }

    render() {
        const { name } = this.state.name;
        return (
            <div className="music-component">
            <h2>Music Lover</h2>
             <input id="input-area" onKeyPress={this.OnType} autoFocus type="text" onChange={this.handleInput} placeholder="Search by artist" value={name} />
             <button id="button-ele" onClick={this.getMusic}>Search</button>
             <Artist artist={this.state.artist}></Artist>
             <Track tracks={this.state.tracks}></Track>
            </div>
        )
    }
}

export default Music
