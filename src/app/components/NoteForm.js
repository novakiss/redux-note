import React from 'react';


export default class NoteForm extends React.Component {
    state = {
        text: '',
    };

    handleChange = (e) => {
        this.setState({text: e.target.value})
    };

    handleClick = (e) => {
        e.preventDefault();//chong viec refresh trang web
        const {addItem,addNote} = this.props;
        if (this.state.text !== '') {
            addItem(this.state.text);
            addNote();
            this.setState({text: ''});
        }else{
            addNote();
        }


    };

    addNote = () => {
        const {addNote}=this.props;
       addNote();
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
