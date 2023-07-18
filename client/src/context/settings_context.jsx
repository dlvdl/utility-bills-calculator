import axios from "axios"
import { createContext, useReducer, useEffect, useContext } from "react"
import {
  GET_SETTINGS_BEGIN,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_ERROR,
  CREATE_ONE_SETTING_BEGIN,
  CREATE_ONE_SETTING_SUCCESS,
  CREATE_ONE_SETTING_ERROR,
  DELETE_SETTING_BEGIN,
  DELETE_SETTING_SUCCESS,
  DELETE_SETTING_ERROR,
  CHANGE_CURRENT_TARIFF,
} from "../actions"
import reducer from "../reducers/settings_reducer"

// Initial State
const initialState = {
  settings_loading: false,
  settings_error: false,
  create_setting_loading: false,
  create_setting_error: false,
  delete_setting_loading: false,
  delete_setting_error: false,
  refresh_settings: false,
  settings: [],
  current_tariff: null,
}

//for testing
let url = "/api/v1/settings"

// Create context
const SettingsContext = createContext()

// Global provider
export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchSettings = async () => {
    dispatch({ type: GET_SETTINGS_BEGIN })
    try {
      const response = await axios.get(url)
      const settings = response.data

      dispatch({ type: GET_SETTINGS_SUCCESS, payload: settings.data })
    } catch (error) {
      dispatch({ type: GET_SETTINGS_ERROR })
    }
  }

  const createNewSetting = async (url, data) => {
    dispatch({ type: CREATE_ONE_SETTING_BEGIN })
    try {
      const response = await axios.post(url, data)
      dispatch({ type: CREATE_ONE_SETTING_SUCCESS })
    } catch (error) {
      dispatch({ type: CREATE_ONE_SETTING_ERROR })
    }
  }

  const deleteOneSetting = async (id) => {
    dispatch({ type: DELETE_SETTING_BEGIN })
    try {
      const response = await axios.delete(`${url}/${id}`)
      const deletedSetting = response.data
      dispatch({ type: DELETE_SETTING_SUCCESS, payload: deletedSetting })
    } catch {
      dispatch({ type: DELETE_SETTING_ERROR })
    }
  }

  const changeCurrentTariff = async (id) => {
    let route = url + "?id=" + id
    try {
      const res = await axios.get(route)
      const tariff = res.data
      dispatch({ type: CHANGE_CURRENT_TARIFF, payload: tariff.data })
    } catch {}
  }

  useEffect(() => {
    fetchSettings("/api/v1/settings")
  }, [])

  return (
    <SettingsContext.Provider
      value={{
        ...state,
        createNewSetting,
        deleteOneSetting,
        fetchSettings,
        changeCurrentTariff,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = () => {
  return useContext(SettingsContext)
}
