import {GET_PRODUCTS, TOGGLE_DETAILS, UPDATE_PAGE} from '../actions/actionCreators';

const initialState = {
    products: [],
    showDetails: false,
    page: 1
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.products}
        case TOGGLE_DETAILS:
            let newState = !state.showDetails;
            return {...state, showDetails: newState}
        case UPDATE_PAGE:
            return {...state, page: action.page}
        default:
            return state;
    }
}