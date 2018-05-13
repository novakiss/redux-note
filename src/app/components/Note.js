import React from 'react';


export default class Note extends React.Component {
    removeNote=()=>{
        const {id,remove}= this.props;
        remove(id);
    };

    render() {
        return (<div>
            <p>{this.props.children}</p>
            <button onClick={this.removeNote}>Delete</button>
        </div>);
    }
}

