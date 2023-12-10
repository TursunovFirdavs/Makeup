import React from 'react'
import { NavLink } from 'react-router-dom';
import './categoryLinks.scss'
import { Container } from '../../utils';


const CategoryLinks = () => {
    return (
        <div className='category_links-wrapper'>
            <Container>
                <marquee behavior="slide" direction="scroll" >
                    <ul className='category_links'>
                        <li>
                            <NavLink to="/category/blush" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>blush</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/bronzer" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>bronzer</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/eyebrow" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>eyebrow</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/eyeliner" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>eyeliner</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/eyeshadow" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>eyeshadow</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/foundation" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>foundation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/lip_liner" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>lip liner</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/lipstick" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>lipstick</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/mascara" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>mascara</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/nail_polish" className={({isActive}) => isActive ? 'cat-link cat-active-link' : 'cat-link'}>nail polish</NavLink>
                        </li>
                    </ul>
                </marquee>
            </Container>
        </div>
    )
}

export default CategoryLinks