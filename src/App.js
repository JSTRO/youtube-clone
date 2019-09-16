import React from 'react'
import { Grid, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { Helmet } from "react-helmet";
import { SearchBar, VideoDetail, VideoList, DarkMode } from './components'
import youtube from './api/youtube'
import './style.css'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        darkMode: false
    }

    componentDidMount() {
        this.handleSubmit('javascript')
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    handleChange = () => {
        this.setState({
            darkMode: !this.state.darkMode
        })
    }

    handleSubmit = async (searchTerm) => {
        // Get 5 search results based on search query
        const responseSnippet = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyC20Se7X2phj5V02E7mnTN8CjlDxePS1s4',
                type: 'video',
                q: searchTerm
            }
        })

        const items = responseSnippet.data.items

        // Get view count, likes, dislikes for each video
        const responseStats = await youtube.get('videos', {
            params: {
                part: 'snippet, statistics',
                id: items.map((item) => item.id.videoId).join(","),
                key: 'AIzaSyC20Se7X2phj5V02E7mnTN8CjlDxePS1s4',
            }
        })

        // Get channel data
        const responseChannel = await youtube.get('channels', {
            params: {
                part: 'snippet',
                id: items.map((item) => item.snippet.channelId).join(","),
                key: 'AIzaSyC20Se7X2phj5V02E7mnTN8CjlDxePS1s4',
            }
        })

        // Change name of responseChannel's snippet property so it will not overwrite responseSnippet's snippet property
        responseChannel.data.items.map((item) =>  {
            item.channelSnippet = item.snippet
            delete item.snippet
        })

        // Create single object with properties from each request
        let responseTotal = items.map(video =>
            Object.assign(
                {},
                video,
                responseStats.data.items.find(stat => stat.id === video.id.videoId),
                responseChannel.data.items.find(channel => channel.id === video.snippet.channelId).channelSnippet
            )
        )

        this.setState({
            videos: responseTotal,
            selectedVideo: responseTotal[0]
        })
    }

    render() {

        const { selectedVideo, videos, darkMode } = this.state
        const { handleChange } = this.props

        const theme = createMuiTheme({
            palette: {
                type: 'dark',
            },
        })

        return (
            <MuiThemeProvider theme={darkMode ? theme : null }>
                <Helmet>
                    <title>
                        {!selectedVideo ? "YouTube Clone" : `YouTube Clone | ${selectedVideo.snippet.title}`}
                    </title>
                </Helmet>
                <Grid container spacing={4} className={darkMode ? "darkBackground" : null}>
                    <Grid className="videoContainer" item xs={12}>
                        <Grid alignItems="center" container spacing={2}>
                            <Grid item xs={8}>
                                <SearchBar onFormSubmit={this.handleSubmit} />
                            </Grid>
                            <Grid item xs={4}>
                                <DarkMode onChange={this.handleChange} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} >
                            <Grid item xs={8} >
                                <VideoDetail video={selectedVideo} />
                            </Grid>
                            <Grid className="videoCard" item xs={4}>
                                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default App