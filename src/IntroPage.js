import React from 'react'
import { Link } from 'react-router-dom'
import styles from './IntroPage.module.scss'

function IntroPage() {
  return (
    <div className={styles['intro-page']}>
        <div className={styles['explore-section']}>
          <div className={styles['intro-text']}>
                  <p>Otkrijte svet jedinstvenih ručno izrađenih lampi koje će osvetliti vaš prostor posebnim sjajem.</p>
          </div>
          <Link className={styles.link} to="/products"><button>ISTRAŽI</button></Link>
        </div>
            
    </div>
  )
}

export default IntroPage