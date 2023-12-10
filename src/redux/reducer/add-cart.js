const initialState = {
    added_products: []
};

const addToCartReducer = (state = initialState, action) => {
    let product_index;
    switch (action.type) {
        case 'ADD_CART':
            product_index = state.added_products.findIndex((product) => product.id === action.product.id)
            let newAdded = state.added_products;
            if (product_index === -1) {
                newAdded = [...state.added_products, action.product];
            }
            return {
                added_products: newAdded,
            };
        case 'REMOVE_CART':
            product_index = state.added_products.findIndex((product) => product.id === action.product.id)
            let removeditem = state.added_products.filter((_, index) => index !== product_index);
            return {
              added_products: removeditem
            }
        default:
            return state;
    }
};

export {addToCartReducer}