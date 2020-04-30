import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './SearchBar';
import VideoMain from './VideoMain';
import VideoList from './VideoList';

let API_KEY = process.env.REACT_APP_API_KEY_YT

class App extends Component {
  
  state = {
    videos: [],
    displayVideo: null
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
          videos: videos,
          displayVideo: videos[0]
      })
  })

}

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)
    
    return (
      <div>
        <div className="page-title">DogSpace</div>
            <div className="page-description">A wellness space for dogs and their people</div>
            <SearchBar
                onSearchTermChange={videoSearch}/>
            <VideoMain
                video={this.state.displayVideo}/>
                {this.videoSearch("dog yoga")}
            <VideoList
                onVideoSelect= {displayVideo => this.setState({displayVideo})}
                videos ={this.state.videos}/> 
      </div>
    )
  }



}

export default App;
