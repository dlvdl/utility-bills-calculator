import React from 'react'
import styles from './form.module.css'
import { useState, useEffect } from 'react'
import { computeCost, saveRecord } from '../../utility/computeCost'
import { useOperationsContext } from '../../context/operations_context'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button } from '@mui/material'
import { changeMonth } from '../../utility/changeMonth'
import { TariffSelect } from '../index'

function Form(props) {
  const { createOneOperation, create_one_operation_error } =
    useOperationsContext()
  const { typeOfUtility, units, today, setDate, serverUrl, setServerUrl } =
    props
  const [inputValue, setInputValue] = useState({
    current: 0,
    previous: 0,
    tariff: 0,
  })
  const [result, setResult] = useState({ res: 0, diff: 0 })
  const [computed, setCompute] = useState(false)
  const [saved, setSaved] = useState(false)

  // This useEffect hook triggers when we change the value in the input
  useEffect(() => {
    // Create istance of utility calculator
    const { value } = computeCost(
      inputValue.tariff,
      inputValue.previous,
      inputValue.current
    )

    // Cheking whether difference greater than zero
    if (value.difference >= 0 && value.cost > 0) {
      setResult({ ...result, res: value.cost, diff: value.difference })
      setCompute(true)
      return
    }

    setResult({ res: 0, diff: 0 })
    setCompute(false)
  }, [inputValue])

  // Event listeners
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!computed) return

    const params = {
      tariff: inputValue.tariff,
      previousReadings: inputValue.previous,
      currentReadings: inputValue.current,
      date: new Date(today),
      service: typeOfUtility,
      paid: true,
    }

    const { value } = saveRecord(params)
    createOneOperation(value)

    setSaved(true)
    setTimeout(() => {
      setSaved(false)
    }, 3000)

    setInputValue({ ...inputValue, current: 0, previous: 0 })
  }

  const changeDateHandler = (e) => {
    // Action is a dataset of svg icon of the button
    const action = e.target.children[0].dataset.testid
    if (!action) return
    const newDate = changeMonth(new Date(today), action)
    setDate(newDate)
  }

  const onChangeInputHandler = (e) => {
    if (e.target.name === 'current') {
      setInputValue({ ...inputValue, current: Number(e.target.value) })
    }

    if (e.target.name === 'previous') {
      setInputValue({ ...inputValue, previous: Number(e.target.value) })
    }
  }

  const onSelectTariffHandler = (cost) => {
    setInputValue({ ...inputValue, tariff: cost })
  }

  return (
    <div className={styles.formControl}>
      <div className="flex f-justify-content-center">
        <Button onClick={changeDateHandler}>
          <ArrowBackIosIcon
            sx={{ pointerEvents: 'none', cursor: 'not-allowed' }}
          />
        </Button>
        <h3>
          {new Date(today).toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h3>
        <Button onClick={changeDateHandler}>
          <ArrowForwardIosIcon
            sx={{ pointerEvents: 'none', cursor: 'not-allowed' }}
          />
        </Button>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            name="current"
            value={Number(inputValue.current).toString()}
            onChange={onChangeInputHandler}
          />
          <label htmlFor="current">Current {units.get(typeOfUtility)}</label>
        </div>

        <div>
          <input
            type="number"
            name="previous"
            value={Number(inputValue.previous).toString()}
            onChange={onChangeInputHandler}
          />
          <label htmlFor="previous">Previous {units.get(typeOfUtility)}</label>
        </div>
        {saved && (
          <div
            className={`flex f-justify-content-center ${
              create_one_operation_error ? 'error' : 'success'
            }`}
          >
            {create_one_operation_error
              ? 'Record doesn`t created'
              : 'Record created'}
          </div>
        )}
        <div className="flex">
          <TariffSelect onSelectTariffHandler={onSelectTariffHandler} />
        </div>

        {computed && (
          <div className="flex f-justify-content-center">
            <p>Result:</p>
            <p>{result.res}</p>
          </div>
        )}

        <div className="flex f-justify-content-center">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Form
