import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../actions';

class Note extends React.Component {
    removeNote=()=>{
        const {id,dispatch}= this.props;
        dispatch(removeItem(id));
    };

    render() {
        return (<div>
            <p>{this.props.children}</p>
            <button onClick={this.removeNote}>Delete</button>
        </div>);
    }
}

export default connect()(Note);