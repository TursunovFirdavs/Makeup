import { combineReducers } from "redux";
import { productReducer } from "./product-reducer";
import { likedReducer } from "./like-reducer";
import { addToCartReducer } from "./add-cart";
import { langReducer } from "./language";

const rootReducer = combineReducers({
    product_data: productReducer,
    liked: likedReducer,
    cart: addToCartReducer,
    language: langReducer
})

export default rootReducer