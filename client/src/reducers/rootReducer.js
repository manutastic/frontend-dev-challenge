import {GET_PRODUCTS, TOGGLE_DETAILS, UPDATE_PAGE, TOGGLE_LOADING} from '../actions/actionCreators';

const initialState = {
    products: [],
    showDetails: false,
    page: 1,
    isLoading: false
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.products}
        case TOGGLE_DETAILS:
            let newDetails = !state.showDetails;
            return {...state, showDetails: newDetails}
        case TOGGLE_LOADING:
            let newLoading = !state.isLoading;
            console.log(state.isLoading);
            return {...state, isLoading: newLoading}
        case UPDATE_PAGE:
            return {...state, page: action.page}
        default:
            return state;
    }
}