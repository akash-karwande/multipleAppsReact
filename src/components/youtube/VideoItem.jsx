import React from "react";
import { Grid, Paper } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "10px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
      </Paper>
    </Grid>
  );
}