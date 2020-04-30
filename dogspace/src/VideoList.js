import React, { Component } from 'react';
import VideoListItem from './VideoListItem'

class VideoList extends Component {

    renderVideoListItems = () => {
        return this.props.videos.map(video => 
            <VideoListItem 
            key={video.etag}
            video={video} 
            onVideoSelect={this.props.onVideoSelect} />
            )
    }

    render () {
        return (
            <ul className="col-md-4 list-group">
                {this.renderVideoListItems()}
            </ul>
        )
    }




}

export default VideoList;