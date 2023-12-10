import { Container } from "../../utils";
import Card from "../../utils/card/Card";
import "./like.scss";
import {  useSelector } from "react-redux";


const Like = () => {
  const liked_products = useSelector(state => state.liked.liked_products)
    console.log(liked_products);
  
  return (
    <Container>
      <div className="liked__wrapper">

        { Array.isArray(liked_products) &&
          liked_products?.map(product => {
            return (
              <Card
                key={product.id}
                id={product.id}
                img={product.image_link}
                title={product.name}
                des={product.description}
                price={product.price}
                product={product}
              />
            )
          })
        }
      </div>
    </Container>
  )
}

export default Like