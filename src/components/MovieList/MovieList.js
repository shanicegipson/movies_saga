import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../MovieCard/MovieCard';
import mapStoreToProps from '../../modules/mapStoreToProps';

class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIES'})
    }

    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    {this.props.store.moviesList.map((movie, index) => {
                        {console.log('meow',movie.name)}
                        return (
                            <Grid key={index} item>
                                <MovieCard movie={movie}></MovieCard>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

export default connect (mapStoreToProps) (MovieList);