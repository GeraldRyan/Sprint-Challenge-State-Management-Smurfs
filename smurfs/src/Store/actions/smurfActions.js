import axios from 'axios'

export const fetchSmurf = () =>
{
  const url = "http://localhost:3333/smurfs"
  return dispatch =>
  {
    dispatch({ type: "FETCH_SMURF_START" })
    axios
      .get(url)
      .then(res =>
      {
        dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: res })
      })
      .catch(err =>
      {
        dispatch({
          type: 'FETCH_SMURF_FAIL',
          payload: `Error, ${err.response.status}: ${err.response.data}`
        })
      })
  }
}


export const postSmurf = (formState) =>
{
  const url = "http://localhost:3333/smurfs"
  return dispatch =>
  {
    dispatch({ type: "POST_SMURF_START" })
    axios
      .post(url, formState)
      .then(res =>
      {
        console.log("res.data", res.data)
        dispatch({ type: 'POST_SMURF_SUCCESS', payload: res })
      })
      .catch(err =>
      {
        console.log("Error object in Posting: \n", err)
        dispatch({
          type: 'POST_SMURF_FAIL',
          payload: err
        })
      })
  }
}

export const deleteSmurf = (id) =>
{
  const url = `http://localhost:3333/smurfs/${id}`
  return dispatch =>
  {
    dispatch({ type: "POST_SMURF_START" })
    axios
      .delete(url)
      .then(res =>
      {
        console.log("res.data", res.data)
        dispatch({ type: 'POST_SMURF_SUCCESS', payload: res })
      })
      .catch(err =>
      {
        console.log("Error object in Posting: \n", err)
        dispatch({
          type: 'POST_SMURF_FAIL',
          payload: err
        })
      })
  }
}