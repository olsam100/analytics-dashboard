import React from 'react'
import styles from './header.module.css'
import { searchIcon, dateIcon, notificationIcon, arrowDownIcon } from 'assets'
import dp from 'assets/images/image.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerwrapper}>
        <div className={styles.headertitle_search}>
          <p className={styles.headertitle}>Dashboard</p>
          <div className={styles.search}>
            <input type='text' placeholder='Search...' />
            <span>{searchIcon}</span>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.date_notification}>
            <div className={styles.date}>
              <div className={styles.datewrapper}>
                <span>{dateIcon}</span>
                <p>November 15, 2023</p>
              </div>
            </div>
            <div className={styles.notificationIcon}>{notificationIcon}</div>
          </div>
          <div className={styles.userprofile}>
            <div className={styles.userdetails}>
              <img src={dp} alt='Justin Bergson' />
              <div className={styles.username_email}>
                <p>Justin Bergson</p>
                <p>Justin@gmail.com</p>
              </div>
            </div>
            <span>{arrowDownIcon}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
