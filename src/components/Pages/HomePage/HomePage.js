import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieList from '../../MovieList/MovieList';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class HomePage extends Component {
    render () {
        return (
            <div>
                <MovieList />
            </div>
        )
    }
}

export default connect(mapStoreToProps)(HomePage);