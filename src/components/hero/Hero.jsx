import { useEffect } from 'react'
import './hero.scss'
import { connect, useSelector } from 'react-redux'
import { loadProducts } from '../../redux/actions/products-actions'
import { FiHeart } from "react-icons/fi";


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Container } from '../../utils';
import Loading from '../../utils/loading/Loading';
import Card from '../../utils/card/Card';

const Hero = (props) => {
    const data = useSelector(state => state.product_data)
    console.log(data.products.data);


    useEffect(() => {
        props.loadProducts('/products.json?product_type=foundation')
    }, [])

    
    return data.isLoading ? <Loading/> : (
        <div className='hero'>
            <Container>
                <div className="swiper_wrapper">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        // pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Autoplay, Keyboard]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                    >

                        {   Array.isArray(data.products.data) &&
                            data.products.data?.slice(15, 30).map(perfume => {
                                return (
                                    <SwiperSlide key={perfume.id}>
                                        <Card
                                            img={perfume.image_link}
                                            title={perfume.title}
                                            des={perfume.description}
                                            price={perfume.price}
                                            id={perfume.id}
                                            product={perfume}
                                        />
                                    </SwiperSlide>
                                )
                            }
                            )
                        }
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default connect(null, { loadProducts })(Hero)