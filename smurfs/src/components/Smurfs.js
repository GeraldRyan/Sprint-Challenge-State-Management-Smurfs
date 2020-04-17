import React from 'react'
import { connect } from 'react-redux'
import { fetchSmurf,postSmurf } from '../Store/actions/smurfActions'

const Smurfs = (props) =>
{
  React.useEffect(() =>
  {
    props.fetchSmurf()
  }, [])

const [formState, setFormState] = React.useState({
  name: "",   
  age: "",
  height: "",
  id: Math.floor(Date.now())
})

const handleClick = (e) =>{
  e.preventDefault()
  props.postSmurf()
}






  return (
    <div>Passed
      <br/>
      <br/>
    {props.smurfSet.map((smurf)=>(
      <>
      <div>Smurf Name: {smurf.name}</div>
      <div>Smurf Age: {smurf.age}</div>
      <div>Smurf Height: {smurf.height}</div>
      </>
    ))}

<form action="">
  <input type="text" placeholder="New Smurf Name"/>
  <br/>
  <input type="number" placeholder="age"/>
  <br/>
  <input type="text" placeholder="height"/>
  <br/>
  <button type="submit" onClick={handleClick}>Submit</button>

</form>

    </div>
  )
}


const mapStateToProps = state =>
{
  console.log("state", state.smurfSet.data)
  return {
    smurfSet: state.smurfSet.data
  }
}

export default connect(mapStateToProps, { fetchSmurf, postSmurf })(Smurfs)