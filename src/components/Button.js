import React from 'react'

function Button(props) {
  return (
    <button type='button'>
      {props.children}
    </button>
  )
}

export default Button