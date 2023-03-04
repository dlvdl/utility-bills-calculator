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
        <div>
          <form action="">
            <table>
              <tbody>
                <tr>
                  <th>Category</th>
                  <th>Start amount</th>
                  <th>Tariff</th>
                </tr>
                {settings ? (
                  settings.map((value) => {
                    return (
                      <tr key={value.id}>
                        <td>{value.type}</td>
                        <td>
                          <input type="text" defaultValue={value.amount} />
                        </td>

                        <td>
                          <input type="text" defaultValue={value.tariff} />
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <h2>Settings not found</h2>
                )}
              </tbody>
            </table>
            <button onClick={clickHandler}>Change</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings
