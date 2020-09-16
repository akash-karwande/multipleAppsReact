import React from 'react'

const Artist = ( {artistInfo: {followers, name, genres, images}}) => {


    return (
        <div>
            <h3>{name}</h3>
            <p>{followers && followers.total} Followers</p>
            <p>{genres && genres.join(' | ')}</p>
            <img className="artist-pic" src={images && images[0] && images[0].url} alt="artist-pic"></img>
        </div>
    )
}

export default Artist
