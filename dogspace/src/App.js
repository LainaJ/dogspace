import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './SearchBar';
import VideoMain from './VideoMain';
import VideoList from './VideoList';




const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`
console.log(API_KEY)


class App extends Component {
  
  state = {
    videos: [],
    displayVideo: null
  }

  videoSearch(term, api_key){
    YTSearch({key: api_key, term: term}, (videos) => {
      this.setState({ 
          videos: videos,
          displayVideo: videos[0]
      })
  })

}


  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term, API_KEY)}, 300)
    
    return (
      <div>
        <div className="page-title">DogSpace</div>
            <div className="page-description">A wellness space for dogs and their people</div>
            <SearchBar
                onSearchTermChange={videoSearch}/>
            <VideoMain
                video={this.state.displayVideo}/>
            <VideoList
                onVideoSelect= {displayVideo => this.setState({displayVideo})}
                videos ={this.state.videos}/> 
      </div>
    )
  }



}

export default App;
