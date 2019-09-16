import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { formatViewCount } from '../utils/formatViewCount'

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <Grid item xs={12}>
            <Paper className="videoItem" onClick={() => {onVideoSelect(video)}}>
                <img className="videoImg" alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <Typography className="videoItemTitle" variant="subtitle1">
                    <b>{video.snippet.title}...</b>
                    <Typography>{video.snippet.channelTitle}</Typography>
                    <Typography>{formatViewCount(video.statistics.viewCount)} views</Typography>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem