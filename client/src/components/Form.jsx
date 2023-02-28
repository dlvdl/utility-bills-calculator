import React from 'react'
import styles from './form.module.css'
import { useContext, useState } from 'react'
import { calculator } from '../utility/computeUtility'

function Form(props) {
  const { kindOfUtilty, units, setResOfCalc, resOfCalc, today } = props
  const [date, setDate] = useState(today.toISOString().slice(0, 10))
  const [currentVal, setCurrentVal] = useState({ value: 0 })
  const [prevVal, setPrevVal] = useState({ value: 0 })
  const calc = calculator(7.99, kindOfUtilty, today)

  // Event listeners
  const computeBtnHandler = (e) => {
    const result = calc.computeCost(currentVal, prevVal)
    console.log(result)
    const { cost, diff } = result
    console.log(result)
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
          <label htmlFor="current">Current {units.get(kindOfUtilty)}</label>
        </div>
        <div>
          <input
            type="number"
            name="previous"
            value={Number(prevVal).toString()}
            onChange={(e) => setPrevVal(+e.target.value)}
          />
          <label htmlFor="previous">Previous {units.get(kindOfUtilty)}</label>
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={date}
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
