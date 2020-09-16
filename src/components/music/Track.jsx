import React, { useState } from 'react'

const Track = (props) => {

    const { tracks } = props;

    const [songStatus, setSongStatus] = useState({
        playing: false,
        audio: null,
        playingPreUrl: null
    })

    const playAudio = (previewUrl) => {
        const audio = new Audio(previewUrl);

        if (!songStatus.playing) {
            audio.play();
            setSongStatus({ playing: true, audio, playingPreUrl: previewUrl });
        } else {
            // this.state.audio.pause();

            songStatus.audio.pause();

            if (songStatus.playingPreUrl === previewUrl) {
                setSongStatus({ playing: false, audio, playingPreUrl: previewUrl });
            } else {
                audio.play();
                setSongStatus({ playing: true, audio, playingPreUrl: previewUrl });
            }

        }

    }

    const trackIcon = (track) => {
        if (!track.preview_url) {
            return <span>N/A</span>
        }
        if (songStatus.playing && songStatus.playingPreUrl === track.preview_url) {
            return <span>| |</span>
        }
        return <span>&#9654;</span>
    }


    return (

        <div>
            {tracks && tracks.map(track => {
                const { id, name, album, preview_url } = track;

                return (
                    <div key={id} onClick={() => playAudio(preview_url)} className="track">
                        <img className="track-image" src={album.images[0].url} alt="track-avatar"></img>
                        <p className="track-text">{name}</p>
                        <p className="track-icon" >{trackIcon(track)}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default Track
