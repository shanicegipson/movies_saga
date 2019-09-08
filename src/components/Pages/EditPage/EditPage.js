import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class EditPage extends Component {
    state = {
        newInfo: {
            title: '',
            description: ''
        }
    }
        

    cancelEdit = (event) => {
        this.props.history.push('/details/:id');
    }

    editInfo(event, movieKey) {
        console.log('event happened')
        this.setState({
            newInfo: {
                ...this.state.newInfo,
                [movieKey]: event.target.value,
            }
        });
    }


    render() {
        return (
            <div>
                <div>
                    <button onClick={this.cancelEdit}>Cancel</button>
                    <button onClick={this.editInfo}>Save</button>
                </div>
                <div>
                     <input type='text' value={this.state.newInfo.title} onChange={(event) => this.editInfo(event, 'title')} placeholder="Enter title"/>
                     <textarea type='text' value={this.state.newInfo.description} onChange={(event) => this.editInfo(event, 'description')} placeholder="Enter description"/>
                </div>
                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(EditPage);