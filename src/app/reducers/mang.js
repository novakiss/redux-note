const initialState = {
    byID: {},
    listIDs: [],
};

const mangReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const {id, item} = action.payload;
            return {
                ...state,
                byID: {...state.byID,[id]: {id: id, item: item}},
                listIDs: [...state.listIDs, id]
            };
        case 'DEL_ITEM':
            delete state.byID[action.id];
            //const byIDRest=state.byID;
            return {...state,
                byID:{...state.byID},
                listIDs: state.listIDs.filter((e)=>e!==action.id)};
            //state.byID.filter((e, i) => i !== action.id);

        default:
            return state;
    }
};

export default mangReducer;