export const removeItem = (index) => ({
        type: 'DEL_ITEM', index: index
    }
);

export const addItem = (item) => {
    return{
    type: 'ADD_ITEM', item: item
}};

export const addNote = () => ({
        type: 'TOGGLE_IS_ADDING'
    }
);

