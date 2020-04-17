import axios from 'axios'

export const fetchSmurf = () =>{
  const url = "http://localhost:3333/smurfs"
  return dispatch =>
  {
    dispatch({type:"FETCH_SMURF_START"})
    axios
    .get(url)
    .then(res =>{
      dispatch({type: 'FETCH_SMURF_SUCCESS', payload:res})
    })
    .catch(err =>{
      dispatch({
        type: 'FETCH_SMURF_FAIL',
        payload: `Error, ${err.response.status}: ${err.response.data}`
      })
    })
  }
}


// export const postSmurf = () =>{
//   const url = "http://localhost:3333/smurfs"
//   return dispatch =>
//   {
//     dispatch({type:"FETCH_SMURF_START"})
//     axios
//     .get(url)
//     .then(res =>{
//       dispatch({type: 'FETCH_SMURF_SUCCESS', payload:res})
//     })
//     .catch(err =>{
//       dispatch({
//         type: 'FETCH_SMURF_FAIL',
//         payload: `Error, ${err.response.status}: ${err.response.data}`
//       })
//     })
//   }
// }