import axios from '../../api'

const load_product = (products) => {
    return {
        type: 'LOAD_PRODUCTS',
        payload: {
            products
        }
    }
}

const loadProducts = (URL) => async dispatch => {
    try {
        const response = await axios(URL);
        dispatch(load_product(response))
    }
    catch(error) {
        console.log(error);
    }
} 

export { loadProducts }