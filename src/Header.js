import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./Header.module.scss"
import classNames from 'classnames';
import CartIcon from './CartIcon';


function Header() {

  const location = useLocation()


  return (
    <div className={styles.headerWrap}>
      <Link to="/"><img className={styles.logo} src={`http://localhost:8000/logo.png`} alt="Logo"></img></Link>
      <Link to="/" className={classNames(styles.link, {
        [styles.active]: location?.pathname == "/"
      })}>POČETNA</Link>
      <Link to="/products" className={classNames(styles.link, {
        [styles.active]: location?.pathname?.includes("products")
      })}>PRODAVNICA</Link>
      <Link to="/about" className={classNames(styles.link, {
        [styles.active]: location?.pathname?.includes("about")
      })}>O NAMA</Link>
      <Link to="/contact" className={classNames(styles.link, {
        [styles.active]: location?.pathname?.includes("contact")
      })}>KONTAKT</Link>
      <Link to="/faq" className={classNames(styles.link, {
        [styles.active]: location?.pathname?.includes("faq")
      })}>FAQ</Link>
      <Link to="/cart" className={classNames(styles.link, {
        [styles.active]: location?.pathname?.includes("cart")
      })}><CartIcon className={styles.cartIcon} /></Link>
    </div>
  )
}

export default Header;