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
    <div>Passed</div>
  )
}


const mapStateToProps = state =>
{
  console.log("state", state)
  return {
    smurfSet: state.smurfSet
  }
}

export default connect(mapStateToProps, { fetchSmurf })(Smurfs)