import React, { useContext, useState } from 'react'
import { AppContext } from './GlobalContext';
import ProductCard from './ProductCard';
import NetworkController from './NetworkController';
import styles from "./Cart.module.scss"

function Cart() {



    const { cart: a } = useContext(AppContext);

    const [cart, setCart] = a;

    const [cartData, setCartData] = useState({})


    const [successfullySentOrder, setSuccessFullySentOrder] = useState(false)


    const handleCartDataChange = (val, field) => {
        setCartData({ ...cartData, [field]: val })
    }

    const postOrder = () => {

        const productIds = cart.map(product => product.id)

        NetworkController.postOrder({
            ...cartData,
            productIds: productIds
        }).then(() => setSuccessFullySentOrder(true))
    }

    if(cart?.length == 0) {
        return <div className={styles.emptyCartContainer}>Vasa korpa je prazna</div>;
    }

    if (successfullySentOrder) {
        return <div className={styles.emptyCartContainer}>Narudzbina uspesno poslata!</div>;
    }

    return (
        <div className={styles.cartContainer}>
            <h1>Vasa korpa</h1>
            <div className={styles.itemWrap}>
                { cart.map(product => <ProductCard isInCart={true} product={product}>{product.title}</ProductCard>) }
            </div>
            <div className={styles.formContainer}>
                <h2>Unesite vase podatke</h2>
                <input className={styles.cartInput} placeholder='Ime' value={cartData.firstName} onChange={(e) => { handleCartDataChange(e.target.value, "firstName") }}  required/>
                <input className={styles.cartInput} placeholder='Prezime' value={cartData.lastName} onChange={(e) => { handleCartDataChange(e.target.value, "lastName") }} required/>
                <input className={styles.cartInput} placeholder='Telefon' value={cartData.phone} onChange={(e) => { handleCartDataChange(e.target.value, "phone") }} required/>
                <input className={styles.cartInput} placeholder='Email' value={cartData.email} onChange={(e) => { handleCartDataChange(e.target.value, "email") }} required/>
                <input className={styles.cartInput} placeholder='Adresa' value={cartData.address} onChange={(e) => { handleCartDataChange(e.target.value, "address") }} required/>
                <input className={styles.cartInput} placeholder='Grad' value={cartData.city} onChange={(e) => { handleCartDataChange(e.target.value, "city") }} required/>

                <button className={styles.cartButton} onClick={() => postOrder()}>NARUCI</button>
            </div>
            
            
        </div>
    );
}

export default Cart