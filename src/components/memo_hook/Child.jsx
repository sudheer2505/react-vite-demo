import React, { memo } from 'react'

function Child({...props}) {
    console.log("child component", props)
  return (
    <>
    <div>Child - {props.countVal} </div>
    <button onClick={props.stepTwo} >child count</button>
    </>
  )
}
let childV2 = memo(Child)
export default childV2;