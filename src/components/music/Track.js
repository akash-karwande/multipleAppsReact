import React, { Component } from 'react'

class Track extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             playing: false,
             audio: null,
             playingPreUrl: null
        }
    }
    

    playAudio = (previewUrl) => {
        const audio = new Audio(previewUrl);

        if(!this.state.playing) {
            audio.play();
            this.setState({playing: true, audio, playingPreUrl: previewUrl});
        } else {
            this.state.audio.pause();

            if (this.state.playingPreUrl === previewUrl) {
                this.setState({playing: false});
            } else {
                audio.play();
                this.setState({audio, playingPreUrl: previewUrl});
            }
           
        }
      
    }

    trackIcon = (track) => {
        if(!track.preview_url) {
            return <span>N/A</span>
        }
        if( this.state.playing && this.state.playingPreUrl === track.preview_url ) {
            return <span>| |</span>
        }
        return <span>&#9654;</span>
    }

    render() {
        const { tracks } = this.props;
        return (

            <div>
                {tracks.map(track => {
                    const { id, name, album, preview_url } = track;

                    return (
                        <div key={id} onClick={() => this.playAudio(preview_url)} className="track">
                            <img className="track-image" src={album.images[0].url} alt="track-avatar"></img>
                            <p className="track-text">{name}</p>
                            <p className="track-icon" >{this.trackIcon(track)}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Track
