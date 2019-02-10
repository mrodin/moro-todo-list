import React from 'react'
import Button from './Button'

function FilterBar() {
  return (
    <div className='controls flex'>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  )
}

export default FilterBar