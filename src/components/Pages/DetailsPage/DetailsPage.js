import React from 'react'; 
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import BackButton from '../../BackButton/BackButton';
import EditButton from '../../EditButton/EditButton';


function MovieDetails(props) {
    const movieInfo = props.store.moviesList.filter((movie, index) => {
    console.log(movieInfo, 'THIS IS A MOVIE!');
    console.log(props.store.moviesList, 'What do we have?');
    console.log(movie.movies_id, 'movie ID');
    console.log(props.match.params.id, 'clicked id');

        return movie.movies_id == props.match.params.id
        

    })

    
    // console.log(movieInfo.title, 'details');


    return (
        <div>
            <div>
                <BackButton />
                <EditButton />
            </div>
            <div>
                <h3>Id: {props.match.params.id}</h3>
                {/* <p>{movieInfo[0].title}</p> */}
                {/* <p>{movieInfo[0].description}</p>
                <p>{movieInfo[0].name}</p> */}

            </div>
        </div>
    )




}

export default connect(mapStoreToProps)(withRouter(MovieDetails));