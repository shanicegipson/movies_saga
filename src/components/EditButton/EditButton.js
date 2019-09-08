import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { withRouter } from 'react-router-dom';


class EditButton extends Component {

toEditPage = (event) => {
    this.props.history.push("/edit");
}

    render() {
        return (
            <div>
                <button onClick={this.toEditPage}>Edit</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(withRouter(EditButton));



