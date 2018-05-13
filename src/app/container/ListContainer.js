import React from 'react';
import {connect} from 'react-redux';

import List from '../components/List';

export const ListContainer= ({mang})=>{
    return (<List mang={mang}/>)
};

const mapStateToProps= (state)=>{
    const {mang} = state.state;
    return {mang};
};

export default connect(mapStateToProps)(ListContainer);

