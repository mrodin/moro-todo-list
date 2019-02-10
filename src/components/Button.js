import React from 'react'

function Button(props) {
  return (
    <button type='button' onclick={props.clickHandler}>
      {props.children}
    </button>
  )
}

export default Button