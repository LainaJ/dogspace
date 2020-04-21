import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        searchTerm: ""
    }

    onInputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value
        })
        this.props.onSearchTermChange(e.target.value)
    }


    render (){
        return (
            <div className="search-bar">
                <input
                placeholder="Search"
                value={this.state.searchTerm}
                onChange={(e) => this.onInputChange(e)}/>
            </div>

        )
    }




}

export default SearchBar;