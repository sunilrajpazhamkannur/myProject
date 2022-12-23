import React from 'react'

 function Child({count}) {
  return (
    <div>
        {console.log('Parent component rerentered...')}
        <h1>Child Count : {count} </h1>
    </div>
  )
}
export default React.memo(Child)
