import React, { Component} from 'react';

class VideoMain extends Component {

    render () {
        const video =  this.props.video

        //if no video returned
        if (!video) {
            return <div>Fetching videos...</div>
        }

        //if search returns video
        const videoId = video.id.videoId;
        const url = 'https://youtube.com/embed/' + videoId

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="video-main" className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        )
    }


}


export default VideoMain;