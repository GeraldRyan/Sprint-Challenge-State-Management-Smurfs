import React from 'react'
import { connect } from 'react-redux'
import { fetchSmurf } from '../Store/actions/smurfActions'

const Smurfs = (props) =>
{
  React.useEffect(() =>
  {
    props.fetchSmurf()
  }, [])

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

export default connect(mapStateToProps, { fetchSmurf })(Smurfs)