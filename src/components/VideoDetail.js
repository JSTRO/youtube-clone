import React from 'react'
import Linkify from 'react-linkify'
import { addCommas } from '../utils/addCommas'
import { convertDate } from '../utils/convertDate'
import { formatDescription } from '../utils/formatDescription'
import  { Grid, Paper, Typography, Divider } from '@material-ui/core'
import { ThumbUp, ThumbDown } from '@material-ui/icons';

const VideoDetail = ({ video, darkMode }) => {

    if(!video) return <Typography variant="h6">Loading...</Typography>

    const videoSrc = `https://www.youtube.com/embed/${video.id}`

    const { viewCount, likeCount, dislikeCount } = video.statistics
    const { title, channelTitle, publishedAt, description } = video.snippet

    return (
        <React.Fragment>
            <Paper elevation={6} className="videoContainer">
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} className="iframe"/>
                <Grid item xs={12}>
                    <Typography variant="h6">{title}</Typography>
                </Grid>
                <Grid alignItems="center" container spacing={2} className="stats">
                    <Grid item xs={7}>
                        <Typography variant="subtitle1">{addCommas(viewCount)} views</Typography>
                    </Grid>
                    <ThumbUp></ThumbUp>
                    <Grid item xs={1}>
                        <Typography>{addCommas(likeCount)}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <ThumbDown></ThumbDown>
                    <Grid item xs={1}>
                        <Typography>{addCommas(dislikeCount)}</Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid alignItems="center" container spacing={2} >
                    <Grid item xs={1}>
                        <img alt="thumbnail" src={video.thumbnails.medium.url} className="channelImg"/>
                     </Grid>
                     <Grid item xs={4}>
                        <Typography variant="subtitle1">{channelTitle}</Typography>
                        <Typography variant="subtitle2">Published on {convertDate(publishedAt)}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={11}>
                        <Linkify>
                            <Typography variant="subtitle2">
                                {formatDescription(description).map((item, id) => <p key={id}>{item}</p>)}
                            </Typography>
                        </Linkify>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail