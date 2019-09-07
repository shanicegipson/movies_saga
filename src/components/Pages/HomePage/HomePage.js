import React, { component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import MovieList from '../../MovieList/MovieList';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class HomePage extends component {
    render () {
        return (
            <div>
                <MovieList />
            </div>
        )
    }
}

export default connect(mapStoreToProps)(HomePage);