import React from 'react';
import NoteContainer from "../container/NoteContainer";
import NoteFormContainer from "../container/NoteFormContainer";

export default class List extends React.Component {

    render() {
        return <div>
            <NoteFormContainer/>
            {this.props.mang.map((e, index) => <NoteContainer id={index}
                                                     key={index}>{e}</NoteContainer>)}
        </div>
    }
}

