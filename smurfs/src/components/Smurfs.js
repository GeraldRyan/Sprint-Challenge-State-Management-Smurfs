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
  age: 1,
  height: "",
})

const handleClick = (e) =>{
  e.preventDefault()
  props.postSmurf(formState)
  setTimeout(() => {props.fetchSmurf()
    
  }, 1000);
  props.fetchSmurf()
}

const inputChange = e =>{
  e.persist()
  const newFormData = {
    ...formState,
    [e.target.name]:e.target.value
  }
  setFormState(newFormData)
  console.log("Form State", formState)
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
      <br/>
      </>
    ))}

<form action="" onSubmit={handleClick}>
  <input type="text" name="name" placeholder="New Smurf Name" value ={formState.name} onChange={inputChange}/>
  <br/>
  <input type="number" name="age" placeholder="age" value ={formState.age} onChange={inputChange}/>
  <br/>
  <input type="text" name='height' placeholder="height" value ={formState.height} onChange={inputChange}/>
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