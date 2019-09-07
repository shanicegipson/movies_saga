import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class EditPage extends Component {

    cancelEdit = (event) => {
        this.props.history.push('/details');
    }
    render() {
        return (
            <div>
                <button onClick={this.cancelEdit}>Cancel</button>
                <button onClick={this.editInfo}>Edit</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(EditPage);