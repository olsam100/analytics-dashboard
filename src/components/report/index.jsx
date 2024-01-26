import React from 'react'
import styles from './report.module.css'

const Report = ({ children }) => {
  return <div className={styles.reportItems}>{children}</div>
}

Report.Name = ({ children }) => {
  return <p className={styles.reportName}>{children}</p>
}

Report.Progress = ({ children, className }) => {
  return (
    <div className={styles.reportProgress}>
      <div className={className}>{children}</div>
    </div>
  )
}

Report.Amount = ({ children }) => {
  return <div className={styles.reportAmount}>{children}</div>
}

export default Report
