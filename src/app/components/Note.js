import React from 'react';
import {list} from './List';

export default class Note extends React.Component {
    removeNote=()=>{
        const {index,handleRemove}= this.props;
        handleRemove(index);
    };

    render() {
        return (<div>
            <p>{this.props.children}</p>
            <button onClick={this.removeNote}>Delete</button>
        </div>);
    }
}