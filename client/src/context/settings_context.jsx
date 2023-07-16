import axios from 'axios'
import { createContext, useReducer, useEffect, useContext } from 'react'
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
} from '../actions'
import reducer from '../reducers/settings_reducer'

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
}

//for testing
let url = '/api/v1/settings'

// Create context
const SettingsContext = createContext()

// Global provider
export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchSettings = async (url = '/api/v1/settings') => {
    dispatch({ type: GET_SETTINGS_BEGIN })

    try {
      const response = await axios.get(url)
      const settings = response.data
      dispatch({ type: GET_SETTINGS_SUCCESS, payload: settings })
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

  useEffect(() => {
    fetchSettings()
  }, [])

  return (
    <SettingsContext.Provider
      value={{ ...state, createNewSetting, deleteOneSetting, fetchSettings }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = () => {
  return useContext(SettingsContext)
}
