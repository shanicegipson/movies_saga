import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

import {withRouter} from 'react-router-dom';


class EditPage extends Component {
    
    
    state = {
        newInfo: {
            id: parseInt(this.props.match.params.id),
            title: '',
            description: ''
        }
    }
        

    cancelEdit = (event) => {
        const clickedMovieId =this.props.match.params.id
        this.props.history.push('/details/'+clickedMovieId);
    }

    editInfo = (event, movieKey) => {
        console.log(movieKey)
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                [movieKey]: event.target.value,
            }
        });
    }
    

    updateMovie = (event) => {
        event.preventDefault();
        // const clickedMovieId =this.props.match.params.id
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.newInfo });
        console.log(this.state.newInfo, 'Updated info');
    }


    render() {
        const movieInfo =this.props.store.moviesList.map((movie, index) => {        
            // console.log(this.props.match.params.id, 'movie ID that was clicked');
            // console.log(movie.movies_id, 'movie ID');
            // console.log(movie, 'movie that was clicked');
            // console.log(movie[0].title, 'title of movie clicked');
        //    console.log(movieInfo, 'movie info');
            console.log(this.props.match.params.id, 'What is this');

            return movie.movies_id == this.props.match.params.id
        
        })
        
        return (
            <div>
                <div>
                    <button onClick={this.cancelEdit}>Cancel</button>
                    <button onClick={this.updateMovie}>Save</button>
                </div>
                <div>
                    <form onSubmit={this.updateMovie}> 
                     <input type='text' value={this.state.newInfo.title} onChange={(event) => this.editInfo(event, 'title')} placeholder="Enter title"/>
                     <textarea type='text' value={this.state.newInfo.description} onChange={(event) => this.editInfo(event, 'description')} placeholder="Enter description"/>
                    </form>
                </div>
                <div>
                    <h3>Id: {this.props.match.params.id}</h3>
                    <h3>{movieInfo.title}</h3>
                    {/* <p>{movieInfo[0].description}</p>
                    <p>{movieInfo[0].name}</p> */}
                </div>
                
                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(withRouter(EditPage));