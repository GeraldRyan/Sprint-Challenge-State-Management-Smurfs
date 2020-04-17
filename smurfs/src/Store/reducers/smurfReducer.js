export const initialState = {
  smurfSet: {
    data: [{
      name: "",   
      age: "",
      height: "",
      id: 0
    }]
  },
  isFetching: false,
  isPosting: false,
  error: false
}


export const smurfReducer = (state = initialState, action) =>
{
  console.log("state in reducer:", state)
  switch (action.type)
  {
    case 'FETCH_SMURF_START':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_SMURF_SUCCESS':
      return {
        ...state,
        isFetching: false,
        smurfSet: action.payload,
        error: ''

      }
    case 'FETCH_SMURF_FAIL':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case 'POST_SMURF_START':
      return {
        ...state,
        isPosting: true
      }
    case 'POST_SMURF_SUCCESS':
      return {
        ...state,
        isPosting: false,
        smurfSet: [...state.smurfSet, action.payload]
      }
    case 'POST_SMURF_FAIL':
      return {
        ...state,
        isPosting: false,
        error: action.payload
      }
    default:
      return state
  }
}