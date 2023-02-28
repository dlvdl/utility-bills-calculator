import { React, useState } from 'react'
import DropdownMenu from './Dropdown'
import Form from './Form'
import Result from './Result'

const Calculator = () => {
  const today = new Date()
  const options = [
    { value: 'Electricity', label: 'Electricity' },
    { value: 'Natural Gas', label: 'Natural Gas' },
    { value: 'Water', label: 'Water' },
  ]

  const units = new Map()
  units.set('Electricity', 'kW')
  units.set('Water', 'm3')
  units.set('Natural Gas', 'm3')

  const [kindOfUtilty, setKindOfUtility] = useState(options[0].value)
  const [resOfCalc, setResOfCalc] = useState({
    cost: 0,
    diff: 0,
    costLastMontn: 0,
    diffLastMonth: 0,
  })

  return (
    <div className="container pos-relative">
      <DropdownMenu
        options={options}
        setKindOfUtility={setKindOfUtility}
        kindOfUtilty={kindOfUtilty}
        today={today}
        resOfCalc={resOfCalc}
        setResOfCalc={setResOfCalc}
      />
      <div className="flex gap-2 f-justify-content-center f-align-itm-str">
        <Form
          kindOfUtilty={kindOfUtilty}
          units={units}
          resOfCalc={resOfCalc}
          setResOfCalc={setResOfCalc}
          today={today}
        />
        <Result
          kindOfUtilty={kindOfUtilty}
          units={units}
          resOfCalc={resOfCalc}
        />
      </div>
    </div>
  )
}

export default Calculator
