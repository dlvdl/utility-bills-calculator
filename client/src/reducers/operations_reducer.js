import {
  GET_OPERATIONS_BEGIN,
  GET_OPERATIONS_SUCCESS,
  GET_OPERATIONS_ERROR,
  GET_ONE_OPERATION_BEGIN,
  GET_ONE_OPERATION_SUCCESS,
  GET_ONE_OPERATION_ERROR,
  CREATE_ONE_OPERATION_BEGIN,
  CREATE_ONE_OPERATION_SUCCESS,
  CREATE_ONE_OPERATION_ERROR,
} from '../actions'

const operations_reducer = (state, action) => {
  switch (action.type) {
    case GET_OPERATIONS_BEGIN:
      return { ...state, operations_loading: true }

    case GET_OPERATIONS_SUCCESS:
      return { ...state, operations_loading: false, operations: action.payload }

    case GET_OPERATIONS_ERROR:
      return { ...state, operations_loading: false, operations_error: true }

    case GET_ONE_OPERATION_BEGIN:
      return { ...state, operations_loading: true }

    case GET_ONE_OPERATION_SUCCESS:
      return {
        ...state,
        operations_loading: false,
        one_operation: action.payload,
      }
    case GET_ONE_OPERATION_ERROR:
      return { ...state, operations_loading: false, one_operations_error: true }

    case CREATE_ONE_OPERATION_ERROR:
      return {
        ...state,
        operations_loading: false,
        create_one_operation_error: true,
      }

    case CREATE_ONE_OPERATION_BEGIN:
      return { ...state, operations_loading: true }

    case CREATE_ONE_OPERATION_SUCCESS:
      return { ...state, operations_loading: false }

    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default operations_reducer
