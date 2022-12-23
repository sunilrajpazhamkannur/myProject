import React from 'react'

export default function PrintForm(props) {
  return (
    <div>
      <h1>{props.user}</h1>
      <h1>{props.pwd}</h1>
      <h1>{props.domain}</h1>
    </div>
  )
}
