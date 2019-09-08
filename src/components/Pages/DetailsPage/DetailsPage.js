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

        return movie.id === props.match.params.id

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
                {/* <p>{movieInfo[0].title}</p>
                <p>{movieInfo[0].description}</p>
                <p>{movieInfo[0].name}</p> */}

            </div>
        </div>
    )




}

// class DetailsPage extends Component {
    
//  backToHome = (event) => {
//      this.props.history.push("/");
//  }

//  toEditPage = (event) => {
//     this.props.history.push("/edit");
// }


//     render() {
//         return (
//         <div>
//            <button onClick={this.backToHome}>Back to Home</button>
//             <button onClick={this.toEditPage}>Edit</button>
//          </div>
//         )

        
//     }
// } 

export default connect(mapStoreToProps)(withRouter(MovieDetails));