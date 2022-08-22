import React from 'react'
import MiniButton from './MiniButton'

function Button({array, handleSearch}) {

  return (
    <div className='inner'>
      {array.map((element, index) => {
        return <MiniButton element={element} key={index} handleSearch = {handleSearch}></MiniButton>
      })}
    </div>
  )
}

export default Button
