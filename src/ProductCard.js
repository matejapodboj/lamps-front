import React, { useContext } from 'react'
import styles from "./ProductCard.module.scss"
import { Link } from 'react-router-dom'
import { AppContext } from './GlobalContext';

function ProductCard({ product, isInCart }) {


  const { cart: a } = useContext(AppContext);

  const [cart, setCart] = a;


  const addItemToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = () => {
    const newArray = cart.filter(productItem => productItem.id != product.id)
    setCart(newArray)
  }

  const checkIfIsInCart = cart.find(item => item.id == product.id)

  return (
    <div className={styles.productCardWrap}>
      <img src={`http://localhost:8000/${product.image}`} alt={product.title} />
      <b>{product.title}</b>
      <div>{product.shortDescription}</div>
      <div>RSD {product.price}.00</div>
      {true && <>
        <button onClick={() => {
          

          if (!!checkIfIsInCart) {
            removeFromCart(product)
          } else {
            addItemToCart(product)
          }
          
          }}>{!checkIfIsInCart ? "Dodaj u korpu" : "Izbaci iz korpe"}</button>
        <Link to={`/products/${product.id}`} >Više informacija</Link>
      </>}
    </div>
  )
}

export default ProductCard
