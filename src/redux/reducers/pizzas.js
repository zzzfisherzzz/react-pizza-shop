const initialState = {
    pizzas: []
};

function pizzasReducer(state = initialState, action) {

    if (action.type === 'ADD_PIZZA') {
        return {
            ...state,
            pizzas: [1]
        };
    }

    return state;
}

export { pizzasReducer };