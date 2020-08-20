import React from 'react'

function Artist({artist}) {

    if(!artist) return null;

    const { name, images, followers, genres} = artist
    return (
        <div>
            <h3>{name}</h3>
    <p>{followers.total} Followers</p>
    <p>{genres.join(' | ')}</p>
    <img className="artist-pic" src={images[0] &&images[0].url} alt="artist-pic"></img>
        </div>
    )
}

export default Artist
