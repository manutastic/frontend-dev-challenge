import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS';
export const UPDATE_PAGE = 'UPDATE_PAGE'

const apiUrl = 'http://localhost:4000/phones'

export const handleGetProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
};

export const toggleDetails = () => {
    return (dispatch) => {
         dispatch({type: TOGGLE_DETAILS});
    }
}

export const updatePage = (page) => {
    return (dispatch) => {
        dispatch( {
            type: UPDATE_PAGE,
            page
        })
    }
}

export const getProducts = (page) => {
    return (dispatch) => {
        return axios.get(apiUrl+'?page='+page)
        .then(res => {
            dispatch(handleGetProducts(res.data))
        })
        .catch(error => {
            throw(error);
        })
    }
}