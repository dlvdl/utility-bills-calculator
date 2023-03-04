import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Settings() {
  const [showSettings, setSettings] = useState(false)
  const { getSettings } = useContext(GlobalContext)
  const settings = getSettings()
  const clickHandler = (e) => {
    setSettings(!showSettings)
  }
  console.log(getSettings())

  return (
    <div className="container">
      <div className="flex f-direction-column">
        <h3>Settings</h3>
        {showSettings ? (
          <div>
            <form action="">
              <table>
                <tbody>
                  <tr>
                    <th>Category</th>
                    <th>Start amount</th>
                    <th>Units</th>
                    <th>Tariff</th>
                  </tr>
                  <tr>
                    <td>Water</td>
                    <td>
                      <input type="text" />
                    </td>
                    <td>m3</td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Natural gas</td>
                    <td>
                      <input type="text" />
                    </td>
                    <td>m3</td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Electricity</td>
                    <td>
                      <input type="text" />
                    </td>
                    <td>kwt</td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <button>Save</button>
            <button onClick={clickHandler}>Back</button>
          </div>
        ) : settings ? (
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Category</th>
                  <th>Start amount</th>
                  <th>Units</th>
                  <th>Tariff</th>
                </tr>
                {settings.map((value) => {
                  return (
                    <tr key={value.id}>
                      <td>{value.type}</td>
                      <td>{value.amount}</td>
                      <td>m3</td>
                      <td>{value.tariff}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <button onClick={clickHandler}>ADD</button>
          </div>
        ) : (
          <p>No settings</p>
        )}
      </div>
    </div>
  )
}

export default Settings
