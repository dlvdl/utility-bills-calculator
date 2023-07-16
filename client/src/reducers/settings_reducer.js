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

const settings_reducer = (state, action) => {
  switch (action.type) {
    case GET_SETTINGS_BEGIN:
      return { ...state, settings_loading: true }

    case GET_SETTINGS_SUCCESS:
      return { ...state, settings_loading: false, settings: action.payload }

    case GET_SETTINGS_ERROR:
      return { ...state, settings_loading: false, settings_error: true }

    case CREATE_ONE_SETTING_BEGIN:
      return { ...state, create_setting_loading: true }

    case CREATE_ONE_SETTING_SUCCESS:
      return { ...state, create_setting_loading: false }

    case CREATE_ONE_SETTING_ERROR:
      return {
        ...state,
        create_setting_loading: false,
        create_setting_error: true,
      }

    case DELETE_SETTING_BEGIN:
      return { ...state, delete_setting_loading: true }

    case DELETE_SETTING_SUCCESS:
      return { ...state, delete_setting_loading: false }

    case DELETE_SETTING_ERROR:
      return {
        ...state,
        delete_setting_loading: false,
        delete_setting_error: true,
      }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default settings_reducer
