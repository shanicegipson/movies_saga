import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class EditPage extends Component {
    state = {
        newInfo: {
            title: '',
            description: ''
        }
    }
        

    cancelEdit = (event) => {
        this.props.history.push('/details/:id');
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
        this.props.dispatch({ type: 'POST_MOVIE', payload: this.state.newInfo });
        console.log(this.state.newInfo);
    }


    render() {
        const movieInfo =this.props.store.moviesList.filter((movie, index) => {        
            console.log(this.props.match.params.id, 'movie ID that was clicked');
            console.log(movie.movies_id, 'movie ID');
            console.log(movie, 'movie that was clicked');
            console.log(movie[0].title, 'title of movie clicked');

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
                    <h3>{movieInfo[0].title}</h3>
                    <p>{movieInfo[0].description}</p>
                    <p>{movieInfo[0].name}</p>
                </div>
                
                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(EditPage);