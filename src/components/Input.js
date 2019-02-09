import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Input() {
  return (
    <div className='input__container flex margin-bottom--small'>
      <FontAwesomeIcon className='input__faAngleDown' icon={faAngleDown} />
      <form className='input__form'>
        <input
          className='input__input'
          type='text'
          placeholder='What needs to be done?'
          autoComplete='off'
        />
      </form>
    </div>
  )
}

export default Input