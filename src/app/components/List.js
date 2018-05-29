import React from 'react';
import NoteContainer from "../container/NoteContainer";
import NoteFormContainer from "../container/NoteFormContainer";

export default class List extends React.Component {

    render() {
        return <div>
            <NoteFormContainer/>

            {this.props.mang.listIDs.length>0?this.props.mang.listIDs.map((e, index) => <NoteContainer id={index}
                                                     key={index}>{this.props.mang.byID[e].item}</NoteContainer>):null}
        </div>
    }
}

