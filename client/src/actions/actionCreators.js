import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
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

export const toggleLoading = () => {
    return {
        type: TOGGLE_LOADING
    }
}

export const updatePage = (page, numPerPage) => {
    return (dispatch) => {
        dispatch( {
            type: UPDATE_PAGE,
            page
        });
        dispatch(getProducts(page, numPerPage))
    };
}

export const getProducts = (page, numPerPage) => {
    return (dispatch) => {
        dispatch(toggleLoading());
        return axios.get(apiUrl+'?page='+ page + '&numPerPage=' + numPerPage)
        .then(res => {
            dispatch(handleGetProducts(res.data))
        })
        .then ( () => {
            dispatch(toggleLoading());
        })
        .catch(error => {
            throw(error);
        })
    }
}