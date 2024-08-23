import React from 'react';
import { Link } from 'react-router-dom'
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles['footer-columns']}>
            <div className={styles['footer-col']}>
                <p>BLOK45, NOVI BEOGRAD</p>
            </div>
            <div className={styles['footer-col']}>
                <p>MAMAJARO@GMAIL.COM</p>
            </div>
            <div className={styles['footer-col']}>
            <Link to="/return-policy" className={styles.link}>POVRAT NOVCA</Link>
            <Link to="/terms-and-conditions" className={styles.link}>USLOVI KORISCENJA</Link>
            <Link to="/delivery" className={styles.link}>ISPORUKA</Link>
                <p></p>
            </div>
            <div className={styles['footer-col']}>
                <a href="#"><img src="http://localhost:8000/instagram_icon.png" alt="Instagram" /></a>
                <a href="#"><img src="http://localhost:8000/pinterest_icon.png" alt="Pinterest" /></a>
                <a href="#"><img src="http://localhost:8000/tiktok_icon.png" alt="TikTok" /></a>
            </div>
        </div>
        <p className={styles.copyright}>COPYRIGHT© 2023 MAMAJARO DESIGN SVA PRAVA ZADRŽANA.</p>
    </footer>
  );
}

export default Footer;
