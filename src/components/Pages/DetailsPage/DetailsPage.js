import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import { withRouter } from 'react-router-dom';

class DetailsPage extends Component {
    
 backToHome = (event) => {
     this.props.history.push("/");
 }
    
    render() {
        
        return (
            <div>
                <button onClick={this.backToHome}>Back to Home</button>
            </div>
        )
    }
} 

export default connect(mapStoreToProps)(withRouter(DetailsPage));