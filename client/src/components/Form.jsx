import React from 'react'
import styles from './form.module.css'
import { useContext, useState } from 'react'
import { calculator } from '../utility/computeUtility'

function Form(props) {
  const {
    typeOfUtility,
    units,
    setResOfCalc,
    resOfCalc,
    today,
    setDate,
    lastOperation,
  } = props

  const initPrev = lastOperation ? lastOperation.current : 0
  console.log(initPrev)

  const [currentVal, setCurrentVal] = useState({ value: 0 })
  const [prevVal, setPrevVal] = useState({ value: initPrev })
  const calc = calculator(7.99, typeOfUtility, today)

  // Event listeners
  const computeBtnHandler = (e) => {
    const { cost, diff } = calc.computeCost(currentVal, prevVal.value)
    setResOfCalc({ ...resOfCalc, diff, cost })
  }

  return (
    <div className={styles.formControl}>
      <h3>parameters</h3>
      <form
        className={styles.form}
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <input
            type="number"
            name="current"
            value={Number(currentVal).toString()}
            onChange={(e) => setCurrentVal(+e.target.value)}
          />
          <label htmlFor="current">Current {units.get(typeOfUtility)}</label>
        </div>
        <div>
          <input
            type="number"
            name="previous"
            defaultValue={String(prevVal.value)}
            //value={Number(prevVal).toString()}
            onChange={(e) => setPrevVal(+e.target.value)}
          />
          <label htmlFor="previous">Previous {units.get(typeOfUtility)}</label>
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={today}
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />
          <label htmlFor="date">Date</label>
        </div>
        <div>
          <button onClick={computeBtnHandler}>Compute</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Form
