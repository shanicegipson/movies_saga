import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, 
        CardContent, 
        CardActionArea, 
        CardActions, 
        CardMedia, 
        Typography } from '@material-ui/core';

import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../modules/mapStoreToProps';


class MovieCard extends Component {

    seeDetails = (event) => {
        // this.props.history.push("/movie/"+this.props.move.id);

    }
    render() {
        console.log('in the movie card what is this', this.props)
        return(
           
            <Card className="card">
            <CardActionArea>
                <CardContent color='secondary'>
                    <Typography>
                        {this.props.movie.title} 
                    </Typography>
                </CardContent>
                <CardActions>
                        
                </CardActions>
            </CardActionArea>
        </Card>

        )
    }
}

export default connect(mapStoreToProps) (withRouter(MovieCard));