import axios from "axios"
import { createContext, useReducer, useEffect, useContext } from "react"
import {
  GET_OPERATIONS_BEGIN,
  GET_OPERATIONS_SUCCESS,
  GET_OPERATIONS_ERROR,
  GET_ONE_OPERATION_BEGIN,
  GET_ONE_OPERATION_SUCCESS,
  CREATE_ONE_OPERATION_BEGIN,
  CREATE_ONE_OPERATION_SUCCESS,
  CREATE_ONE_OPERATION_ERROR,
  SAVE_ONE_OPERATION_BEGIN,
  SAVE_ONE_OPERATION_ERROR,
  SAVE_ONE_OPERATION_SUCCESS,
} from "../actions"
import reducer from "../reducers/operations_reducer"

const url = "/api/v1/operations"

const initialState = {
  operations_loading: false,
  operations_error: false,
  operations: [],
  one_operation_loading: false,
  one_operation_error: false,
  one_operation: null,
  create_one_operation_error: false,
  save_one_operation_error: false,
  save_one_operation_loading: false,
}

const OperationsContext = createContext()

export const OperationsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchOperations = async (url) => {
    dispatch({ type: GET_OPERATIONS_BEGIN })
    try {
      const response = await axios.get(url)
      const operations = response.data
      dispatch({ type: GET_OPERATIONS_SUCCESS, payload: operations })
    } catch (error) {
      dispatch({ type: GET_OPERATIONS_ERROR })
    }
  }

  const fetchOneOperation = async (url) => {
    dispatch({ type: GET_ONE_OPERATION_BEGIN })

    try {
      const response = await axios(url)
      const oneOperation = response.data
      dispatch({ type: GET_ONE_OPERATION_SUCCESS, payload: oneOperation })
    } catch (error) {
      dispatch({ type: GET_OPERATIONS_ERROR })
    }
  }

  const createOneOperation = async (operation) => {
    dispatch({ type: CREATE_ONE_OPERATION_BEGIN })

    try {
      const response = await axios.post(url, operation)
      const createdOperation = response.data
      dispatch({
        type: CREATE_ONE_OPERATION_SUCCESS,
        payload: createdOperation.data,
      })
    } catch (error) {
      dispatch({ type: CREATE_ONE_OPERATION_ERROR })
    }
  }

  const saveOneOperation = async (operation) => {
    dispatch({ type: SAVE_ONE_OPERATION_BEGIN })
    let path = url + "/save"

    try {
      const response = await axios.post(path, operation)
      const savedOperation = response.data
      dispatch({ type: SAVE_ONE_OPERATION_SUCCESS })
    } catch (error) {
      dispatch({ type: SAVE_ONE_OPERATION_ERROR })
    }
  }

  useEffect(() => {
    fetchOperations(url)
  }, [])

  return (
    <OperationsContext.Provider
      value={{
        ...state,
        fetchOneOperation,
        createOneOperation,
        saveOneOperation,
      }}
    >
      {children}
    </OperationsContext.Provider>
  )
}

export const useOperationsContext = () => {
  return useContext(OperationsContext)
}
