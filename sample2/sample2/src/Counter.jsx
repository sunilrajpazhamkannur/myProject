import React from 'react'

function Counter(props)
//function Counter({title,x}) 
{
    const {title,x} = props
  return (
    <div>
      <h1>{title} {x}</h1>      
    </div>
  );
}

export default Counter
