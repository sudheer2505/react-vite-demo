import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() { 

let [count, setCount] = useState(0);

let updateCount = () => {
    setCount(prev => prev + 1);
}

let updateTwo = useCallback(() => {
    setCount(prev => prev + 2);
}, [])

  return (
    <>
    <div>Parent</div>
    <div>count value - {count}</div>
    <button onClick={updateCount} >count</button>
    <Child stepTwo={updateTwo}/>
    </>
  )
}

export default Parent