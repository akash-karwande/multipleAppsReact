import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux'
import { getImages } from '../actions/image'
import PropTypes from 'prop-types';

function ImageSearch({ name: imgName, images: { imagesArray }, getImages, loading }) {

    const [name, setName] = useState(imgName);

    useEffect(() => {
        document.title = 'Images | Search'
        getImages(name);
    }, [getImages])

    const onType = (event) => {
        if (event.key === "Enter") {
            getImages(name);
        }
    }

    return (
        <Fragment>
            <div className="image-search">
                <h2>Search images</h2>
                <input onKeyPress={onType} id="input-area" value={name} autoFocus type="text" onChange={e => setName(e.target.value)} placeholder="Search images by theme" />
                <button id="button-ele" onClick={() => getImages(name)}>Search</button>
            </div>

            {!loading && imagesArray.length === 0 ? (<h4 className='images-notFound'>Images are not found for your search. Please try by modifying your input.</h4>) :
                (<Fragment>
                    {loading && <h4 className='loading'>Loading...</h4>}
                    <div className='imageContainer'>
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
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        name: state.images.name,
        images: state.images,
        loading: state.images.loading
    }
}

export default connect(mapStateToProps, { getImages })(ImageSearch)
