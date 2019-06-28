import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS';

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

export const getProducts = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
        .then(res => {
            dispatch(handleGetProducts(res.data))
        })
        .catch(error => {
            throw(error);
        })
    }
}