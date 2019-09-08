import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { withRouter } from 'react-router-dom';


class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    toDetailsPage = (movies_id) => (event) => {
        console.log(movies_id)
        this.props.history.push("/details/"+movies_id);
    }

    render() {
        const newMovieArray = this.props.store.moviesList.map((movie, index) => {
            return (
                <div key={index}>
                    <h3> {movie.title}</h3>
                    <p> {movie.description}</p> 
                    <img  src={movie.poster} onClick={this.toDetailsPage(movie.movies_id)} alt='text'/>
                </div>
            )
        });
        return (
            <div className="App">
                
                <ul>
                    {newMovieArray}
                </ul>
            </div>
        );
    }
}
    export default connect(mapStoreToProps)(withRouter(MovieList));