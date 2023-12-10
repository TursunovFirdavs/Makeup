import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { loadProducts } from '../../redux/actions/products-actions'
import { useParams } from 'react-router-dom';
import './singleProduct.scss'
import { Container } from '../../utils';
import { useTranslation } from 'react-i18next';




const SingleProduct = (props) => {
  const [color, setColor] = useState()
  const [allColors, setAllColors] = useState([])
  const {t} = useTranslation()

  console.log(allColors);

  const { id } = useParams()
  // console.log(id);
  const data = useSelector(state => state.product_data)
  console.log(data);

  const dataResult = []
  
  dataResult.push(data.products.data)
  console.log(dataResult);

  useEffect(() => {
    props.loadProducts(`/products/${id}`)
  }, [])
  return (
    <div>
      <Container>
        {
          dataResult?.map(el => {
            // setAllColors(el?.product_colors)
            return (
            <div onClick={() => setAllColors(el?.product_colors)} className="wrapper">
              <div className="img_wrapper">
                <img src={el?.image_link} alt="" />
              </div>
              <div className="info">
                <div className="content">
                  <h2>{el?.name}</h2>
                  <p>{el?.description}</p>
                  <strong>Price: {t("price.currency") === "$" ? `$${el.price}` : `${(el.price * 12322)} som`}</strong><tr></tr>
                  <span>Product type: {el?.product_type}</span>
                </div>
                <div className="colors">

                  {
                    el?.product_colors?.slice(0, 8).map((color, i) => {
                      return (
                        <div onClick={() => setColor(i)} style={{ backgroundColor: `${color.hex_value}` }} className="frst"></div>
                      )
                    }
                    )
                  }
                </div>
                <div style={{ backgroundColor: `${allColors.length > 0 ? allColors[color].hex_value : '#ce9a68'}` }} className="current-color"></div>
              </div>
            </div>
          )})
        }
      </Container>
    </div>
  )
}

export default connect(null, { loadProducts })(SingleProduct)