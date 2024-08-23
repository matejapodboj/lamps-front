import React, { useContext, useEffect, useState } from "react";
import styles from "./Product.module.scss";
import NetworkController from "./NetworkController";
import { useParams } from "react-router";
import { AppContext } from "./GlobalContext";
import ProductCard from "./ProductCard";

function Product() {
  const params = useParams();
  const [productData, setProductData] = useState(null)


  const { cart: a, products: b } = useContext(AppContext);

  const [cart, setCart] = a;
  const [products, setProducts] = b


  useEffect(() => {
    const fetchData = async () => {
      const res = await NetworkController.getProducts();
      setProducts(res);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (params?.id) {
      NetworkController.getProductsByID(params?.id).then((res) => {
        setProductData(res);
      }).then(res => console.log(res));
    }
  }, [params]);


  const addItemToCart = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  const removeFromCart = () => {
    const newArray = cart.filter(product => product.id != productData.id)
    console.log(newArray)
    setCart(newArray)
  }

  const checkIfIsInCart = cart.find(item => item.id == productData?.id)

  return (
    <>
      <div className={styles.avatar}>
        <div className={styles.imageContainer}>
          <img src={`http://localhost:8000/${productData?.image}`} alt={productData?.title} />
        </div>

        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{productData?.title}</h1>
          <div className={styles.shortDescription}>{productData?.shortDescription}</div>
          <div className={styles.longDescription}>{productData?.longDescription}</div>
          <div className={styles.price}>RSD {productData?.price}.00</div>
          <div className={styles.dimensions}>
            <div className="width">
              <span className="label">Širina</span>
              <span className="value">{productData?.width} cm</span>
            </div>
            <div className="height">
              <span className="label">Visina</span>
              <span className="value">{productData?.height} cm</span>
            </div>
          </div>
          <button onClick={() => {

            if (!!checkIfIsInCart) {
              removeFromCart(productData)
            } else {
              addItemToCart(productData)
            }
          }} className={styles.addToCartButton}>{!checkIfIsInCart ? "Dodaj u korpu" : "Izbaci iz korpe"}</button>
        </div>
      </div>
    </>
  );
}

export default Product;
