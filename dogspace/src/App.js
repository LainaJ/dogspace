import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY


class App extends Component {
  
  state = {
    videos: [],
    displayVideo: null
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
      })
  })

}


  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)
    
    return (
      <div>
        <div className="page-title">DogSpace</div>
            <div className="page-description">A wellness space for dogs and their people</div>
            {/* <SearchBar
                onSearchTermChange={videoSearch}/>
            <VideoDetail 
                video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                videos ={this.state.videos}/> */}


      </div>
    )
  }



}

export default App;
