import React from 'react';
import {connect} from 'react-redux';
import {addNote,addItem} from '../actions';

class NoteForm extends React.Component {
    state = {
        text: '',
    };

    handleChange = (e) => {
        this.setState({text: e.target.value})
    };

    handleClick = (e) => {
        e.preventDefault();//chong viec refresh trang web
        const {dispatch} = this.props;
        if (this.state.text !== '') {
            dispatch(addItem(this.state.text));
            dispatch(addNote());
            this.setState({text: ''});
        }else{
            dispatch(addNote());
        }


    };

    addNote = () => {
        const {dispatch} = this.props;
        dispatch(addNote());
    };

    render() {
        if (this.props.isChecked) {
            return (<form onSubmit={this.handleClick}>
                <input onChange={this.handleChange} value={this.state.text} type="text"
                       placeholder="Enter your Text"/><br/>
                <button>Add</button>
            </form>)
        }
        return <button onClick={this.addNote}>Add</button>
    }
}

export default connect(function (state) {
    return {isChecked: state.state.isChecked}
})(NoteForm)