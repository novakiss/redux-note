import React from 'react';
import {connect} from 'react-redux';
import Note from "./Note";
import NoteForm from "./NoteForm";

class List extends React.Component {

    add = (e) => {
        this.props.mang.push(e);
        this.setState(this.state);
    };

    render() {
        return <div>
            <NoteForm submit={this.add}/>
            {this.props.mang.map((e, index) => <Note id={index}
                                                     key={index}>{e}</Note>)}
        </div>
    }
}

export default connect(function (state) {
    return {mang: state.state.mang}
})(List);