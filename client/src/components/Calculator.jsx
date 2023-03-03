import { React, useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { findLastOperation } from '../utility/findLastOperation'
import DropdownMenu from './Dropdown'
import Form from './Form'
import Result from './Result'

const Calculator = () => {
  const options = [
    { value: 'Electricity', label: 'Electricity' },
    { value: 'Natural Gas', label: 'Natural Gas' },
    { value: 'Water', label: 'Water' },
  ]

  const units = new Map()
  units.set('Electricity', 'kW')
  units.set('Water', 'm3')
  units.set('Natural Gas', 'm3')

  const today = new Date()
  const [date, setDate] = useState(today.toISOString().slice(0, 10))
  const { getUtilities } = useContext(GlobalContext)
  const [typeOfUtility, setTypeOfUtility] = useState(options[0].value)
  const { utilities } = getUtilities()
  const lastOperation = findLastOperation(typeOfUtility, date, utilities)
  console.log(lastOperation)

  const [resOfCalc, setResOfCalc] = useState({})

  return (
    <div className="container pos-relative">
      <DropdownMenu options={options} setTypeOfUtility={setTypeOfUtility} />
      <div className="flex gap-2 f-justify-content-center f-align-itm-str">
        <Form
          typeOfUtility={typeOfUtility}
          units={units}
          resOfCalc={resOfCalc}
          setResOfCalc={setResOfCalc}
          today={date}
          setDate={setDate}
          lastOperation={lastOperation}
        />
        <Result
          typeOfUtility={typeOfUtility}
          units={units}
          resOfCalc={resOfCalc}
        />
      </div>
    </div>
  )
}

export default Calculator
