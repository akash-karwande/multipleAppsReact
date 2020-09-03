import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux'
import { getImages } from '../actions/image'
import PropTypes from 'prop-types';

function ImageSearch({ images: { imagesArray }, getImages, loading }) {

    const [name, setName] = useState('');

    useEffect(() => {
        getImages(name);
    }, [getImages, name])

    return (
        <Fragment>
            <div>
                <input id="input-area" value={name} autoFocus type="text" onChange={e => setName(e.target.value)} placeholder="Search images by theme" />
                <button id="button-ele" onClick={() => getImages(name)}>Search</button>
            </div>

            {imagesArray.length === 0 ? (<h4>Images are not found for your search. Please try by modifying your input.</h4>) :
                (<Fragment>
                    {loading && <h2>Loading images...</h2>}
                    <div>
                        {imagesArray.map(image => {
                            const { id, downloads, favorites, webformatURL, largeImageURL } = image;

                            return (
                                <div key={id} className="track">
                                   <a target='_blank' rel="noopener noreferrer" href={largeImageURL}> <img className="track-image" src={webformatURL} alt="track-avatar"></img></a>
                                    <p className="track-text">Downloads: {downloads} |  Favorites: {favorites}</p>
                                </div>
                            )
                        })}
                    </div>
                </Fragment>)}

        </Fragment>
    )
}


ImageSearch.prototype = {
    getImages: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        images: state.images,
        loading: state.images.loading
    }
}

export default connect(mapStateToProps, { getImages })(ImageSearch)
