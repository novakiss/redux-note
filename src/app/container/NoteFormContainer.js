import {connect} from 'react-redux';
import {addNote,addItem} from '../actions';
import NoteFrom from '../components/NoteForm';

const mapStatetoProps= (state)=>{
  const {isChecked,mang}= state.state;
  return {isChecked,mang};
};

const mapDispatchToProps={
  addItem: addItem,
  addNote:addNote
};

export default connect(mapStatetoProps,mapDispatchToProps)(NoteFrom);