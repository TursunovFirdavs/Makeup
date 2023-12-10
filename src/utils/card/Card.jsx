import React from 'react'
import './card.scss'
// import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';




const Card = ({ img, title, des, price, id, product }) => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const like_products = useSelector((state) => state.liked.liked_products);
    const added_products = useSelector((state) => state.cart.added_products);


    function handleLikeProduct(product) {
        dispatch({ type: 'LIKE_PRODUCT', product });
    }

    function handleDislikeProduct(product) {
        dispatch({ type: 'DISLIKE_PRODUCT', product });
    }

    function handleAddToCart(product) {
        dispatch({ type: 'ADD_CART', product });
    }

    function handleRemoveFromCart(product) {
        dispatch({ type: 'REMOVE_CART', product });
    }
    return (
        <div className='card'>
            <Link to={`/title/${id}`}>
                <div className="img_wrapper">
                    <img src={img} alt="" />
                </div>
            </Link>
            <div className="product-info">
                <h3 title={title}>{title?.length > 27 ? title.slice(0, 27) + '...' : title}</h3>
                <p>{des?.length > 90 ? des.slice(0, 90) + '...' : des}</p>
                <span>{t("price.currency") === "$" ? `$${price}` : `${(price * 12322)} som`}</span>
                <div className="save-to">   
                    <ul className="card__top-icons">
                        {added_products.findIndex((added) => added.id === id) !== -1 ?
                            (
                                <button
                                    className="add-cart"
                                    onClick={() => handleRemoveFromCart(product)}
                                >Remove from cart</button>
                            ) : (
                                <button
                                    className="remove-cart"
                                    onClick={() => handleAddToCart(product)}
                                >Add to cart</button>
                            )}
                    </ul>
                    <ul className="card__top-icons">
                        {like_products.findIndex((likeproduct) => likeproduct.id === id) !== -1 ?
                            (
                                <AiFillHeart
                                    className="icon__heart--fill"
                                    onClick={() => handleDislikeProduct(product)}
                                />
                            ) : (
                                <AiOutlineHeart
                                    className="icon__heart"
                                    onClick={() => handleLikeProduct(product)}
                                />
                            )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card