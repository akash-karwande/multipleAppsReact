import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { connect } from 'react-redux';

import { SearchBar, VideoList, VideoDetail } from "./";
import { getVideos } from '../../actions/youtube'

const YouTube = ({ getVideos, stateVideos, nameDefault, loading }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    document.title = 'YouTube | Clone';
    handleSubmit(nameDefault);
  }, [])


  const handleSubmit = (searchTerm) => {
    getVideos(searchTerm);
    setSelectedVideo(stateVideos[0]);
  }

  return (
    <Grid className='youtube' style={{ justifyContent: "center" }} container spacing={5}>
      <Grid item xs={10}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
            {loading && <h4 className='youtubeLoader'>Loading ...</h4>}

          </Grid>
          <Grid item xs={12} md={8}>
            <VideoDetail video={selectedVideo} loading={loading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <VideoList videos={stateVideos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

}

const mapStateToProps = (state) => {
  return {
    stateVideos: state.youtube.videos,
    nameDefault: state.youtube.videoSearch,
    loading: state.youtube.loading
  }
}

export default connect(mapStateToProps, { getVideos })(YouTube)