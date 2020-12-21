import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.channelId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={3}>
      {listOfVideos}
    </Grid>
  );
}
