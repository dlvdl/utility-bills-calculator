import React from 'react'
import { useState, useEffect } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Container,
  Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import SaveIcon from '@mui/icons-material/Save'
import { useSettingsContext } from '../../context/settings_context'
import {Factory} from '../../utility/factory'

const CreateTariff = () => {
  const {
    createNewSetting,
    create_setting_loading,
    create_setting_error,
    fetchSettings,
  } = useSettingsContext()
  const [inputValues, setInputValues] = useState({ price: '', name: '' })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [saved])

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = {
      date: new Date().toString(),
      name: inputValues.name,
      cost: inputValues.price,
    }

    const setting = new Factory('Setting', params)
    console.log(setting)
    createNewSetting('/api/v1/settings', setting)

    setSaved(true)
    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  const handleOnChange = (e) => {
    if (e.target.name === 'name')
      setInputValues({ ...inputValues, name: e.target.value })

    if (e.target.name === 'price')
      setInputValues({ ...inputValues, price: e.target.value })
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to={'/settings'}>
              <ArrowBackIosIcon />
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Create tariff
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="save-button"
              sx={{ mr: 2 }}
            >
              <SaveIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Box sx={{ margin: '1rem 0rem 0rem 0rem' }}>
            <TextField
              required
              id="outlined-required"
              label="Tariff name"
              name="name"
              fullWidth
              value={inputValues.name}
              onChange={handleOnChange}
            />
          </Box>
          <Box sx={{ margin: '1rem 0rem 0rem 0rem' }}>
            <TextField
              required
              id="outlined-required"
              label="Price"
              type="number"
              name="price"
              value={inputValues.price}
              onChange={handleOnChange}
            />
          </Box>
          <Box
            sx={{
              margin: '1rem 0rem 0rem 0rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {saved && (
              <div
                className={`flex f-justify-content-center ${
                  create_setting_error ? 'error' : 'success'
                }`}
              >
                {create_setting_error
                  ? 'Record doesn`t created'
                  : 'Record created'}
              </div>
            )}
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Container>
    </>
  )
}

export default CreateTariff
