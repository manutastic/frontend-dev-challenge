import {GET_PRODUCTS, TOGGLE_DETAILS} from '../actions/actionCreators';

const initialState = {
    products: [],
    showDetails: false
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.products}
        case TOGGLE_DETAILS:
            let newState = !state.showDetails;
            return {...state, showDetails: newState}
        default:
            return state;
    }
}