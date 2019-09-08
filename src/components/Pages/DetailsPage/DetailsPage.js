import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import BackButton from '../../BackButton/BackButton';
import EditButton from '../../EditButton/EditButton';



class DetailsPage extends Component {


    render () {
        const movieInfo =this.props.store.moviesList.filter((movie, index) => {
            // console.log(movieInfo, 'THIS IS A MOVIE!');
            // console.log(this.props.store.moviesList, 'What do we have?');
            // console.log(movie.movies_id, 'movie ID');
            // console.log(this.props.match.params.id, 'clicked id'); 
            console.log(movie, 'name of movie');
        
                return movie.movies_id == this.props.match.params.id
        
            })

        return(
            <div>
            <div>
                <BackButton />
                <EditButton />
            </div>
            <div>
                {/* <h3>Id: {this.props.match.params.id}</h3> */}
                <h3>{movieInfo[0].title}</h3>
                <p>{movieInfo[0].description}</p>
                <p>{movieInfo[0].name}</p>

            </div>
        </div>
        )
    }
}



export default connect(mapStoreToProps)(withRouter(DetailsPage));