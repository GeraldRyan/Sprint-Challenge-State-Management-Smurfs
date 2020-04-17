import React from 'react'
import { connect } from 'react-redux'
import { fetchSmurf, postSmurf, deleteSmurf } from '../Store/actions/smurfActions'

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

const [id, setID] = React.useState(0)

const handleClick = (e) =>{
  e.preventDefault()
  props.postSmurf(formState)
  setTimeout(() => {props.fetchSmurf()
    
  }, 500);
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

const inputChangeId = e =>{
  e.persist()
  console.log(e.target.value)
  const newID = e.target.value
  setID(newID)
  // setID(e.target.Value)  // displays correctly
  console.log("Id", id)  // why shows undefined? 
}


const deleteSmurf = (e) =>{
  e.preventDefault()
  props.deleteSmurf(id)
  setTimeout(() => {props.fetchSmurf()
    
  }, 500);
  props.fetchSmurf()
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
      <div>Smurf ID: {smurf.id}</div>

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
<br/>
<form action="">
<input type="text" name='id' placeholder="ID" value ={formState.id} onChange={inputChangeId}/>
<button onClick={deleteSmurf}>Delete Smurf by ID</button>

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

export default connect(mapStateToProps, { fetchSmurf, postSmurf, deleteSmurf })(Smurfs)