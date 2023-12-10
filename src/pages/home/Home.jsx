import React from 'react'
import Navbar from '../../layout/nav/Navbar'
import CategoryLinks from '../../components/categoryLinks/CategoryLinks'
import Hero from '../../components/hero/Hero'

const Home = () => {
  return (
    <div>
        <CategoryLinks/>
        <Hero/>
    </div>
  )
}

export default Home