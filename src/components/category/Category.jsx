import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { loadProducts } from '../../redux/actions/products-actions'
import { useParams } from 'react-router-dom';
import Card from '../../utils/card/Card';
import { Container } from '../../utils'
import Loading from '../../utils/loading/Loading'
import './category.scss'
import { useTranslation } from "react-i18next";


const Category = (props) => {
  const { name } = useParams()
  const data = useSelector(state => state.product_data)
  console.log(data.products.data);

  useEffect(() => {
    props.loadProducts(`/products.json?product_type=${name}`)
  }, [])

  const { t } = useTranslation();


  return data.isLoading ? <Loading/> : (
    <Container>
      <div className='category'>
        { Array.isArray(data.products.data) &&
          data.products.data?.map(data =>{
            const price = data.price
            return (
              <Card
              key={data.id}
              product={data}
              id={data.id}
              img={data.image_link}
              title={data.name}
              des={data.description}
              price={data.price}
            />
            )
          }
           
          )
        }
      </div>
    </Container>
  )
}

export default connect(null, { loadProducts })(Category)