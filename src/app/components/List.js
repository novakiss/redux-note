import React from 'react';
import Note from "./Note";
import NoteForm from "./NoteForm";

export default class List extends React.Component {
    state = {
        mang: ['Androi', 'ioS', 'NodeJs'],
        click:false
    };

    remove=(index)=> {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    };

    add = (e) => {
        this.state.mang.push(e);
        this.setState(this.state);
    };

    render() {
        return <div>
            <NoteForm submit={this.add}/>
            {this.state.mang.map((e, index) => <Note handleRemove={this.remove} id={index}
                                                     key={index}>{e}</Note>)}
        </div>
    }
}