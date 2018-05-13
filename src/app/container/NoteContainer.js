import {connect} from 'react-redux';

import {
    removeItem
} from '../actions';

import Note from '../components/Note';

const mapDispatchToProps={
  remove: removeItem
};

export default connect(null, mapDispatchToProps)(Note);
