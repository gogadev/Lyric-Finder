import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
    state = {
        trackTitle: ''
    }
    
    formSubmit = (dispatch, e) => {
        e.preventDefault();
    
        axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
            process.env.REACT_APP_MM_KEY
          }`
        )
        .then(res => {
          dispatch({
              type: 'SEARCH_TRACKS',
              payload: res.data.message.body.track_list
          })       
          this.setState({trackTitle: ''})
        })
        .catch(err => console.log(err));

    }


    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const{ dispatch } = value;
                    return (
                    <div className="card card-body mb-4 p-4 card-img">
                        <h1 className="display-4 text-center">
                            <i className="fas fa-music" /> Search For A Song
                        </h1>
                        <p className="lead text-center">Get The Lyrics For Any Song</p>
                        <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                            <div className="form-group">
                                <input 
                                type="text" 
                                className="form-control form-control-lg"
                                placeholder="Song Title..."
                                name="trackTitle"
                                value={this.state.trackTitle}
                                onChange={this.onChange}
                                />
                            </div>
                            <button className="btn btn-lg btn-block p-4 mb-5 btn-secondary btn-submit" type="submit">
                            Get Track Lyrics
                            </button>
                        </form>
                    </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Search;
