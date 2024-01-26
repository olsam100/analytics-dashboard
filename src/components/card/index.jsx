import React from 'react'
import styles from './card.module.css'

const Card = ({ children }) => {
  return <div className={styles.cardcontainer}>{children}</div>
}

Card.Icon = ({ children }) => {
  return <div className={styles.cardIcon}>{children}</div>
}

Card.GraphLine = ({ children }) => {
  return <div>{children}</div>
}

Card.Title = ({ children }) => {
  return <p className={styles.cardTitle}>{children}</p>
}

Card.Amount = ({ children }) => {
  return <p className={styles.cardAmount}>{children}</p>
}
Card.Percentage = ({ children }) => {
  return <div className={styles.cardPercent}>{children}</div>
}

Card.Period = ({ children }) => {
  return <p className={styles.cardPeriod}>{children}</p>
}

export default Card
