const mangReducer = (state =  ['Androi', 'ioS', 'NodeJS'], action) =>{
    switch (action.type) {
        case 'ADD_ITEM':
            console.log(action.item);
            return [...state, action.item];
        case 'DEL_ITEM':
            return state.filter((e, i) => i !== action.index);
        default:
            return state;
    }
};

export default mangReducer;