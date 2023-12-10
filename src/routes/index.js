import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Categories from '../pages/categories/Categories'
import SingleProduct from '../pages/single/SingleProduct'
import Like from '../pages/like/Like'
import Cart from '../pages/cart/Cart'

const index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:name' element={<Categories/>} />
        <Route path='/title/:id' element={<SingleProduct/>}/>
        <Route path='liked' element={<Like/>}/>
        <Route path='cart' element={<Cart/>} />
    </Routes>
  )
}

export default index