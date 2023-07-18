import { useState } from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { useSettingsContext } from "../../context/settings_context"

export default function TariffSelect(props) {
  const [tariff, setTariff] = useState("")
  const { settings, changeCurrentTariff } = useSettingsContext()

  const handleChange = (event) => {
    console.log(event.target.value)
    let id = event.target.value
    setTariff(event.target.value)
    changeCurrentTariff(id)
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
          {settings !== undefined &&
            settings.map((tariff) => (
              <MenuItem key={tariff._id} value={tariff._id}>
                {tariff.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  )
}
