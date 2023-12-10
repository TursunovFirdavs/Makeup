const initialState = {
    products: [],
    isLoading: true
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_PRODUCTS':
            return {
                products: action.payload.products,
                isLoading: false
            }
        default: 
            return state
    }
}

export { productReducer }