import  { useState } from 'react'

const UseForm = (ivalue) => {
    const [value,setValue]=useState(ivalue)
  return [value,
(event)=>{
    setValue({
        ...value,[event.target.name]:event.target.value,
    })
}    
]
}

export default UseForm
