import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useSettingsContext } from '../../context/settings_context'

export default function TariffSelect(props) {
  const { onSelectTariffHandler } = props
  const [tariff, setTariff] = React.useState('')
  const { settings, settings_loading } = useSettingsContext()

  const { settings: tarriffs } = settings

  const handleChange = (event) => {
    setTariff(event.target.value)
    onSelectTariffHandler(+tariff)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Tariff</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={tariff}
          onChange={handleChange}
          autoWidth
          label="Tariff"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {tarriffs !== undefined &&
            tarriffs.map((tariff) => (
              <MenuItem key={tariff._id} value={tariff.cost}>
                {tariff.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  )
}
