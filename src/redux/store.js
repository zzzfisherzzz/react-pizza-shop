import { createStore, combineReducers } from 'redux'
import { pizzasReducer } from './reducers/pizzas';
import { cartReducer } from './reducers/cart';

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    cart: cartReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
