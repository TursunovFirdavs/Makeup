import { Container } from "../../utils";
import Card from "../../utils/card/Card";
import "./cart.scss";
import {  useSelector } from "react-redux";


const Cart = () => {
  const added_products = useSelector(state => state.cart.added_products)
    console.log(added_products);
  
  return (
    <Container>
      <div className="cart__wrapper">

        { Array.isArray(added_products) &&
          added_products?.map(product => {
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

export default Cart