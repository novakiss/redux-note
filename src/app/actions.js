export const removeItem = (id) => ({
        type: 'DEL_ITEM', id
    }
);

export const addItem = (id,item) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            id:id,
            item:item}
    }
};

export const addNote = () => ({
        type: 'TOGGLE_IS_ADDING'
    }
);

