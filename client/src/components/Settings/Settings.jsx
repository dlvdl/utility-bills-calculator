import { useState, useEffect } from "react"
import styles from "./settings.module.css"
import { Link } from "react-router-dom"
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
} from "@mui/material"

import DeleteIcon from "@mui/icons-material/Delete"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"
import AddIcon from "@mui/icons-material/Add"
import { useSettingsContext } from "../../context/settings_context"

function Item(props) {
  const { deleteOneSetting, fetchSettings } = useSettingsContext()
  const { name, cost, id } = props
  const clickHandler = (id) => {
    deleteOneSetting(id)
    fetchSettings()
  }

  return (
    <ListItem
      sx={{
        "&:hover": {
          color: "grey",
        },
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={(e) => {
            clickHandler(id)
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
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ListItemText primary={name} secondary={`${cost} UAH`} />
      </Box>
    </ListItem>
  )
}

function ListofTariffs(props) {
  const { settings } = useSettingsContext()
  const [refresh, setRefresh] = useState(true)
  return (
    <List sx={{ m: "4rem 0rem 0rem 0rem" }}>
      {settings.map((tariff) => {
        return (
          <Item
            key={tariff._id}
            id={tariff._id}
            refresh={refresh}
            name={tariff.name}
            cost={tariff.cost}
            setRefresh={setRefresh}
          />
        )
      })}
    </List>
  )
}

function Settings() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: "center",
          m: "1rem 0rem 0rem 0rem",
        }}
      >
        <span className={styles.title}>Settings</span>
        <div>
          <ListofTariffs />
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          m: "2rem 0rem 0rem 0rem",
        }}
      >
        <Link to={"/createTariff"}>
          <Fab>
            <AddIcon />
          </Fab>
        </Link>
      </Box>
    </Container>
  )
}

export default Settings
