import React, { useState } from 'react'
import './navbar.scss'
import { Container } from '../../utils'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
    const {i18n} = useTranslation()
    console.log(i18n);
    const dispatch = useDispatch()

  const changed_language = useSelector(state => state.language.lang)
  console.log(changed_language);


const handleChangePrice = (e) => {
    i18n.changeLanguage(e.target.value)
    dispatch({type: 'SELECTED_LANGUAGE', lang: e.target.value})
}
    
  return (
    <div className='nav-wrapper'>
        <Container>
            <nav>
                <Link className='title' to='/'><h1>MAKEUP</h1></Link>
                <form className='nav_form'>
                    <input type="text" placeholder='What we can help you find ?'/>
                    <IoSearch/>
                </form>
                <ul className='nav_menu'>
                    <li>
                        <Link to='/liked' className='nav_link'><FiHeart className='nav_icons'/></Link>
                    </li>
                    <li>
                        <Link to='/cart' className='nav_link'><BsHandbag className='nav_icons'/></Link>
                    </li>
                    <li>
                        <GrLanguage/>
                        <select defaultValue={changed_language} onChange={handleChangePrice}>
                            <option disabled>Volyuta</option>
                            <option value="$">USA</option>
                            <option value="sum">SUM</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </Container>
    </div>
  )
}

export default Navbar