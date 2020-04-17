export const initialState = [{
  smurfSet: {
    name: "Brainey",   // This level may not be necessary or even mvp as api supposed to return
    age: "200",
    height: "5cm",
    id: 0
  },
  id: 1,
  error: false
}]


const url = "http://localhost:3333/smurfs"

export const smurfReducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case 'FETCH_SMURF_START':
      return {

      }
    case 'FETCH_SMURF_SUCCESS':
      return {

      }
    case 'FETCH_SMURF_FAIL':
      return {

      }
    case 'POST_SMURF_START':
      return {

      }
    case 'POST_SMURF_SUCCESS':
      return {

      }
    case 'POST_SMURF_FAIL':
      return {

      }
  }
}