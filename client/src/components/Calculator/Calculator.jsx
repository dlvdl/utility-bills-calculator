import { React, useState, useEffect } from 'react'
import { useOperationsContext } from '../../context/operations_context'
import Dropdown from '../Dropdown/Dropdown'
import Form from '../Form/Form'

const Calculator = () => {
  const { fetchOneOperation, one_operation } = useOperationsContext()
  const options = ['Electricity', 'Natural Gas', 'Water']

  const units = new Map()
  units.set('Electricity', 'kW')
  units.set('Water', 'm3')
  units.set('Natural Gas', 'm3')

  const today = new Date()
  const [date, setDate] = useState(today)
  const [typeOfUtility, setTypeOfUtility] = useState(options[0])

  const [serverUrl, setServerUrl] = useState(
    `/api/v1/operations?type=${typeOfUtility}&dateFilters=date<${date}&limit=1`
  )

  useEffect(() => {
    async function start() {
      fetchOneOperation(serverUrl)
    }

    start()
  }, [serverUrl])

  return (
    <div className="container pos-relative">
      <Dropdown
        title={typeOfUtility}
        options={options}
        setTypeOfUtility={setTypeOfUtility}
        setServerUrl={setServerUrl}
        serverUrl={serverUrl}
      ></Dropdown>
      <div className="flex gap-2 f-justify-content-center f-align-itm-str">
        <Form
          typeOfUtility={typeOfUtility}
          units={units}
          today={date}
          setDate={setDate}
          setServerUrl={setServerUrl}
          serverUrl={serverUrl}
        />
      </div>
    </div>
  )
}

export default Calculator
