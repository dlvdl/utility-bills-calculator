import React from 'react'
import styles from './result.module.css'

export default function Result({ resOfCalc }) {
  return (
    <div className={styles.control}>
      <h3>Result</h3>
      <div>
        <p>To pay:</p>
        <p>{resOfCalc.cost} UAH</p>
      </div>
      <div>
        <p>Paid last month:</p>
        <p>{resOfCalc.costLastMontn} UAH</p>
      </div>
      <div>
        <p>Difference:</p>
        <p>{resOfCalc.diff} kwt</p>
      </div>
      <div>
        <p>Difference in last month:</p>
        <p>{resOfCalc.diffLastMonth} kwt</p>
      </div>
    </div>
  )
}
