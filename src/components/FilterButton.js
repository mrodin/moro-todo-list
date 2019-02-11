import React from 'react'

function FilterButton(props) {
  return (
    <button
      type='button'
      style={props.active ? activeButton : null}
      className='filter-button'
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  )
}

const activeButton = {
  color: "#000000",
  background: '#ffffff',
  border: 'none'
}

export default FilterButton