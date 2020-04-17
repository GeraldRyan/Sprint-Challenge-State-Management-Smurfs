export const initialState = [{
  smurfSet: {
    name: "Brainey",   // This level may not be necessary or even mvp as api supposed to return
    age: "200",
    height: "5cm",
    id: 0
  },
  isFetching:false,
  isPosting:false,
  error: false
}]


const url = "http://localhost:3333/smurfs"

export const smurfReducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case 'FETCH_SMURF_START':
      return {
        ...state,
        isFetching:true
      }
    case 'FETCH_SMURF_SUCCESS':
      return {
        ...state,
        isFetching:false,
        smurfSet:action.payload,
        error:''
        
      }
    case 'FETCH_SMURF_FAIL':
      return {
        ...state,
        isFetching:false,
        error:action.payload
      }
    case 'POST_SMURF_START':
      return {
        ...state,
        isPosting:true
      }
    case 'POST_SMURF_SUCCESS':
      return {
        ...state,
        isPosting:false,
        smurfSet:[...state.smurfSet, action.payload]
      }
    case 'POST_SMURF_FAIL':
      return {
        ...state,
        isPosting:false,
        error:action.payload
      }
  }
}