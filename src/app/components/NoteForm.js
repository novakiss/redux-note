import React from 'react';

export default class NoteForm extends React.Component {
    state = {
        text: '',
        clicked:false
    };

    handleChange = (e) => {
        this.setState({text: e.target.value})
    };

    handleClick = (e) => {
        e.preventDefault();//chong viec refresh trang web
        const {submit} = this.props;
        if (this.state.text !== '') {
            submit(this.state.text);
        }
        this.setState({text: '',clicked:false});
    };

    addNote=()=>{
        this.setState({clicked:true});
    };

    render() {
        if(this.state.clicked)
        return (<form onSubmit={this.handleClick}>
            <input onChange={this.handleChange} value={this.state.text} type="text" placeholder="Enter your Text"/><br/>
            <button>Add</button>
        </form>);
        return<button onClick={this.addNote}>Add</button>
    }
}