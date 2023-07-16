import { useState, useEffect } from 'react'
import * as React from 'react'
import styles from './settings.module.css'
import { Link } from 'react-router-dom'
import {
  Typography,
  Container,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
  ListItemAvatar,
  Fab,
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import AddIcon from '@mui/icons-material/Add'
import { useSettingsContext } from '../../context/settings_context'

function Item(props) {
  const { tariff, deleteAndRefresh } = props

  return (
    <ListItem
      sx={{
        '&:hover': {
          color: 'grey',
        },
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={(e) => {
            deleteAndRefresh(tariff._id)
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ElectricBoltIcon />
        </Avatar>
      </ListItemAvatar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ListItemText primary={tariff.name} secondary={`${tariff.cost} UAH`} />
      </Box>
    </ListItem>
  )
}

function ListofTariffs(props) {
  const { deleteOneSetting } = useSettingsContext()
  const { renderData, refresh, setRefresh } = props

  const deleteAndRefresh = (id) => {
    deleteOneSetting(id)
    setRefresh(!refresh)
  }

  return (
    <List sx={{ m: '4rem 0rem 0rem 0rem' }}>
      {renderData.map((tariff) => {
        return (
          <Item
            key={tariff._id}
            tariff={tariff}
            deleteAndRefresh={deleteAndRefresh}
          />
        )
      })}
    </List>
  )
}

function Settings() {
  const { settings, settings_loading, settings_error, fetchSettings } =
    useSettingsContext()
  const [refresh, setRefresh] = useState(false)
  const renderData = settings.settings ? settings.settings : []

  useEffect(() => {
    fetchSettings()
  }, [refresh])

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center',
          m: '1rem 0rem 0rem 0rem',
        }}
      >
        <span className={styles.title}>Settings</span>
        <div>
          <ListofTariffs
            renderData={renderData}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'right',
          m: '2rem 0rem 0rem 0rem',
        }}
      >
        <Link to={'/createTariff'}>
          <Fab>
            <AddIcon />
          </Fab>
        </Link>
      </Box>
    </Container>
  )
}

export default Settings
